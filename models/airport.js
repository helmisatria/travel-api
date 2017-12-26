module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define('Airport', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        isUppercase: true,
        len: [2, 3],
      },
      allowNull: false,
    },
  });

  Airport.associate = (models) => {
    Airport.belongsTo(models.City, {
      foreignKey: {
        name: 'city_code',
        allowNull: false,
      },
      targetKey: 'code',
      as: 'city',
      constraints: false,
    });
  };

  return Airport;
};
