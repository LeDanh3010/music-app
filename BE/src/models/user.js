"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Artist, {
        through: "UserFollow_Artist",
        foreignKey: "userId",
      });
      User.belongsToMany(models.Playlist, {
        through: "UserLike_Playlist",
        foreignKey: "userId",
        as: "likedPlaylists",
      });
      User.belongsToMany(models.Song, {
        through: "UserFavorite_Song",
        foreignKey: "userId",
        as: "favoriteSongs",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birthDate: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
