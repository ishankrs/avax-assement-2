const { ethers } = require("hardhat");

async function main() {
    // Replace with your MetaMask account's private key or mnemonic phrase
    const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

    try {
        if (!privateKey.startsWith("0x")) {
            throw new Error("Invalid private key format: must start with '0x'");
        }

        // Create an ethers wallet instance from the private key
        const wallet = new ethers.Wallet(privateKey, ethers.provider);

        // Replace with your actual contract address if already deployed
        const contractAddress = "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9"; // Or set to the actual contract address if already deployed

        if (contractAddress) {
            // Connect to an existing contract
            const contract = await ethers.getContractAt("JobGame", contractAddress, wallet);
            console.log("JobGame contract already deployed at:", contractAddress);
        } else {
            // Deploy a new contract instance
            const JobGame = await ethers.getContractFactory("JobGame");
            const jobGame = await JobGame.deploy();
            
            console.log("JobGame contract deployed at:", jobGame.address);
        }
    } catch (error) {
        console.error("Error deploying or connecting to contract:", error);
        process.exit(1); // Exit script with error status
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Unhandled error during deployment:", error);
        process.exit(1); // Exit script with error status
    });
