import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
        setMovies(res.data.results);
    });
  }, []);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {movie?.overview.length > 150 ? (
              <>
                {readMore ? movie?.overview : `${movie?.overview.substring(0, 150)}...`}
                <button className="text-red-300 text-bold pl-2" onClick={() => setReadMore(!readMore)}>
                  {readMore ? "Show Less" : "Read More"}
                </button>
              </>
            ) : (
              movie?.overview
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;