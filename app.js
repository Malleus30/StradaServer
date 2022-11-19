const express = require('express');
const app = express();
const port = 3000;
const dbConnection = require('./modules/dbconnect.js');
const addRoutes = require('./modules/addRoutes.js');
// const mongoose = require('mongoose');
app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

 // урл для сервиса с mongodb
// const {MongoClient} = require('mongodb'); // конструктор клиентов mongodb
// const client = new MongoClient(url); // создаем новый клиент для работы с базой
// client.connect(); // подключаемся к базе

addRoutes(app);
dbConnection();






 