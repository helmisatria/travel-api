const express = require('express');

const router = express.Router();
const { City } = require('../models');

router.post('/create', async (req, res) => {
  try {
    const { name, code } = req.body;

    const newCity = await City.create({ name, code });
    res.status(200).json({
      status: 200,
      body: newCity,
    });
  } catch (e) {
    res.status(400).send({
      message: 'Making city canceled, Something went wrong',
      error: e,
    });
  }
});


module.exports = router;
