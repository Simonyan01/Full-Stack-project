const {Model, DataTypes} = require('sequelize');
const connection = require('../db/connection');


class users extends Model {

  static associate() {

  }

  static async findUserByEmail(email) {
    return this.findOne({
      where: {email}
    });
  }

}

users.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password:DataTypes.STRING
}, {
  sequelize: connection,
  modelName: 'users',
  tableName: 'users'
});

module.exports = users;