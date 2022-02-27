const { ethers, upgrades, network, artifacts } = require("hardhat");
const { writeAbiAddr } = require('./log.js');

async function main() {

  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  await counter.deployed();

  let Artifact = await artifacts.readArtifact("Counter")

  await writeAbiAddr(Artifact, counter.address, "Counter", network.name);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
