var HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = 'cefe26a3e7511568b2fa2e4bf03c6b498c8cd40dcbf383ca03f9671ff33d53ad';

module.exports = {
  networks: {
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "pragma"
    }
  }
};
  
