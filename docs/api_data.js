define({ "api": [
  {
    "type": "POST",
    "url": "/api/airport/create",
    "title": "CREATE New Airport",
    "name": "createNewCity",
    "group": "Airport",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Provide the airport name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Provide 2/3 digit UPPERCASE the airport's code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Paris-Orl\",\n  \"code\": \"232\",\n  \"cityCode\": \"HSN\"\n}",
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
          "content": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
          "type": "Bearer"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>HTTP Status code</p>"
          },
          {
            "group": "Success 200",
            "type": "body",
            "optional": false,
            "field": "body",
            "description": "<p>New Airport object details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"body\": {\n        \"id\": 15,\n        \"name\": \"Paris-Orl\",\n        \"code\": \"232\",\n        \"city_code\": \"HSN\",\n        \"updatedAt\": \"2017-12-26T03:32:46.191Z\",\n        \"createdAt\": \"2017-12-26T03:32:46.191Z\"\n    }\n}",
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
        },
        {
          "title": "Error-Response (Name and Code Required):",
          "content": "Error 400: Bad Request\n{\n    \"msg\": \"Airport.code cannot be null\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response (Airport's CODE should Exist):",
          "content": "Error 400: Bad Request\n{\n    \"message\": \"Airport's code not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/airport.docs.js",
    "groupTitle": "Airport",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/airport/create"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/api/airport/delete/:code",
    "title": "DELETE Airport",
    "name": "deleteAirport",
    "group": "Airport",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Airport's CODE</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    code : \"ORY\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Airport ORY deleted\"\n}",
          "type": "JSON"
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
          "content": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
          "type": "Bearer"
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
          "content": "Error 401: Unauthorized\n{\n     message: invalid token\n}",
          "type": "json"
        },
        {
          "title": "Error-Response (Airport Not Found):",
          "content": "Error 400: Not Found\n{\n     message: Airport not found\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/airport.docs.js",
    "groupTitle": "Airport",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/airport/delete/:code"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/airport/get/:code",
    "title": "GET an Airport",
    "name": "getAirport",
    "group": "Airport",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Airport's CODE</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"code\": \"ORY\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "airport",
            "description": "<p>Airport Details</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Airport</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code of Airport</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city_code",
            "description": "<p>Airport's Code of Airport</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"airport\": {\n        \"name\": \"Paris-Orl\",\n        \"code\": \"ORY\",\n        \"city_code\": \"PAR\"\n    }\n}",
          "type": "type"
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
          "content": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
          "type": "Bearer"
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
          "content": "Error 401: Unauthorized\n{\n     message: invalid token\n}",
          "type": "json"
        },
        {
          "title": "Error-Response (Airport Not Found):",
          "content": "Error 400: Not Found\n{\n     message: Airport not found\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/airport.docs.js",
    "groupTitle": "Airport",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/airport/get/:code"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/airport/all_airport",
    "title": "GET All Airport",
    "name": "getAllAirport",
    "group": "Airport",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"name\": \"Paris-Orl\",\n        \"code\": \"ORY\",\n        \"city_code\": \"PAR\"\n    },\n    {\n        \"name\": \"Paris-Airplane\",\n        \"code\": \"ORE\",\n        \"city_code\": \"PAR\"\n    },\n    {\n        \"name\": \"Adisucipto\",\n        \"code\": \"ADO\",\n        \"city_code\": \"YK\"\n    }\n]",
          "type": "array"
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
          "content": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
          "type": "Bearer"
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
          "content": "Error 401: Unauthorized\n{\n     message: invalid token\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/airport.docs.js",
    "groupTitle": "Airport",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/airport/all_airport"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/airport/all_airport_city",
    "title": "GET All Airport w/ Cities",
    "name": "getAllAirportCity",
    "group": "Airport",
    "version": "0.0.1",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "-",
            "description": "<p>Array of Airports with their Cities</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"name\": \"Paris-Orl\",\n        \"code\": \"ORY\",\n        \"city_code\": \"PAR\",\n        \"city\": {\n            \"name\": \"Paris\",\n            \"code\": \"PAR\"\n        }\n    },\n    {\n        \"name\": \"Paris-Airplane\",\n        \"code\": \"ORE\",\n        \"city_code\": \"PAR\",\n        \"city\": {\n            \"name\": \"Paris\",\n            \"code\": \"PAR\"\n        }\n    },\n    {\n        \"name\": \"Adisucipto\",\n        \"code\": \"ADO\",\n        \"city_code\": \"YK\",\n        \"city\": {\n            \"name\": \"Yogykarta\",\n            \"code\": \"YK\"\n        }\n    }\n]",
          "type": "array"
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
          "content": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
          "type": "Bearer"
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
          "content": "Error 401: Unauthorized\n{\n     message: invalid token\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/airport.docs.js",
    "groupTitle": "Airport",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/airport/all_airport_city"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/api/airport/update/:code",
    "title": "UPDATE Airport",
    "name": "updateAirport",
    "group": "Airport",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Airport's CODE</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Garuda Indonesia\",\n  \"code\": \"HGH\"\n}",
          "type": "type"
        }
      ]
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "http://localhost:3000/api/airport/update/ORY",
        "type": "String"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Airport's code wants to be updated</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Airport's code wants to be updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Airport ORY updated\"\n}",
          "type": "type"
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
          "title": "Token Example:",
          "content": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
          "type": "Bearer"
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
          "content": "Error 401: Unauthorized\n{\n     message: invalid token\n}",
          "type": "json"
        },
        {
          "title": "Error-Response (Airport Not Found):",
          "content": "Error 400: Not Found\n  {\n      message: Airport not found\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/airport.docs.js",
    "groupTitle": "Airport",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/airport/update/:code"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/api/city/create",
    "title": "CREATE New City",
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
          "content": "Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
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
  },
  {
    "type": "DELETE",
    "url": "/api/city/delete/:code",
    "title": "DELETE City",
    "name": "deleteCity",
    "group": "City",
    "version": "0.0.1",
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
          "content": "Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
          "type": "Bearer"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>City's code wants to be deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example (Params):",
          "content": "code: YK",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"message\": \"City YK deleted\"\n}",
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
          "title": "Error-Response (City Not Found):",
          "content": "Error 400: Not Found\n{\n    \"message\": \"City not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/city.docs.js",
    "groupTitle": "City",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/city/delete/:code"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/city/all_cities",
    "title": "GET All Cities",
    "name": "getAllCities",
    "group": "City",
    "version": "0.0.1",
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
          "content": "Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
          "type": "Bearer"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"name\": \"Yogyakarta\",\n        \"code\": \"HSN\"\n    },\n    {\n        \"name\": \"Paris\",\n        \"code\": \"PAR\"\n    }\n]",
          "type": "array"
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
        }
      ]
    },
    "filename": "routes/docs/city.docs.js",
    "groupTitle": "City",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/city/all_cities"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/city/all_cities_airport",
    "title": "GET All Cities w/ Airport(s)",
    "name": "getAllCitiesWithAirports",
    "group": "City",
    "version": "0.0.1",
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
          "content": "Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
          "type": "Bearer"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"name\": \"Paris\",\n        \"code\": \"PAR\",\n        \"Airports\": [\n            {\n                \"name\": \"Paris-Orl\",\n                \"code\": \"ORY\",\n                \"city_code\": \"PAR\"\n            }\n        ]\n    },\n    {\n        \"name\": \"Yogyakarta\",\n        \"code\": \"HSN\",\n        \"Airports\": [\n            {\n                \"name\": \"Garuda Indonesia\",\n                \"code\": \"HGH\",\n                \"city_code\": \"HSN\"\n            }\n        ]\n    }\n]",
          "type": "array"
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
        }
      ]
    },
    "filename": "routes/docs/city.docs.js",
    "groupTitle": "City",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/city/all_cities_airport"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/city/get/:code",
    "title": "GET a City",
    "name": "getCityWithCode",
    "group": "City",
    "version": "0.0.1",
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
          "content": "Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
          "type": "Bearer"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>City's CODE</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"city\": {\n        \"name\": \"Yogyakarta\",\n        \"code\": \"YK\"\n    }\n}",
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
        }
      ]
    },
    "filename": "routes/docs/city.docs.js",
    "groupTitle": "City",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/city/get/:code"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/api/city/update/:code",
    "title": "UPDATE City",
    "name": "updateCity",
    "group": "City",
    "version": "0.0.1",
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
          "content": "Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI2MzYsImV4cCI6MTUxNDg3NzQzNn0.YCLQNNtLNU7vaDdVkyZjZDCaPYadRB8lrz4BBt5QAJA",
          "type": "Bearer"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>City's CODE</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "code: BND",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>City's name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>City's code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"City BND updated\"\n}",
          "type": "type"
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
          "title": "Error-Response (City Not Found):",
          "content": "Error 400: Not Found\n{\n    \"message\": \"City not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/city.docs.js",
    "groupTitle": "City",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/city/update/:code"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/user/profile",
    "title": "GET User Profile",
    "name": "getUserProfile",
    "group": "User",
    "version": "0.0.1",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>HTTP Status code</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User object details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"user\": {\n        \"id\": \"324aed1c-296c-4bc9-9723-1a45750d833c\",\n        \"nama\": \"Helmi Satria\",\n        \"email\": \"hello.satriahelmi@gmail.com\",\n        \"googleId\": \"117133505067330096785\",\n        \"createdAt\": \"2017-12-26T07:14:16.000Z\",\n        \"updatedAt\": \"2017-12-26T07:14:16.000Z\",\n        \"deletedAt\": null\n    }\n}",
          "type": "type"
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
          "content": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzI0YWVkMWMtMjk2Yy00YmM5LTk3MjMtMWE0NTc1MGQ4MzNjIiwibmFtYSI6IkhlbG1pIFNhdHJpYSIsImVtYWlsIjoiaGVsbG8uc2F0cmlhaGVsbWlAZ21haWwuY29tIiwiZ29vZ2xlSWQiOiIxMTcxMzM1MDUwNjczMzAwOTY3ODUiLCJjcmVhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTEyLTI2VDA3OjE0OjE2LjAwMFoiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE1MTQyNzI0ODQsImV4cCI6MTUxNDg3NzI4NH0.ACO_lxINXwG64p8lfX69QGHK1gjle-MoqkP1CMh63pI",
          "type": "Bearer"
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
          "content": "Error 401: Unauthorized\n{\n     message: invalid token\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/users.docs.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/profile"
      }
    ]
  }
] });
