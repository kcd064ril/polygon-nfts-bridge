require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


console.log(process.env.MUMBAI_API_KEY)

module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: process.env.MUMBAI_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: process.env.SEPOLIA_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
