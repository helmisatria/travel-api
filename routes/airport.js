const express = require('express');

const router = express.Router();
const { Airport } = require('../models');

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
    res.status(400).send({
      message: 'Making Airport canceled, Something went wrong',
      error: e,
    });
  }
});


module.exports = router;
