const express = require('express');
const app = express();
const port = 3000;
const dbConnection = require('./models/dbconnect.js');

const movieRoute = require('./routes/movieRoute.js');
const categoryRoute = require('./routes/categoryRoute.js');
const commentRoute = require('./routes/commentRoute.js');
const directorRoute = require('./routes/directorRoute.js');

app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

 const  cors = require('cors');

 const allowedOrigins = [''];
 app.use(cors({ origin: allowedOrigins,  methods: "GET,PUT,POST,DELETE"}));

 app.use('/movies', movieRoute);
 app.use('/categories', categoryRoute);
 app.use('/comments', commentRoute);
 app.use('/directors', directorRoute);



dbConnection();






 