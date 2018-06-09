var TcToken = artifacts.require("./TcToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TcToken);
};
