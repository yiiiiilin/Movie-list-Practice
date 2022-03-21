/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect } from 'react'
import Axios from "axios";


function App() {

  const [listOfMovies, setListOfMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/getMovies").then((response) => {
      setListOfMovies(response.data)
    })
  }, [])

  const handleClick = () => {
    //console.log('i was clicked');
    Axios.post("http://localhost:3001/addMovies", {
      title: movieTitle,
      year: movieYear
    }).then((response) => {
      setListOfMovies(
        [...listOfMovies, {title: movieTitle, year: movieYear}]
      );
    });
  };

  const singleMovie = listOfMovies.map((movie, i) => {
    return (
      <div key={i}>
        <p>title: {movie.title}</p>
        <p>year: {movie.year}</p>
        <p>-----*****-----</p>
      </div>
    )
  });

  return (
    <div className="App">
      <h1>MovieList</h1>
      <div className="displayMovies">
        {singleMovie}
      </div>
      <div>
        <input
          type='text'
          placeholder="add movie names"
          onChange={(event) => setMovieTitle(event.target.value)}
        />
        <input
          type='text'
          placeholder="add movie year"
          onChange={(event) => setMovieYear(event.target.value)}
        />
        <button onClick={handleClick}>submit</button>
      </div>
    </div>
  );
}

export default App;
