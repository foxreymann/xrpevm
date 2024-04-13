import {ethers} from "hardhat";
import {EasyAToken} from "../typechain-types";

const main = async () => {
    const EasyATokenFactory = await ethers.getContractFactory("EasyAToken");
    const easyAToken = EasyATokenFactory.attach("0x2a9CA3dC2Eb60487993300eb15099c3E1f1C69f4") as EasyAToken;

    const transaction = await easyAToken.buy({
        value: ethers.parseEther("1"),
    });

    await transaction.wait(1);
}

main();
