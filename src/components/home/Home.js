import React from "react";
import Row from "./../row/Row";
import requests from "./../../helpers/requests";

function Home({ handleOpen }) {
  return (
    <div>
      <Row
        title="WEEK TRENDING"
        fetchUrl={requests.fetchTrendingMovies}
        handleOpen={handleOpen}
      />
      <Row
        title="POPULAR"
        fetchUrl={requests.fetchPopularMovies}
        handleOpen={handleOpen}
      />
      <Row
        title="TOP RATING"
        fetchUrl={requests.fetchTopRatedMovies}
        handleOpen={handleOpen}
      />
    </div>
  );
}

export default Home;
