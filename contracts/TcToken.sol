pragma solidity ^0.4.2;

contract TcToken {

    // totalSupply is an ERC20 standard
    // for such public variables we will get GET methods by default - not sure

    // After deployment changes create a migrate file and use : truffle migrate --reset
    uint256 public totalSupply;

    function TcToken() public {
        totalSupply = 10000;
    }
}