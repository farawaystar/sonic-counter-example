import {
  Connection,
  PublicKey,
  Keypair,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction
} from '@solana/web3.js';
import { Program, AnchorProvider } from '@project-serum/anchor';
import idl from '../target/idl/hello_sonic_world.json'; // Make sure you have the correct IDL file
import feepayer_wallet from "../feepayer-wallet.json";
const programId = new PublicKey('2ZRGZmSMXBeJJjKcQU5naTf33XLBTEihByaPpEkDasuS');
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
// const connection = new Connection('https://api.testnet.sonic.game', 'confirmed');
const feePayer = Keypair.fromSecretKey(new Uint8Array(feepayer_wallet));

// Minimal wallet adapter for Anchor
const wallet = {
  publicKey: feePayer.publicKey,
  signTransaction: async (tx: Transaction) => {
    tx.partialSign(feePayer);
    return tx;
  },
  signAllTransactions: async (txs: Transaction[]) => {
    return txs.map(tx => {
      tx.partialSign(feePayer);
      return tx;
    });
  }
};

const provider = new AnchorProvider(connection, wallet, {
  preflightCommitment: 'confirmed',
});

const program = new Program(idl as any, programId, provider);

async function sayHello() {
  // Create the greeting account
  const greetedAccountKeypair = Keypair.generate();
  const greetedAccountPubkey = greetedAccountKeypair.publicKey;

  console.log('Generated greetedAccountPubkey:', greetedAccountPubkey.toBase58());

  // Initialize the greeting account (Anchor will create it)
  const initSig = await program.rpc.initialize(feePayer.publicKey, {
    accounts: {
      greetingAccount: greetedAccountPubkey,
      user: feePayer.publicKey,
      systemProgram: SystemProgram.programId,
    },
    signers: [greetedAccountKeypair, feePayer],
  });

  console.log('Greeting account created and initialized with public key:', greetedAccountPubkey.toBase58());
  console.log(`Initialize transaction: [https://explorer.solana.com/tx/${initSig}?cluster=devnet]`);

  // Increment the greeting counter
  const incrementSig = await program.rpc.incrementGreeting({
    accounts: {
      greetingAccount: greetedAccountPubkey,
      authority: feePayer.publicKey,
    },
  });

  console.log('Greeting incremented');
  console.log(`Increment transaction: [https://explorer.solana.com/tx/${incrementSig}?cluster=devnet]`);

  // Fetch the account data
  const account = await program.account.greetingAccount.fetch(
    greetedAccountPubkey
  );

  console.log('Greeting successful. Account data:', account);
}

sayHello()
  .then(() => console.log('Done'))
  .catch(console.error);
