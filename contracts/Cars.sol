// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract Cars is ERC721A{

    address public owner;

    uint256 public MAXIMUM_QUANTITY = 5;

    
    string BASE_URL = "https://gateway.pinata.cloud/ipfs/QmemRZ5xyrzW1Tjxu9YTECTfUH1E6uEiaB75NpGig65rLE/";

    
    string public PROMPT_NAME =
        "Luxury Cars";

    constructor() ERC721A("Cars", "CNFT") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= MAXIMUM_QUANTITY ,"5 Mint maximum");
        _mint(msg.sender, quantity);
    }

    function _baseURI() internal view override returns (string memory){
        return BASE_URL;
    }


    function promptDescription() external view returns (string memory) {
        return PROMPT_NAME;
    }
}
