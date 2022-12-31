"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  class WorkspaceSprintMapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Workspace, {
        foreignKey: "workspace_id",
        targetKey: "id",
        as: "Workspace",
      });

      this.belongsTo(models.Sprint, {
        foreignKey: "sprint_id",
        targetKey: "id",
        as: "Sprint",
      });
    }
  }
  WorkspaceSprintMapping.init(
    {
      workspace_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "workspace",
          key: "id",
        },
      },
      sprint_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "sprint",
          key: "id",
        },
      },
    },
    {
      sequelize,
      paranoid: true,
      tableName: "workspace_sprint_mapping",
      modelName: "WorkspaceSprintMapping",
    }
  );
  return WorkspaceSprintMapping;
};