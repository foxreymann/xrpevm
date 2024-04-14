import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-uniswap";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    evmSidechain: {
      url: "https://rpc-evm-sidechain.xrpl.org",
      accounts: [process.env.SS0]
    }
  }
};

export default config;
