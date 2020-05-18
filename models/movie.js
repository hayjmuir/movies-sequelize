module.exports = function (sequelize, DataTypes) {

  var Movie = sequelize.define("movie", {

    movie_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    watched: {
      type: DataTypes.BOOLEAN
    }

  });
  return Movie;
};