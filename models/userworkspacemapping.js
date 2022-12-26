'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class UserWorkspaceMapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       this.belongsTo(models.Workspace, {
        foreignKey: 'workspaceId'
       });
      
      this.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      
      this.belongsTo(models.Designation, {
        foreignKey: 'designationId'
      });
    }
  }
  UserWorkspaceMapping.init({
   userId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "user",
          key: 'id'
        }
      },
      designationId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "designation",
          key: 'id'
        }
      },
      workspaceId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "workspace",
          key: 'id'
        }
      }
  }, {
    sequelize,
    paranoid: true,
    tableName: "user_workspace_mapping",
    modelName: 'UserWorkspaceMapping',
  });
  return UserWorkspaceMapping;
};