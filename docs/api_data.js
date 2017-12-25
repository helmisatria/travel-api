define({ "api": [
  {
    "type": "POST",
    "url": "/api/city/create",
    "title": "Create new city",
    "name": "createNewCity",
    "group": "City",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Provide the city name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Provide 2/3 digit UPPERCASE the city's code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  name: \"Bandung\",\n  code: \"BND\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer &lt;access_token&gt;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMDE5MDdiMzAtZTJjNy00ZjNlLTk4OTQtNjRmMDkzNmU2OWM4IiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoic2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMDQ4NjY1MjE2MTE2MjYxMTA5NzQiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI1VDA3OjAzOjMxLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI1VDA3OjAzOjMxLjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQxODcyNzAsImV4cCI6MTUxNDI3MzY3MH0.ek90g1LUSdBQbpnrlUBwP6iZyAb1B1D8lA8c5LXAOeM",
          "type": "Bearer"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "city",
            "description": "<p>City object details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"city\": {\n        \"id\": 3,\n        \"name\": \"Bandung\",\n        \"code\": \"BND\",\n        \"updatedAt\": \"2017-12-25T10:49:20.309Z\",\n        \"createdAt\": \"2017-12-25T10:49:20.309Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (Invalid Token):",
          "content": "Error 401: Unauthorized\n{\n    \"message\": \"invalid token\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response (Not Valid Input):",
          "content": "Error 400: Bad Request\n{\n    \"message\": \"Validation notEmpty on name failed\",\n    \"status\": 400\n}",
          "type": "json"
        },
        {
          "title": "Error-Response (Not Valid Length Code):",
          "content": "Error 400: Bad Request\n{\n    \"message\": \"Validation len on code failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response (Code not UPPERCASED):",
          "content": "Error 400: Bad Request\n{\n    \"message\": \"Validation isUppercase on code failed\",\n    \"status\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/city.docs.js",
    "groupTitle": "City",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/city/create"
      }
    ]
  }
] });
