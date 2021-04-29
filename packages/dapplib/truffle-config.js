require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'idea climb flee skull guard render remind puppy hunt basket food gentle'; 
let testAccounts = [
"0x6ec8392e78541a11dd23bb55217a4ee0b663da038637351d711a82b2e62bc33e",
"0xe47b18ade4906513c21d62764c1c70548f79c490ba05c52fd0d1ce17b18e772d",
"0x5fce3f77626a034a6a5c2db95bcc98b23a4078d6accfcf6f8dbc01b19320000f",
"0x975aaa19008ae1664a850f288b5a9e92a30366b32811985a3db333bdacf3c6dd",
"0x800a06a6899c8f26fc33f59c98c679ec263c6c26b9700a3f332756d26d3175d9",
"0xe63324f2298ca97841165aa2626d8ff1e08b989ae3bd92e8e3e379d8e9baf6f1",
"0xdbb24707ce58c8c243250270e34414d37617796f56aa6a7ae036cdf04ee3f340",
"0x0188add266a0a7d2be1cd3ac96f63fb3e538e1430ae1bd0c82e29e1b0491b015",
"0x17e520643c72ca79d19b4f808f88c44afa3dc5e76ef36ff77eae99bb3118c16a",
"0x63b896f2991a381f63852df9ffeed43ba6b85c1e27b0546da59fcf6375149a2a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

