require('dotenv').config();
const web3_js_1 = require('@solana/web3.js');
const Fs = require('fs');
const searcher_1 = require('jito-ts/dist/sdk/searcher');
const utils_1 = require('./jito-utils');

const {
    searcherClient,
  } = require('jito-ts/dist/sdk/block-engine/searcher.js');

const main = async () => {
    const blockEngineUrl = process.env.BLOCK_ENGINE_URL || '';
    console.log('BLOCK_ENGINE_URL:', blockEngineUrl);

    const decodedKey = new Uint8Array(
        // JSON.parse(fs.readFileSync('auth.json').toString()) as number[],
        JSON.parse(Fs.readFileSync('auth.json').toString()),
      );
    // const keypair = Keypair.fromSecretKey(decodedKey);
    const keypair = web3_js_1.Keypair.fromSecretKey(decodedKey);
    const bundleTransactionLimit = parseInt(
        process.env.BUNDLE_TRANSACTION_LIMIT || '0'
    );
    const client = (0, searcher_1.searcherClient)(blockEngineUrl, keypair);

    const rpcUrl = process.env.RPC_URL || '';
    console.log('RPC_URL:', rpcUrl);
    const conn = new web3_js_1.Connection(rpcUrl, 'confirmed');

      
    await (0, utils_1.onPendingTransactions)(
        client,
        [],
        bundleTransactionLimit,
        keypair,
        conn
    );
    (0, utils_1.onBundleResult)(client);
};
main()
    .then(() => {
        // console.log('Back running:', process.env.ACCOUNTS_OF_INTEREST);
    })
    .catch(e => {
        throw e;
    });
