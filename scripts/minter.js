
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {

  const privateKey = process.env.PRIVATE_KEY;


  const networkAddress = process.env.SEPOLIA_API_KEY;

 
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);


  const signer = new ethers.Wallet(privateKey, provider);


  const contractAddress = "0xDb1db11F7b8e43c2c97BA866264edB2D2D0Bfe0B";

  const Cars = await ethers.getContractFactory("Cars", signer);
  const contract = await Cars.attach(contractAddress);


  await contract.mint(5);

  console.log("Minted 5 tokens");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
