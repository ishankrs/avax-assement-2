async function connectWallet() {
    try {
        // Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            // Request account access
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            document.getElementById('walletAddress').innerText = `Wallet Address: ${account}`;
            console.log(`Connected to MetaMask. Wallet address: ${account}`);
        } else {
            throw new Error('MetaMask extension not detected.');
        }
    } catch (error) {
        console.error('Error connecting to MetaMask:', error.message);
        alert('Failed to connect to MetaMask. Please ensure MetaMask is installed and properly configured.');
    }
}

function completeContract(success) {
    let balanceElement = document.getElementById('balance');
    let balance = parseInt(balanceElement.innerText);

    if (success) {
        balance += 100;
    } else {
        balance -= 50;
    }

    balanceElement.innerText = balance;
}

document.getElementById('connectButton').addEventListener('click', connectWallet);
