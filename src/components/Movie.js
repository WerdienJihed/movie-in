import React from "react";
import Button from "@mui/material/Button";
import "./movie.css";
function Movie({ id, title, poster_path, handleOpen }) {
  return (
    <div key={id} className="movie">
      <img
        src={"https://image.tmdb.org/t/p/w154/" + poster_path}
        alt={title}
        className="movie_image"
      />
      <div className="content">
        <h4>{title}</h4>
        <Button
          variant="contained"
          size="small"
          onClick={() => handleOpen(title)}
        >
          trailer
        </Button>
      </div>
    </div>
  );
}

export default Movie;
