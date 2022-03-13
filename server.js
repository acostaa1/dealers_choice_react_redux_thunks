const express = require("express");
const app = express();
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
