
/**
 *
 * @api {POST} /api/city/create Create new city
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
 Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMDE5MDdiMzAtZTJjNy00ZjNlLTk4OTQtNjRmMDkzNmU2OWM4IiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoic2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMDQ4NjY1MjE2MTE2MjYxMTA5NzQiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI1VDA3OjAzOjMxLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI1VDA3OjAzOjMxLjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQxODcyNzAsImV4cCI6MTUxNDI3MzY3MH0.ek90g1LUSdBQbpnrlUBwP6iZyAb1B1D8lA8c5LXAOeM
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
