const { Connection, clusterApiUrl, Keypair, LAMPORTS_PER_SOL } = require('@solana/web3.js');

// Create a connection to the devnet
const connection = new Connection(clusterApiUrl('testnet'), 'confirmed');

// Assume 'payer' is your Keypair (wallet)
// const payer = Keypair.generate(); // Or use your existing Keypair
const privateKeyHex = 'cd20ac0c3b04616c55da7b50150ae27626cf089ea63af7060338a239f1348cfe7262b09ee535cd39b11d4d1c78abafacef68ba065e79da73df2a9217306050ab';

// Convert hex to Uint8Array
const privateKey = Uint8Array.from(Buffer.from(privateKeyHex, 'hex'));


async function airdropSol() {
    try {
        const payer = Keypair.fromSecretKey(privateKey);

        console.log("Starting airdrop...");
        // Airdrop 1 SOL to your wallet
        const airdropSignature = await connection.requestAirdrop(
            payer.publicKey,
            LAMPORTS_PER_SOL
        );
        
        // Confirm the transaction
        await connection.confirmTransaction(airdropSignature);
        console.log("Airdrop completed successfully.");
    } catch (error) {
        console.error("Airdrop failed:", error);
    }
}

airdropSol();
