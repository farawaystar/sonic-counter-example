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

## License
MIT
