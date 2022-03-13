const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme-react-redux"
);

//define model(s) here (no validations to start, will make more strict)
const Movie = sequelize.define("movie", {
  title: {
    type: Sequelize.STRING,
  },
  release: {
    type: Sequelize.INTEGER,
  },
  blurb: {
    type: Sequelize.TEXT,
  },
  rating: {
    type: Sequelize.FLOAT,
  },
});

const Director = sequelize.define("director", {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  bio: {
    type: Sequelize.TEXT,
  },
});

//associations
Movie.belongsTo(Director);
Director.hasMany(Movie);

const syncDB = async () => {
  try {
    await sequelize.sync({ force: true }); //drops tables and resyncs

    //seed data based on models above
    // directors
    const francis = await Director.create({
      name: "Francis Ford Coppola",
      age: 83,
      bio: `Francis Ford Coppola was born in 1939 in Detroit, Michigan, but grew up in a New York suburb in a creative, supportive Italian-American family.Francis Ford Coppola is one of America's most erratic, energetic and controversial filmmakers`,
    });

    const chris = await Director.create({
      name: "Christopher Nolan",
      age: 52,
      bio: `Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.`,
    });

    const lana = await Director.create({
      name: "Lana Wachowski",
      age: 57,
      bio: `Lana Wachowski and her sister Lilly Wachowski, also known as the Wachowskis, are the duo behind such ground-breaking movies as The Matrix (1999) and Cloud Atlas (2012)`,
    });

    const steven = await Director.create({
      name: "Steven Spielberg",
      age: 76,
      bio: `One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer.`,
    });

    const jordan = await Director.create({
      name: "Jordan Peele",
      age: 43,
      bio: `He is known for co-writing and starring in the comedy Keanu (2016), opposite his close friend Keegan-Michael Key, for writing and directing the horror film Get Out (2017), which was nominated for Best Picture, lead Actor, Screenplay (winning the prize), and Director at the Academy Awards, and for writing-directing-plus duties on Us (2019), a horror film that had one of the highest live action non-franchise openings of all time.`,
    });

    //movies
    await Movie.create({
      title: "Get Out",
      release: 2017,
      blurb: `A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.`,
      rating: 7.7,
      directorId: jordan.id,
    });

    await Movie.create({
      title: "Us",
      release: 2019,
      blurb: `A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.`,
      rating: 6.8,
      directorId: jordan.id,
    });

    await Movie.create({
      title: "Saving Private Ryan",
      release: 1998,
      blurb: `Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.`,
      rating: 8.6,
      directorId: steven.id,
    });

    await Movie.create({
      title: "The Matrix",
      release: 1999,
      blurb: `When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.`,
      rating: 8.7,
      directorId: lana.id,
    });

    await Movie.create({
      title: "The Matrix: Reloaded",
      release: 2003,
      blurb: `Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.`,
      rating: 7.2,
      directorId: lana.id,
    });

    await Movie.create({
      title: "Inception",
      release: 2010,
      blurb: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.`,
      rating: 8.8,
      directorId: chris.id,
    });

    await Movie.create({
      title: "The Dark Knight",
      release: 2008,
      blurb: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.`,
      rating: 9.1,
      directorId: chris.id,
    });

    await Movie.create({
      title: "The Godfather",
      release: 1972,
      blurb: `The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.`,
      rating: 9.2,
      directorId: francis.id,
    });

    await Movie.create({
      title: "The Godfather: Part II",
      release: 1974,
      blurb: `The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.`,
      rating: 9.0,
      directorId: francis.id,
    });

    await Movie.create({
      title: "Interstellar",
      release: 2014,
      blurb: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
      rating: 8.7,
      directorId: chris.id,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  syncDB,
  models: { Movie, Director },
};
