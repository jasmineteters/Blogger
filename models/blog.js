const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Datatypes.NOW,
    },
    author_first: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'first_name',
      },
    },
    author_last: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'last_name',
      },
    },
    comments: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  },
);

module.exports = Blog;
