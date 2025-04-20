# Sonic Counter Example

this is a demo code from https://docs.sonic.game/developers/getting-started/build-and-deploy-your-first-program


## Directory Structure

- `programs/sonic_example/` - The Anchor-based Solana program (Rust).
- `app/sayHello.ts` - Example TypeScript script to interact with the deployed program.
- `feepayer-wallet.json` - Local wallet used for signing transactions in the example script.


## Prerequisites
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

3. **Run**

1. Install yarn:
   ```sh
   yarn install
   ```
2. Run script:
   ```sh
   ts-node app/sayHello.ts
   ```
   This script will create a new greeting account and increment the counter.
   
- Change the `programId` in `app/sayHello.ts` and `declare_id!` in the Rust program to match your deployed program.

## License
MIT
