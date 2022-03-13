const express = require("express");
const app = express();
const path = require('path')

const {
  syncDB,
  models: { Director, Movie },
} = require("./db");

const startUp = async () => {
  try {
    await syncDB();
    console.log("Connected to DB!");
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startUp();

//add route to show html on client side
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//add middleware static path to connect webpack file to client (will get rid of GET http://localhost:3000/dist/main.js 404 (Not Found) error in browser)
app.use('/dist', express.static(path.join(__dirname, 'dist')));

//connect css to client side (will get rid of 'Refused to apply style from 'http://localhost:3000/assets/styles.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.' error)
app.use('/assets', express.static(path.join(__dirname,'assets')));
 
app.get("/api/movies", async (req, res, next) => {
  try {
    const movies = await Movie.findAll({
      include: [Director],
    });
    res.send(movies);
  } catch (error) {
    next(error);
  }
});



//to add your own movie using input
app.post('api/movies/:title', async (req, res, next) => {
    try {
        const movie = await Movie.create(req.params);
        res.status(201).send(movie);
    } catch (error) {
        next(error)
    }
})

//to pick random movie from the list
app.post('api/movies', async (req, res, next)=> {
    try {
        res.status(201).send(await Movie.pickMovie());
    } catch (error) {
        next (error)
    }
})

app.delete('api/movies/:id', async(req, res, next) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        await movie.destroy();
        res.sendStatus(204);
    } catch (error) {
        next(error)
    }
})
