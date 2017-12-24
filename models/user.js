module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    googleId: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    paranoid: true,
  });

  User.associate = (models) => {

  };

  return User;
};
