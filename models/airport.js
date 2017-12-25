module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define('Airport', {
    name: DataTypes.STRING,
    code: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  Airport.associate = (models) => {
    Airport.belongsTo(models.City, { foreignKey: 'city_code', targetKey: 'code', as: 'city' });
  };

  return Airport;
};
