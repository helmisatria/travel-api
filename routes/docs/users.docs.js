/**
  *
  * @api {GET} /user/profile GET User Profile
  * @apiName getUserProfile
  * @apiGroup User
  * @apiVersion  0.0.1
  *
  *
  * @apiSuccess (200) {Integer} status HTTP Status code
  * @apiSuccess (200) {Object} user User object details
  *
  * @apiSuccessExample {type} Success-Response:
    {
        "status": 200,
        "user": {
            "id": "324aed1c-296c-4bc9-9723-1a45750d833c",
            "nama": "Helmi Satria",
            "email": "hello.satriahelmi@gmail.com",
            "googleId": "117133505067330096785",
            "createdAt": "2017-12-26T07:14:16.000Z",
            "updatedAt": "2017-12-26T07:14:16.000Z",
            "deletedAt": null
        }
    }
  *
  *
  * @apiHeader {Bearer} Authorization Bearer <access_token>
  *
  * @apiHeaderExample {Bearer} Request-Example:
  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI0ODQsImV4cCI6MTUxNDg3NzI4NH0.ACO_lxINXwG64p8lfX69QGHK1gjle-MoqkP1CMh63pI
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
