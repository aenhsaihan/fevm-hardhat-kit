require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("hardhat-deploy-ethers")
require("./tasks")
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
            details: { yul: false },
          },
        },
      },
    defaultNetwork: "calibrationnet",
    networks: {
        localnet: {
            chainId: 31415926,
            url: "hthttps://fictional-yodel-vrqw6qqpj72prww.github.dev/tp://127.0.0.1:1234/rpc/v1",
            accounts: [PRIVATE_KEY],
        },
        calibrationnet: {
            chainId: 314159,
            url: "https://api.calibration.node.glif.io/rpc/v1",
            accounts: [PRIVATE_KEY],
        },
        filecoinmainnet: {
            chainId: 314,
            url: "https://api.node.glif.io",
            accounts: [PRIVATE_KEY],
        },
        bsctestnet: {
            url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
            chainId: 97,
            gasPrice: 20000000000,
            accounts: [PRIVATE_KEY]
        }
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
}
