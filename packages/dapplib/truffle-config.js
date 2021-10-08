require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember social give argue sure twice'; 
let testAccounts = [
"0xac7f625a10b74bd5e737ef6ce806d28c3ed016a2e711d0469d18d213f9acab55",
"0xe9652dae13077b71c1e4e6f67376efb900a52c6cf966f7015125f59d05f16def",
"0x089bd59a63432f89c04a9241bd64288e8ae423f98e7765bb7a32eefe6a2a190f",
"0x848967510b0896aa78215640c9e4b1f597bf31cadec621efef4453db502e39fe",
"0x10d32c24a10c21e3384066e4d358fac78292f300429f1f1e4e769f1ca3d3cddb",
"0xb2d9662ad850f824690585c2e3691ae9ddfe037cbd4db73d411cfca401455027",
"0xe71340a34da90a669ae92bd87ab13a2afdc34b547319e3d989370a42a0291c44",
"0xab464f042e54de2b4de249d31fa33aaf6d22002ef2229c048eed35a60d07d8f8",
"0x74947f50b276cfac27d01a5f024e9c1dd96641dd170eb0d58a0e618db96ebd62",
"0x1301e6cc74e8983dd69c7dbc269e4bb7866c299067be673c0210fe3c05f98d70"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

