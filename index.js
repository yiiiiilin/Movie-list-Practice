const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MovieModel = require('./models/Movies.js')

const cors = require('cors'); // let us connect from server to the client

app.use(express.json()); //send the request information with json
app.use(cors());

mongoose.connect(
  "mongodb+srv://yiiiiilin:Password123@cluster0.xmdii.mongodb.net/MovieList?retryWrites=true&w=majority"
);

//get request
app.get("/getMovies", (req, res) => {
  MovieModel.find({},(err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });    // find {} will find all the data from the db
});

//post request
app.post("/addMovies", async (req, res) => {
  const movie = req.body; //get information from the request
  const newMovie = new MovieModel(movie); // pass movie information to the model
  await newMovie.save();

  res.json(movie); //double check we add the movie
});


app.listen(3001, () => {
  console.log('server running on PORT 3001')
})