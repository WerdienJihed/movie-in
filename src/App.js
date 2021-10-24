import React, { useState } from "react";
import Row from "./components/Row";
import requests from "./requests";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./App.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  width: "70%",
  height: 390,
};

function App() {
  const [content, setContent] = useState({});
  const [open, setOpen] = React.useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClose = () => setOpen(false);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleOpen = (title) => {
    setTrailerUrl("");
    movieTrailer(title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        const resutl = urlParams.get("v");
        setTrailerUrl(resutl);
      })
      .catch((error) => {
        //
      });

    if (trailerUrl) {
      setContent(<Youtube videoId={trailerUrl} opts={opts} />);
    } else {
      setContent(
        <Typography id="modal-modal-title" variant="h6" component="h2">
          trailer is not availabe
        </Typography>
      );
    }
    setOpen(true);
  };

  return (
    <div className="App">
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
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>{content}</Box>
      </Modal>
    </div>
  );
}

export default App;
