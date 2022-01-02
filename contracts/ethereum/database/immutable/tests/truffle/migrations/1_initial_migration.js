const Migrations = artifacts.require("Migrations");
const BWS_DatabaseImmutable = artifacts.require("BWS_DatabaseImmutable");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(BWS_DatabaseImmutable);
};
