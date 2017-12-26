const express = require('express');

const router = express.Router();
const { Airport, City } = require('../models');

router.post('/create', async (req, res) => {
  try {
    const { name, code, cityCode } = req.body;

    const newAirport = await Airport.create({
      name,
      code,
      city_code: cityCode,
    });
    res.status(200).json({
      status: 200,
      airport: newAirport,
    });
  } catch (e) {
    if (e.errors) {
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
        const msg = message || e;
        res.status(400).send({
          msg,
        });
      }
    } else {
      res.status(400).send({
        message: "City's code not found",
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
    res.status(200).json(airport);
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
    res.status(200).json(airport);
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

router.delete('/delete/:code', async (req, res) => {
  try {
    const airport = await Airport.destroy({
      where: {
        code: req.params.code,
      },
    });

    if (airport === 0) {
      return res.status(404).send({
        message: 'Airport not found',
      });
    }
    return res.status(200).send({
      message: `Airport ${req.params.code} deleted`,
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
    const airport = await Airport.update(body, {
      where: {
        code: req.params.code,
      },
    });

    if (airport[0] === 1) {
      return res.status(200).send({
        message: `Airport ${req.params.code} updated`,
      });
    }
    return res.status(400).send({
      message: 'Airport not found',
    });
  } catch (e) {
    return res.status(400).send({
      error: e,
    });
  }
});

module.exports = router;
