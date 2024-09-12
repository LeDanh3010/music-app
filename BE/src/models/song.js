"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsToMany(models.Playlist, {
        through: "Playlist_Song",
        foreignKey: "songId",
      });
      Song.belongsToMany(models.User, {
        through: "UserFavorite_Song",
        foreignKey: "songId",
        as: "favoriteUsers",
      });

      Song.belongsToMany(models.Genre, {
        through: "Song_Genre",
        foreignKey: "songId",
        as: "genres",
      });

      Song.belongsTo(models.Album, {
        foreignKey: "albumId",
      });
      Song.belongsTo(models.Artist, {
        foreignKey: "artistId",
      });
    }
  }
  Song.init(
    {
      songName: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      albumId: DataTypes.INTEGER,
      artistId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Song",
    }
  );
  return Song;
};
