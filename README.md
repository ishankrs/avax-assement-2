
# Assesment 2 Contract with a frontend 

## Overview

The  Contract project implements a decentralized game contract using Ethereum smart contracts. Players can interact with the contract through a web interface connected to MetaMask, allowing them to start and finish jobs to earn or lose points .

## Features

- Connect to MetaMask wallet to interact with the game contract.
- Start a job to earn points.
- Finish a job successfully or unsuccessfully to update the balance dynamically.

## Technologies Used

- Ethereum Smart Contracts
- MetaMask for wallet integration
- HTML/CSS for frontend interface
- JavaScript (ethers.js) for Ethereum interactions

## Setup

1. **Clone the repository:**


2. **Install dependencies:**


3. **Deploy Smart Contract:**

   - Deploy the `JobGame.sol` contract using Hardhat or Remix IDE on your local blockchain network (e.g., Ganache).
   - Update the `contractAddress` in `index.html` with the deployed contract address.

4. **Serve the frontend:**

   - Use any static web server to serve `index.html`. For example, using Python:
   
     ```bash
     python3 -m http.server
     ```
   
   This will serve the project at `http://localhost:8000`.

5. **Connect MetaMask:**

   - Ensure MetaMask is installed in your browser.
   - Connect MetaMask to your local Ethereum network (e.g., localhost:8545 for Ganache).

## Usage

1. **Connect to MetaMask:**

   - Click on the "Connect to MetaMask" button to connect your MetaMask wallet.
   - Your wallet address and current balance will be displayed.

2. **Start Job:**

   - Click on "Start Job" to initiate a job.
   - You will receive an alert and status update confirming the job has started.

3. **Finish Job:**

   - After starting a job, use the "Finish Job Successfully" or "Finish Job Unsuccessfully" buttons.
   - Depending on the outcome, your balance will update accordingly.

4. **View Balance:**

   - Your current balance is displayed on the screen and updates dynamically after each job finish.

## Troubleshooting

- **MetaMask Issues:**
  - Ensure MetaMask is properly configured and connected to the correct network.
  - Check for any browser extensions or settings that may interfere with MetaMask.

- **Smart Contract Deployment:**
  - Double-check the contract address in `index.html` matches the deployed contract address.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

##Author : Ishan kashyap.
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
