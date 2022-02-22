const marketplaceBoilerplate = artifacts.require("marketplaceBoilerplate");

module.exports = function(deployer) {
  deployer.deploy(marketplaceBoilerplate);
};