const Migrations = artifacts.require("Migrations");
const DBImmutableBytes32 = artifacts.require("DatabaseImmutableBytes32");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(DBImmutableBytes32);
};
