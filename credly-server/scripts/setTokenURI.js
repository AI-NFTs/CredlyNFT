const hre = require("hardhat");

const userAddress = "0xa109BC6F8292B52A6f89e8Fc5EABF2947EC31bFA";
const contractAddress = "0xD7c9cAae85de9b2B530DEb3e9d3CD730D7e564d0";
const tokenURI =
  "https://bafybeibanszr2hr36jjnvmrw4pjeqwdz7qj2ygyqs2cv56n6uyzvmbn33e.ipfs.w3s.link/0.json";

const tokenURI1 =
  "https://bafybeic3yzgzfqrzzhjufx6swrnsmcwluftbqutdyywb2x72rrwlwythpu.ipfs.w3s.link/1.json";

const tokenURI2 =
  "https://bafybeieozisn4flqhmepzeztqhudr2yeatp4wzqirpd6m3jtca57sx6tw4.ipfs.w3s.link/2.json";

const tokenURI3 =
  "https://bafybeifawr4vd3m3n6io6hx763h7wj65o7if22cgzyt2v2k3xufqogii4a.ipfs.w3s.link/3.json";

async function setTokenURI() {
  console.log(
    `Setting tokenURI for ${userAddress} on contract ${contractAddress}...`
  );
  if (!tokenURI || !userAddress || !contractAddress) {
    console.log("args not fully provided");
    return;
  }

  const CommunityNFT = await hre.ethers.getContractFactory("CommunityNFT");
  const nft = await CommunityNFT.attach(contractAddress);

  console.log("CommunityNFT attached to:", nft.address);

  console.log("Setting token uri...", tokenURI);

  const res = await nft.setTokenURI(userAddress, tokenURI3);

  console.log("Set token uri", res);
}

module.exports = { setTokenURI };

setTokenURI();
