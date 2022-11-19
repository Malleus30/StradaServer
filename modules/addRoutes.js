
const Movie = require('./movieSchema.js');
const Category = require('./categorySchema.js');

function addRoutes(app) {
    app.post('/movies', async (req, res) => {
        try{
            await Movie.create(req.body);
            return res.status(201).send('movie created');
        }catch(err){
            console.log(err);
            return res.status(500).send('failed to create movie');
        }
      });

    app.post('/categories', async (req, res) => {
        try{
           await Category.create(req.body);
           return res.status(201).send('category created');
        }catch(err){
            console.log(err);
            return res.status(500).send('failed co create category');
        }
    })
    
    app.get('/', (req, res) => {
        res.send('Hello ANTOHA!')
      })
}

module.exports = addRoutes;