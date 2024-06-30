// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract JobGame {
    address public player;
    int256 public balance;
    bool public jobInProgress;

    event JobStarted(address indexed player);
    event JobFinished(address indexed player, bool jobFinished, int256 scoreChange);

    constructor() {
        player = msg.sender;
        balance = 100; // Initialize balance to 100
        jobInProgress = false;
    }

    function startJob() public {
        require(!jobInProgress, "Job already in progress");
        jobInProgress = true;
        emit JobStarted(player);
    }

    function finishJob(bool jobFinished) public {
        require(jobInProgress, "No job in progress");
        jobInProgress = false;

        int256 scoreChange = jobFinished ? int256(100) : int256(-50); // Explicit type casting
        balance += scoreChange;

        emit JobFinished(player, jobFinished, scoreChange);
    }

    function getPlayer() public view returns (address) {
        return player;
    }

    function getBalance() public view returns (int256) {
        return balance;
    }
}


// 0xdc64a140aa3e981100a9beca4e685f962f0cf6c9