# Toko Fuku API

Tokofuku is an online shop website that is made specifically for e-commerce purposes, for many features to support transactions in online stores

## Build with
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Postman](https://www.getpostman.com/) for testing
* [Database](db_sipPos.sql)

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

[![Run in Postman](https://run.pstmn.io/button.svg)](https://web.postman.co/documentation/12255985-0dff2513-a5ea-4c11-98ad-ddf998fb4051/publish)
