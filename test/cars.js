const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CarsNFT", () => {
  let signer;
  let account1;
  let account2;
  let contract;

  beforeEach(async () => {
    // Get signers
    [signer, account1, account2] = await ethers.getSigners();

    // Deploy contract
    const Cars = await ethers.getContractFactory("Cars");
    contract = await Cars.deploy();
    await contract.deployed();
  });

  // Test that the prompt description is set correctly
  it("should set the correct prompt description", async () => {
    expect(await contract.promptDescription()).to.equal(
      "https://gateway.pinata.cloud/ipfs/QmZF5S33oXteEZi5RpsQipt2UdmZ6YmENx32p6kTLaQpXR"
    );
  });

  // Test that the signer can mint tokens
  it("should allow the signer to mint tokens", async () => {
    await contract.connect(signer).mint(5);

    expect(await contract.totalSupply()).to.equal(5);
    expect(await contract.balanceOf(signer.address)).to.equal(5);
  });

  // Test that non-signers cannot mint tokens
  it("should not allow non-signers to mint tokens", async () => {
    await expect(contract.connect(account1).mint(5)).to.be.revertedWith(
      "Only signer can perform this action!"
    );

    expect(await contract.totalSupply()).to.equal(0);
    expect(await contract.balanceOf(account1.address)).to.equal(0);
  });

  // Test that minting more than the maximum quantity is not allowed
  it("should not allow minting more than the maximum quantity", async () => {
    await contract.connect(signer).mint(5);

    await expect(contract.connect(signer).mint(1)).to.be.revertedWith(
      "You can not mint more than 5"
    );

    expect(await contract.totalSupply()).to.equal(5);
    expect(await contract.balanceOf(signer.address)).to.equal(5);
  });
});
