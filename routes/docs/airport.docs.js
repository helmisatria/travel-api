
/**
 *
 * @api {POST} /api/airport/create CREATE New Airport
 * @apiName createNewCity
 * @apiGroup Airport
 * @apiVersion  0.0.1
 *
 *
 * @apiParam  {String} name Provide the airport name
 * @apiParam  {String} code Provide 2/3 digit UPPERCASE the airport's code
 *
 * @apiHeader {Bearer} Authorization Bearer <access_token>
 *
 * @apiHeaderExample {Bearer} Request-Example:
 Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA

 *
 * @apiParamExample {json} Request-Example:
  {
    "name": "Paris-Orl",
    "code": "232",
    "cityCode": "HSN"
  }
 *
 * @apiSuccess (Success 200) {int} status HTTP Status code
 * @apiSuccess (Success 200) {body} body New Airport object details
 *
 * @apiSuccessExample {json} Success-Response:
  {
      "status": 200,
      "body": {
          "id": 15,
          "name": "Paris-Orl",
          "code": "232",
          "city_code": "HSN",
          "updatedAt": "2017-12-26T03:32:46.191Z",
          "createdAt": "2017-12-26T03:32:46.191Z"
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
 * @apiErrorExample {json} Error-Response (Name and Code Required):
    Error 400: Bad Request
    {
        "msg": "Airport.code cannot be null"
    }
 *
 * @apiErrorExample {json} Error-Response (Airport's CODE should Exist):
    Error 400: Bad Request
    {
        "message": "Airport's code not found"
    }
 *
 */

/**
  *
  * @api {GET} /api/airport/all_airport GET All Airport
  * @apiName getAllAirport
  * @apiGroup Airport
  * @apiVersion  0.0.1
  *
  * @apiSuccessExample {array} Success-Response:
    [
        {
            "name": "Paris-Orl",
            "code": "ORY",
            "city_code": "PAR"
        },
        {
            "name": "Paris-Airplane",
            "code": "ORE",
            "city_code": "PAR"
        },
        {
            "name": "Adisucipto",
            "code": "ADO",
            "city_code": "YK"
        }
    ]
  *
  *
  * @apiHeader {Bearer} Authorization Bearer <access_token>
  *
  * @apiHeaderExample {Bearer} Request-Example:
  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA
  *
  * @apiError (Bad Request 400) {string} message Error message
  *
  * @apiErrorExample {json} Error-Response (Invalid Token):
    Error 401: Unauthorized
    {
         message: invalid token
    }
  *
  */

/**
  *
  * @api {GET} /api/airport/all_airport_city GET All Airport w/ Cities
  * @apiName getAllAirportCity
  * @apiGroup Airport
  * @apiVersion  0.0.1
  *
  * @apiSuccess (200) {Array} - Array of Airports with their Cities
  *
  * @apiSuccessExample {array} Success-Response:
    [
        {
            "name": "Paris-Orl",
            "code": "ORY",
            "city_code": "PAR",
            "city": {
                "name": "Paris",
                "code": "PAR"
            }
        },
        {
            "name": "Paris-Airplane",
            "code": "ORE",
            "city_code": "PAR",
            "city": {
                "name": "Paris",
                "code": "PAR"
            }
        },
        {
            "name": "Adisucipto",
            "code": "ADO",
            "city_code": "YK",
            "city": {
                "name": "Yogykarta",
                "code": "YK"
            }
        }
    ]
  *
  *
  * @apiHeader {Bearer} Authorization Bearer <access_token>
  *
  * @apiHeaderExample {Bearer} Request-Example:
  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA
  *
  * @apiError (Bad Request 400) {string} message Error message
  *
  * @apiErrorExample {json} Error-Response (Invalid Token):
    Error 401: Unauthorized
    {
         message: invalid token
    }
  *
  */

/**
  *
  * @api {GET} /api/airport/get/:code GET an Airport
  * @apiName getAirport
  * @apiGroup Airport
  * @apiVersion  0.0.1
  *
  *
  * @apiParam  {String} code Airport's CODE
  *
  * @apiSuccess (Success 200) {Object} airport Airport Details
  * @apiSuccess (Success 200) {String} name Name of Airport
  * @apiSuccess (Success 200) {String} code Code of Airport
  * @apiSuccess (Success 200) {String} city_code Airport's Code of Airport
  *
  * @apiParamExample  {String} Request-Example:
    {
        "code": "ORY"
    }
  *
  *
  * @apiSuccessExample {type} Success-Response:
    {
        "airport": {
            "name": "Paris-Orl",
            "code": "ORY",
            "city_code": "PAR"
        }
    }
  *
  *
  * @apiHeader {Bearer} Authorization Bearer <access_token>
  *
  * @apiHeaderExample {Bearer} Request-Example:
  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA
  *
  * @apiError (Bad Request 400) {string} message Error message
  *
  * @apiErrorExample {json} Error-Response (Invalid Token):
    Error 401: Unauthorized
    {
         message: invalid token
    }
  *
  * @apiErrorExample {json} Error-Response (Airport Not Found):
  Error 400: Not Found
  {
       message: Airport not found
  }
  *
  */

/**
  *
  * @api {DELETE} /api/airport/delete/:code DELETE Airport
  * @apiName deleteAirport
  * @apiGroup Airport
  * @apiVersion  0.0.1
  *
  *
  * @apiParam  {String} code Airport's CODE
  *
  * @apiSuccess (Success 200) {String} message Success message
  *
  * @apiParamExample  {String} Request-Example:
    {
        code : "ORY"
    }
  *
  *
  * @apiSuccessExample {JSON} Success-Response:
    {
        "message": "Airport ORY deleted"
    }
  *
  *
  * @apiHeader {Bearer} Authorization Bearer <access_token>
  *
  * @apiHeaderExample {Bearer} Request-Example:
  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA
  *
  * @apiError (Bad Request 400) {string} message Error message
  *
  * @apiErrorExample {json} Error-Response (Invalid Token):
    Error 401: Unauthorized
    {
         message: invalid token
    }
  *
  * @apiErrorExample {json} Error-Response (Airport Not Found):
  Error 400: Not Found
  {
       message: Airport not found
  }
  *
  */

/**
  *
  * @api {PUT} /api/airport/update/:code UPDATE Airport
  * @apiName updateAirport
  * @apiGroup Airport
  * @apiVersion  0.0.1
  *
  *
  * @apiParam  {String} code Airport's CODE
  *
  * @apiExample {String} Example Usage:
    http://localhost:3000/api/airport/update/ORY
  *
  *
  * @apiSuccess (Success 200) {String} [name] Airport's code wants to be updated
  * @apiSuccess (Success 200) {String} [code] Airport's code wants to be updated
  *
  * @apiParamExample  {type} Request-Example:
    {
      "name": "Garuda Indonesia",
      "code": "HGH"
    }
  *
  *
  * @apiSuccessExample {type} Success-Response:
    {
        "message": "Airport ORY updated"
    }
  *
  *
  * @apiHeader {Bearer} Authorization Bearer <access_token>
  *
  * @apiHeaderExample {Bearer} Token Example:
  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA
  *
  * @apiError (Bad Request 400) {string} message Error message
  *
  * @apiErrorExample {json} Error-Response (Invalid Token):
    Error 401: Unauthorized
    {
         message: invalid token
    }
  *
  * @apiErrorExample {json} Error-Response (Airport Not Found):
  Error 400: Not Found
    {
        message: Airport not found
    }
  *
  */
