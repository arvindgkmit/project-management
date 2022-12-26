'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class UserRoleMapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       this.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      this.belongsTo(models.Role, {
        foreignKey: 'roleId'
      });
    }
  }
  UserRoleMapping.init({
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "user",
          key: 'id'
        }
      },
      roleId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "role",
          key: 'id'
        }
      }
  }, {
    sequelize,
    paranoid: true,
    tableName: "user_role_mapping",
    modelName: 'UserRoleMapping',
  });
  return UserRoleMapping;
};