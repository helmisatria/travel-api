const express = require('express');

const router = express.Router();

/**
 *
 * @api {GET} / Homepage
 * @apiName Homepage
 * @apiGroup home
 * @apiVersion  1.0.0
 *
 * @apiSuccess (200) {string} firstname Nama Depan
 *
 * @apiParamExample  {JSON} Request-Example:
   {
       firstname : Helmi
   }
 *
 *
 * @apiSuccessExample {JSON} Success-Response:
   {
       firstname : Helmi
   }
 *
 *
 */
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'success',
  });
});

module.exports = router;
