const { Keypair } = require('@solana/web3.js');

// Example private key array
const privateKey = Uint8Array.from([205,32,172,12,59,4,97,108,85,218,123,80,21,10,226,118,38,207,8,158,166,58,247,6,3,56,162,57,241,52,140,254,114,98,176,158,229,53,205,57,177,29,77,28,120,171,175,172,239,104,186,6,94,121,218,115,223,42,146,23,48,96,80,171]);

// Create a Keypair from the private key
const keypair = Keypair.fromSecretKey(privateKey);

// Get the public key in hex format
const publicKeyHex = keypair.publicKey.toString('hex');
const privateKeyHex = Buffer.from(keypair.secretKey).toString('hex');

// Output the keys
// console.log("Private Key (Hex):", privateKeyHex);
// console.log("Public Key (Hex):", publicKeyHex);

