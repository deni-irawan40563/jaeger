## Build with
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Postman](https://www.getpostman.com/) for testing
* [Database](db_sipPos.sql)

## Package
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [cors](https://www.npmjs.com/package/cors)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [morgan](https://www.npmjs.com/package/morgan)
* [multer](https://www.npmjs.com/package/multer)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [nodemon](https://www.npmjs.com/package/nodemon)

## Project setup

```
npm install
```

### Install nodemon

Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

If you have already installed, skip this step.

```
npm install -g nodemon
```

### Setup .env example

Create .env file in your root project folder.

```
DB_HOST = localhost
DB_USER = your username for mysql
DB_PASSWORD = your password for mysql
DB_DATABASE = name your database
PORT = your use port
BASE_URL = http://localhost:your-port
```

### Run project for development

```
npm run dev
```

## API documentation link

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/236289ca6d74bb8569dd)
