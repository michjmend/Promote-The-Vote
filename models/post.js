module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    picture: {
      type: DataTypes.STRING
    }
  });

  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });


  };

  return Post;
};
