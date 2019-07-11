var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the user model a name of type STRING
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }

    firstname: {
      type: DataTypes.STRING,
      allowNull: true
    }

    lastname: {
      type: DataTypes.STRING,
      allowNull: true
    }

    email: {
      type: DataTypes.STRING,
      allowNull: false
    }

    address1: {
      type: DataTypes.STRING,
      allowNull: true
    }

    address2: {
      type: DataTypes.STRING,
      allowNull: true
    }

    state: {
      type: DataTypes.STRING,
      allowNull: true
    }

    zip: {
      type: DataTypes.STRING,
      allowNull: false
    }

    picture: {
      type: DataTypes.STRING
    }


  });

  User.associate = function(models) {
    // Associating user with Posts
    // When user is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });

  };

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  return User;
};
