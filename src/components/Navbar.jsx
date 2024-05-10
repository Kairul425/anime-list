import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  InputBase,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import animeImage from "../../public/images/pp-anime.jpg";

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
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_ANIME}/anime?q=${search}&sfw`
      );
      navigate("/search-result", { state: { results: response.data.data } });
      setSearch("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <img
                src={animeImage}
                alt="logo-anime"
                width="45px"
                style={{ borderRadius: "50%" }}
              />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            RULL-ANIM-LIST
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={handleSearchInputChange}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
