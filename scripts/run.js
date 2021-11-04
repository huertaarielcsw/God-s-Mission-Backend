const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ['Raphael', 'Mikhael', 'Gabrielle'], // Names
    [
      'QmU9HYyUccnXXCwXf8sCUR23iq96DJ8juooSPQBtyPqfVo', // Images
      'QmUskmiCJVf6DBpkCNhfpBvjWvb7i8ZZqTbS7fZ8pFGWGd',
      'QmXeFw4BhqPW3JpzMmbYN1JNuNNMUxLbDbwpnUWoQbs9Wf',
    ],
    [250, 90, 500], // HP values
    [80, 150, 20], // Attack damage values
    [15, 20, 5], //Defense values
    [150, 300, 100], //Sacred power values
    'Satan', // Boss name
    'QmaHpRwuN1Z2kJr57upfowHidhCDe35dGuLGc485RzwvHF', // Boss image
    10000, // Boss hp
    45 // Boss attack damage
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);
  let txn;
  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
  /*let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log('Token URI:', returnedTokenUri);*/
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
