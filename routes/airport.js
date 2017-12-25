const express = require('express');

const router = express.Router();
const { Airport, City } = require('../models');

router.post('/create', async (req, res) => {
  try {
    const { name, code, cityCode } = req.body;

    const newCity = await Airport.create({
      name,
      code,
      city_code: cityCode,
    });
    res.status(200).json({
      status: 200,
      body: newCity,
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

router.get('/all_airport', async (req, res) => {
  try {
    const airport = await Airport.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'id'],
      },
    });
    res.status(200).json({
      airport,
    });
  } catch (e) {
    res.status(400).send({
      error: e,
    });
  }
});

router.get('/all_airport_city', async (req, res) => {
  try {
    const airport = await Airport.findAll({
      include: [{
        model: City,
        as: 'city',
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'id'],
        },
      }],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'id'],
      },
    });
    res.status(200).json({
      status: 200,
      airport,
    });
  } catch (e) {
    res.status(400).send({
      error: e,
    });
  }
});

router.get('/get/:code', async (req, res) => {
  try {
    const airport = await Airport.findOne({
      where: {
        code: req.params.code,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'id'],
      },
    });

    if (airport) {
      return res.status(200).json({ airport });
    }
    return res.status(404).json({ message: `Airport ${req.params.code} not found` });
  } catch (e) {
    return res.status(400).json({
      message: `Airport ${req.params.code} not found`,
    });
  }
});

module.exports = router;
