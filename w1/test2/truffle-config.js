const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync("../../.mnemonic_goerli").toString().trim();

module.exports = {
  compilers: {
    solc: {
      version: "0.8.9",
    }
  },
  networks: {

    development: {
      host: "127.0.0.1",
      network_id: 31337,
      port: 8545,
    },

    goerli: {
      provider: function() { 
        return new HDWalletProvider(mnemonic, "https://eth-goerli.alchemyapi.io/v2/Vj3tem8IEHDD5JpLBsbVuLlnngG4WzpT")
      },
      network_id: 5,
    },

  }

};