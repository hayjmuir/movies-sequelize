module.exports = function (sequelize, DataTypes) {

  let Movie = sequelize.define("movie", {

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