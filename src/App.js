import React, { useState, useEffect } from "react";
import Row from "./components/Row";
import Movie from "./components/Movie";
import requests from "./requests";
import axiosInstance from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";

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

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   alignItems: "flex-start",
//   paddingTop: theme.spacing(1),
//   paddingBottom: theme.spacing(2),
//   "@media all": {
//     minHeight: 128,
//   },
// }));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function App() {
  const [content, setContent] = useState({});
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(<p>no movie</p>);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setMovies(
        <Row
          title=""
          fetchUrl={requests.fetchSearchMovie + `&query=${searchTerm}`}
          handleOpen={handleOpen}
        />
      );
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleOpen = (title) => {
    movieTrailer(title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        const result = urlParams.get("v");

        if (result) {
          setContent(<Youtube videoId={result} opts={opts} />);
        } else {
          setContent(
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
  };

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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              MOVIE IN
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      {searchTerm == "" ? (
        <div className="home">
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
            <Box sx={style}>
              <span>{content}</span>
            </Box>
          </Modal>
        </div>
      ) : isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "90vh",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div>{movies}</div>
      )}
    </div>
  );
}

export default App;
