"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Designation, {
        through: models.UserDesignationMapping,
        foreignKey: "user_id",
        as: "Designation",
      });

      this.belongsToMany(models.Role, {
        through: models.UserRoleMapping,
        foreignKey: "user_id",
        as: "Role",
      });

      this.belongsToMany(models.Workspace, {
        through: models.UserWorkspaceMapping,
        foreignKey: "user_id",
        as: "Workspace",
      });

      this.hasMany(models.Task, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "Task",
      });
    }
  }
  User.init(
    {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlpha: true,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlpha: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlphanumeric: true,
      },
    },
    {
      sequelize,
      paranoid: true,
      tableName: "user",
      modelName: "User",
    }
  );
  return User;
};
