import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
        setMovies(response.data.results);
    })
  }, [fetchUrl]);

  return (
    <>
      <h2 className="text-white font-bold md: text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={'slider'}>
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;