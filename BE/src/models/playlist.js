"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Playlist.belongsTo(models.User, {
        foreignKey: "userId",
      });

      Playlist.belongsToMany(models.Song, {
        through: "Playlist_Song",
        foreignKey: "playlistId",
        as: "songs",
      });

      Playlist.belongsToMany(models.User, {
        through: "UserLike_Playlist",
        foreignKey: "playlistId",
        as: "likedByUsers",
      });
    }
  }
  Playlist.init(
    {
      playlistName: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Playlist",
    }
  );
  return Playlist;
};
