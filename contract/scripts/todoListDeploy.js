const { ethers } = require('hardhat')

const main = async () => {
	const [deployer] = await ethers.getSigners()

	console.log(`Deploying the contract with the address ${deployer.address}`)
	console.log(
		`Account Balance: ${await ethers.provider.getBalance(deployer.address)}`,
	)

	const todoList = await ethers.deployContract('TodoList')

	console.log('TodoList Contract Address: ', await todoList.getAddress())
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
