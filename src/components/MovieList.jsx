import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { options } from "../constants/apiConstants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { baseImageURL } from "../constants/apiConstants";
const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    axios
      .get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((response) => setMovies(response.data.results));
  }, []);
  console.log(movies);
  return (
    <div>
      <h1 className="fs-1 mb-3 mt-3">{genre.name}</h1>
      <Splide
        options={{
          gap: "10px",
          autoWidth: true,
          pagination: false,
        }}
        aria-label="My Favorite Images"
      >
        {movies?.map((movie) => (
          <SplideSlide>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="movie"
                src={baseImageURL.concat(movie.poster_path)}
                alt="Image 1"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
