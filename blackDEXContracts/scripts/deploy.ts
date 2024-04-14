import { ethers } from "hardhat";
import hre from "hardhat";

async function main() {
    const [signer] = await ethers.getSigners();

    // Deploy your contract
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();
    await myContract.deployed();

    // Deploy uniswap contracts
    const {router} = await hre.UniswapV2Deployer.deploy(signer)
    
    // Set router on your contract!
    await myContract.receiveLiquidity(router)
}
