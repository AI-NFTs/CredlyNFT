const hre = require("hardhat");

async function deploy(tokenSupply, name, symbol, collectionURI) {
  const nft = await hre.ethers.getContractFactory("CommunityNFT");

  const deployedContract = await nft.deploy(
    tokenSupply,
    name,
    symbol,
    collectionURI
  );

  await deployedContract.deployed();

  console.log("nft deployed to:", deployedContract.address);

  return deployedContract;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

module.exports = { deploy };
