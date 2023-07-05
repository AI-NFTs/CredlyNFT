/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const { task } = require("hardhat/config");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

const {
  PRIVATE_KEY,
  SCAN_API_KEY,
  ROYALTY_RECEIVER_ADDR,
} = process.env;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

task("etherscan-verify", "Verifies on etherscan", async (taskArgs, hre) => {
  console.log("Verifying contract on etherscan...");
  await hre.run("verify:verify", {
    address: CONTRACT_ADDRESS,
    constructorArguments: [ROYALTY_RECEIVER_ADDR],
    network: taskArgs["network"],
  });
});

/*
 * ensure that the defaultNetwork is set to the network of your choice
 * before running any scripts to interact with the deploy smart contract
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "testnet",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    hardhat: {},
    testnet: {
      url: 'https://rpc.testnet.fantom.network',
      chainId: 4002,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mainnet: {
      url: 'https://rpcapi.fantom.network',
      chainId: 250,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },


};
