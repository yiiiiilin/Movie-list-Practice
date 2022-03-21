# Movie-list-Practice
Build from scratch

Purpose: Show all the movies on the client side, client could add movies to the database.


server:
1. npm init -y
2. npm i express mongoose cors nodemon

1. add file index.js, build basic server by express
  test by updating package.json, script: "start": "nodemon index.js"
  npm start   server runs perfectly

set mongoDB:
1. create mongoDB and build our database from compass called MovieList
2. copy our link to the mongoose.connect("");

add models: type of data in our database, dont forget export MovieModel

get request on route: /getMovies
1. manually add data from compass
2. test by get req from compass

post request on route: /addMovies
1. get movie information from req.body
2. save the movie information to the db async

** const cors = require('cors');
** app.use(cors());
This is will allow us to connect back and front w/o error

--------*******-------

client:

setup:
npx create-react-app .
npm install axios // same as fetch
delete /src App.test, index.css, logo, setupTests.
