## API documentation link

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/12255985/TVzYetS7)

## Build with
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Postman](https://www.getpostman.com/) for testing
* [Dbms mySql](db_sipPos.sql)

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
* [passport](https://www.npmjs.com/package/passport)
* [passport-google-oauth20](https://www.npmjs.com/package/passport-google-oauth20)

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
GOOGLE_CLIENT_ID = your client id
GOOGLE_CLIENT_SECRET = your client secret
CALLBACKURL = http://localhost:{your-port}/api/v1/products/auth/success
```
### create folder uploads in your root project folder.
### Run project for development

```
npm run dev
```
