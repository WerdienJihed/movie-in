import React, { useState, useEffect, useCallback } from "react";
import Navigationbar from "./components/navbar/Navigationbar";
import Home from "./components/home/Home";
import Row from "./components/row/Row";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import requests from "./helpers/requests";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";

const modalStyle = {
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

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  height: "90vh",
  alignItems: "center",
};
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};
function App() {
  const [modalContent, setModalContent] = useState({});
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(<p>no movie</p>);

  const handleClose = () => setOpen(false);
  const handleOpen = useCallback((title) => {
    movieTrailer(title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        const result = urlParams.get("v");

        if (result) {
          setModalContent(<Youtube videoId={result} opts={opts} />);
        } else {
          setModalContent(
            <Typography id="modal-modal-title" variant="h6" component="h2">
              trailer is not availabe
            </Typography>
          );
        }
        setOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setMovies(
        <Row
          title={`Result for : ${searchTerm}`}
          fetchUrl={requests.fetchSearchMovie + `&query=${searchTerm}`}
          handleOpen={handleOpen}
        />
      );
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, handleOpen]);

  const handleSearch = (value) => {
    if (value !== "") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    setSearchTerm(value);
  };

  return (
    <div className="App">
      <Navigationbar handleSearch={handleSearch} />
      {searchTerm === "" ? (
        <Home handleOpen={handleOpen} />
      ) : isLoading ? (
        <Box sx={boxStyle}>
          <CircularProgress />
        </Box>
      ) : (
        <div>{movies}</div>
      )}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <span>{modalContent}</span>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
