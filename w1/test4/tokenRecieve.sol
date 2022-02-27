// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Fund {
    address owner;
    uint totalAmout;
    mapping(address => uint256) public balanceOf;

    constructor() {
        owner = msg.sender;
    }

    fallback () external payable {
        uint amount = msg.value;
        balanceOf[msg.sender] += amount;
        totalAmout += amount;
    }

    function withdrawal() public{
        require(msg.sender == owner, 'only call by owner');
        SafeERC20.safeTransfer(IERC20(address(this)), owner, totalAmout);
    }
 
}