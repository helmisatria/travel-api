# Travel - Backend (REST API)

CRUD Application with OAuth2.0 (Google) and Authorization Token with JWT (JSON WEB TOKEN). Uses MySQL Database with Sequelize (ORM)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites

Things you need to install

* Node JS
* MySQL

### Installation

```
cd travel-api && npm install
npm start
```

or if you prefer using yarn

```
cd travel-api && yarn install
yarn start
```

If you want to open the API Documentation, you can open the **index.html** on **docs/**

I recommend to use tools like [live-server](https://www.npmjs.com/package/live-server) or [serve](https://www.npmjs.com/package/serve)

```
npm install live-server -g
live-server docs/
```
or 
```
yarn install serve -g
serve -i docs/
```

GoogleID and Secret keys (for google and JWT) placed in **docs/**
## Built With

* [Express](http://http://expressjs.com/) - Framework used
* [MySQL](https://www.mysql.com/) - Database used
* [PassportJS](http://www.passportjs.org/) - Authentication middleware for Google OAuth2.0 Strategy
* [Sequelize](https:/http://docs.sequelizejs.com/) - ORM (Object-Relational Mapping)
* [JWT](https://jwt.io/) - security transmitting information tools

## Authors

* **Helmi Satria** - *Initial work* - [Helmisatria.com](https://helmisatria.com)