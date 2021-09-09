const { projectID, mnemonic } = require("./.secrets.json");
const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  contracts_build_directory: path.join(__dirname, "src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: "8545",
      network_id: "*", // Match any network id
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic.kovan,
          `https://kovan.infura.io/v3/${projectID}`
        );
      },
      network_id: 42,
      gas: 5000000,
      gasPrice: 50000000000,
      networkCheckTimeout: 100000,
      skipDryRun: true,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic.rinkeby,
          `https://rinkeby.infura.io/v3/${projectID}`
        );
      },
      network_id: 4,
      gas: 5000000,
      gasPrice: 50000000000,
      networkCheckTimeout: 100000,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.4",
      docker: false,
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "byzantium",
      },
    },
  },
  plugins: ["solidity-coverage"],
  db: {
    enabled: false,
  },
};
