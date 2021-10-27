import React, { useState, useEffect } from "react";
import axiosInstance from "../axios";
import ScrollContainer from "react-indiana-drag-scroll";
import Movie from "./Movie";
import "./row.css";

function Row({ title, fetchUrl, handleOpen }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get(fetchUrl);
      const results = response.data.results;
      setMovies(results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h1 className="row-title">{title}</h1>
      <ScrollContainer className="scroll-container">
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              handleOpen={handleOpen}
            />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
}

export default Row;
