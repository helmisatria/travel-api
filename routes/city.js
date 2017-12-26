const express = require('express');

const router = express.Router();
const { City, Airport } = require('../models');

router.post('/create', async (req, res) => {
  try {
    const { name, code } = req.body;

    const newCity = await City.create({ name, code });
    res.status(200).json({
      city: newCity,
    });
  } catch (e) {
    const { validatorKey, message } = e.errors[0];

    if (validatorKey === 'not_unique') {
      res.status(400).send({
        message,
      });
    } else if (validatorKey === 'notEmpty') {
      res.status(400).send({
        message,
      });
    } else {
      res.status(400).send({
        message,
      });
    }
  }
});

router.get('/all_cities', async (req, res) => {
  try {
    const cities = await City.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'id'],
      },
    });
    res.status(200).json(cities);
  } catch (e) {
    res.send(400).send({
      error: e,
    });
  }
});

router.get('/all_cities_airport', async (req, res) => {
  try {
    const cities = await City.findAll({
      include: [{
        model: Airport,
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'id'],
        },
        as: 'airports',
      }],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'id'],
      },
    });
    res.status(200).json(cities);
  } catch (e) {
    res.send(400).send({
      error: e,
    });
  }
});

router.get('/get/:code', async (req, res) => {
  try {
    const city = await City.findOne({
      where: {
        code: req.params.code,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'id'],
      },
    });

    if (city) {
      return res.status(200).json({ city });
    }
    return res.status(404).json({ message: `City ${req.params.code} not found` });
  } catch (e) {
    return res.status(400).json({
      message: `City ${req.params.code} not found`,
    });
  }
});

router.delete('/delete/:code', async (req, res) => {
  try {
    const city = await City.destroy({
      where: {
        code: req.params.code,
      },
    });

    if (city === 0) {
      return res.status(400).send({
        message: 'City not found',
      });
    }
    return res.status(200).send({
      message: `City ${req.params.code} deleted`,
    });
  } catch (e) {
    return res.status(400).send({
      error: e,
    });
  }
});

router.put('/update/:code', async (req, res) => {
  const { body } = req;

  try {
    const city = await City.update(body, {
      where: {
        code: req.params.code,
      },
    });

    if (city[0] === 1) {
      return res.status(200).send({
        message: `City ${req.params.code} updated`,
      });
    }
    return res.status(400).send({
      message: 'City not found',
    });
  } catch (e) {
    return res.status(400).send({
      error: e,
    });
  }
});

module.exports = router;
