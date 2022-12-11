const {Model, DataTypes} = require('sequelize');
const connection = require('../db/connection');


class movies extends Model {
}

movies.init({
  title: DataTypes.STRING,
  age: DataTypes.INTEGER,
  date: DataTypes.DATE,
  country:DataTypes.STRING,
  genre: DataTypes.STRING,
  duration: DataTypes.INTEGER,
  description: DataTypes.STRING,
  language: DataTypes.STRING,
}, {
  sequelize: connection,
  modelName: 'movies',
  tableName: 'movies'
});

module.exports = movies;