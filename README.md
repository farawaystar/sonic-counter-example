# Sonic Counter Example

This is a demo code for https://docs.sonic.game/developers/getting-started/build-and-deploy-your-first-program


## Directory Structure

- `programs/sonic_example/` - onchain program
- `app/sayHello.ts` -client program
- `feepayer-wallet.json` - wallet for signing transactions


**Prerequisites**
Rust, Solana CLI, Node.js, Anchor

1. **Build**
   ```sh
   anchor build
   ```
2. **Deploy**
   ```sh
   anchor deploy
   ```
   Update the program ID in both the Rust and TypeScript files

3. **Install yarn**
   ```sh
   yarn install
   ```
4. **Run script**
   ```sh
   ts-node app/sayHello.ts
   ```
   This script will create a new greeting account and increment the counter.

- Change the `programId` in `app/sayHello.ts` and `declare_id!` in the Rust program to match your deployed program.

**Expected Output**
```
Generated greetedAccountPubkey: CYkv7dTzfTqo5m2iMNgkURRA1HLM7rFtLgK2bo4T2ZdZ
Greeting account created and initialized with public key: CYkv7dTzfTqo5m2iMNgkURRA1HLM7rFtLgK2bo4T2ZdZ
Initialize transaction: [https://explorer.solana.com/tx/527CcmUgp6TQpCMVp7nzVXo2jWufELNQmnaj8EiRGjQS79Bjv2LdKGBQPzoY4emvwWw2g8F1JbivQZsq7iKJa3ze?cluster=devnet]
Greeting incremented
Increment transaction: [https://explorer.solana.com/tx/5Bizan6ifbvso9pdkW69wmeNdi7DRpNi4NmZWVQS2Qge7hkZMmaR2iJo9NygWU2VWsDfFNEDFQ25E9ojp5bY1UM7?cluster=devnet]
Greeting successful. Account data: {
  counter: 1,
  authority: PublicKey [PublicKey(GefFnZJvUVUPGNZt8gSN7JzxJX3zW5uvyjAkVx12aqTJ)] {
    _bn: <BN: e8850c7ec079135e74ee8c4c227a2fe918f3987102d80fe7f78de099b31e93ad>
  }
}
Done
```

## License
MIT
