import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    evmSidechain: {
      url: "https://rpc-evm-sidechain.xrpl.org",
      accounts: [process.env.SS0]
    }
  }
};

export default config;
