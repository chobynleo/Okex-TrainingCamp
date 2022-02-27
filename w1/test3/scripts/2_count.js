const { ethers } = require("hardhat");
const Counter = require(`../deployments/${network.name}/Counter.json`);

async function main() {
    
    let [owner]  = await ethers.getSigners();
    console.log(owner.address)
    
    // 实例化合约对象
    let CounterContract = await ethers.getContractAt("Counter", Counter.address, owner);
    await CounterContract.count()
    console.log('counter number:', await CounterContract.counter())
}   

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
});