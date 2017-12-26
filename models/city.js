module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
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

  City.associate = (models) => {
    City.hasMany(models.Airport, {
      foreignKey: {
        name: 'city_code',
        allowNull: false,
      },
      onDelete: 'cascade',
      sourceKey: 'code',
      as: 'airports',
      constraints: false,
    });
  };

  return City;
};
