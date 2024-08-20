"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.belongsToMany(models.User, {
        through: "UserFollow_Artist",
        foreignKey: "artistId",
      });
      Artist.hasMany(models.Song);
      Artist.hasMany(models.Album);
    }
  }
  Artist.init(
    {
      artistName: DataTypes.STRING,
      bio: DataTypes.TEXT,
      genre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Artist",
    }
  );
  return Artist;
};
