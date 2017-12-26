
/**
 *
 * @api {POST} /api/city/create CREATE New City
 * @apiName createNewCity
 * @apiGroup City
 * @apiVersion  0.0.1
 *
 *
 * @apiParam  {String} name Provide the city name
 * @apiParam  {String} code Provide 2/3 digit UPPERCASE the city's code
 *
 * @apiHeader {Bearer} Authorization Bearer <access_token>
 *
 * @apiHeaderExample {Bearer} Request-Example:
 Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA
 *
 * @apiParamExample {json} Request-Example:
  {
    name: "Bandung",
    code: "BND"
  }
 *
 * @apiSuccess (Success 200) {object} city City object details
 *
 * @apiSuccessExample {json} Success-Response:
  {
      "city": {
          "id": 3,
          "name": "Bandung",
          "code": "BND",
          "updatedAt": "2017-12-25T10:49:20.309Z",
          "createdAt": "2017-12-25T10:49:20.309Z"
      }
  }
 *
 * @apiError (Bad Request 400) {string} message Error message
 *
 * @apiErrorExample {json} Error-Response (Invalid Token):
  Error 401: Unauthorized
  {
      "message": "invalid token"
  }
 *
 * @apiErrorExample {json} Error-Response (Not Valid Input):
    Error 400: Bad Request
    {
        "message": "Validation notEmpty on name failed",
        "status": 400
    }
 *
 * @apiErrorExample {json} Error-Response (Not Valid Length Code):
    Error 400: Bad Request
    {
        "message": "Validation len on code failed"
    }
 *
 *
 * @apiErrorExample {json} Error-Response (Code not UPPERCASED):
    Error 400: Bad Request
    {
        "message": "Validation isUppercase on code failed",
        "status": 400
    }
 *
 */

/**
 *
 * @api {GET} /api/city/all_cities GET All Cities
 * @apiName getAllCities
 * @apiGroup City
 * @apiVersion  0.0.1
 *
 * @apiHeader {Bearer} Authorization Bearer <access_token>
 *
 * @apiHeaderExample {Bearer} Request-Example:
 Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA
 *
 *
 * @apiSuccessExample {array} Success-Response:
  [
      {
          "name": "Yogyakarta",
          "code": "HSN"
      },
      {
          "name": "Paris",
          "code": "PAR"
      }
  ]
 *
  * @apiError (Bad Request 400) {string} message Error message
 *
 * @apiErrorExample {json} Error-Response (Invalid Token):
  Error 401: Unauthorized
  {
      "message": "invalid token"
  }
 *
 */

/**
  *
  * @api {GET} /api/city/all_cities_airport GET All Cities w/ Airport(s)
  * @apiName getAllCitiesWithAirports
  * @apiGroup City
  * @apiVersion  0.0.1
  *
  * @apiHeader {Bearer} Authorization Bearer <access_token>
  *
  * @apiHeaderExample {Bearer} Request-Example:
  Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA
  *
  *
  * @apiSuccessExample {array} Success-Response:
    [
        {
            "name": "Paris",
            "code": "PAR",
            "Airports": [
                {
                    "name": "Paris-Orl",
                    "code": "ORY",
                    "city_code": "PAR"
                }
            ]
        },
        {
            "name": "Yogyakarta",
            "code": "HSN",
            "Airports": [
                {
                    "name": "Garuda Indonesia",
                    "code": "HGH",
                    "city_code": "HSN"
                }
            ]
        }
    ]
  *
  * @apiError (Bad Request 400) {string} message Error message
 *
 * @apiErrorExample {json} Error-Response (Invalid Token):
  Error 401: Unauthorized
  {
      "message": "invalid token"
  }
 *
  */

/**
   *
   * @api {GET} /api/city/get/:code GET a City
   * @apiName getCityWithCode
   * @apiGroup City
   * @apiVersion  0.0.1
   *
    * @apiHeader {Bearer} Authorization Bearer <access_token>
    *
    * @apiHeaderExample {Bearer} Request-Example:
    Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA
    *
   * @apiParam  {String} code City's CODE
   *
   * @apiSuccessExample {json} Success-Response:
    {
        "city": {
            "name": "Yogyakarta",
            "code": "YK"
        }
    }
   *
  * @apiError (Bad Request 400) {string} message Error message
  *
  * @apiErrorExample {json} Error-Response (Invalid Token):
    Error 401: Unauthorized
    {
        "message": "invalid token"
    }
  *
   */

/**
 *
 * @api {DELETE} /api/city/delete/:code DELETE City
 * @apiName deleteCity
 * @apiGroup City
 * @apiVersion  0.0.1
 *
  * @apiHeader {Bearer} Authorization Bearer <access_token>
  *
  * @apiHeaderExample {Bearer} Request-Example:
  Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA
  *
 * @apiParam  {String} code City's code wants to be deleted
 *
 * @apiParamExample  {String} Request-Example (Params):
     code: YK
 * @apiSuccessExample {json} Success-Response:
   {
      "message": "City YK deleted"
   }
 *
  * @apiError (Bad Request 400) {string} message Error message
  *
  * @apiErrorExample {json} Error-Response (Invalid Token):
    Error 401: Unauthorized
    {
        "message": "invalid token"
    }
  *
  * @apiErrorExample {json} Error-Response (City Not Found):
    Error 400: Not Found
    {
        "message": "City not found"
    }
  *
 */

/**
  *
  * @api {PUT} /api/city/update/:code UPDATE City
  * @apiName updateCity
  * @apiGroup City
  * @apiVersion  0.0.1
  *
  * @apiHeader {Bearer} Authorization Bearer <access_token>
  *
  * @apiHeaderExample {Bearer} Request-Example:
  Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA
  *
  * @apiParam  {String} code City's CODE
  *
  * @apiParamExample  {String} Request-Example:
      code: BND
  *
  * @apiSuccess (200) {String} [name] City's name
  * @apiSuccess (200) {String} [code] City's code
  *
  *
  * @apiSuccessExample {type} Success-Response:
    {
        "message": "City BND updated"
    }
  *
 *
  * @apiError (Bad Request 400) {string} message Error message
  *
  * @apiErrorExample {json} Error-Response (Invalid Token):
    Error 401: Unauthorized
    {
        "message": "invalid token"
    }
  *
  * @apiErrorExample {json} Error-Response (City Not Found):
    Error 400: Not Found
    {
        "message": "City not found"
    }
  *
  */
