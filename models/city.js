module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    code: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  City.associate = (models) => {
    City.hasMany(models.Airport, {
      onDelete: 'cascade',
      foreignKey: 'city_code',
      sourceKey: 'code',
    });
  };

  return City;
};
