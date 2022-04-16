import { expect } from "chai";
import { ethers } from "hardhat";

describe("Main", function () {
  it("Main test", async function () {
    const Main = await ethers.getContractFactory("Main");
    const deployed = await Main.deploy("0xc4B4b0D22A4607025c6b33A220a316DB6c6D2f6a");
    console.log('deployed is ');
    console.log(deployed);
    //await greeter.deployed();

    //expect(await greeter.greet()).to.equal("Hello, world!");

    //const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    //// wait until the transaction is mined
    //await setGreetingTx.wait();

    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
