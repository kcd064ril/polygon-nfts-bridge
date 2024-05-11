const hre = require("hardhat");
const fs = require("fs");

async function main() {
  // Get the contract factory
  const CARS = await hre.ethers.getContractFactory("Cars");

  // Deploy the contract
  const carsNft = await CARS.deploy();

  // Wait for the contract to be deployed
  await carsNft.deployed();

  // Log the contract address
  console.log("NFT contract deployed to:", carsNft.address);
}

// Execute the deployment function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
