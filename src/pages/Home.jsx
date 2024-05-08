import { Container, Typography, Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//components
import CardAnime from "../components/CardAnime";
import UpcommingAnime from "../components/UpcommingAnime";

const Home = () => {
  const [topData, setTopData] = useState([]);
  const [airingData, setAiringData] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_REACT_ANIME + "/top/anime?limit=8")
      .then((res) => setTopData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_REACT_ANIME + "/top/anime?limit=8&filter=airing"
      )
      .then((res) => setAiringData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ my: 5 }}>
          Top Anime
        </Typography>
        <div>
          <Link to="/top-anime">
            <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
              View All
            </Button>
          </Link>
        </div>
      </Box>
      <CardAnime data={topData} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ my: 5 }}>
          Airing Anime
        </Typography>
        <div>
          <Link to="/airing-anime">
            <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
              View All
            </Button>
          </Link>
        </div>
      </Box>
      <CardAnime data={airingData} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ my: 5 }}>
          Upcomming Anime
        </Typography>
        <div>
          <Link to="/upcomming-anime">
            <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
              View All
            </Button>
          </Link>
        </div>
      </Box>
      <UpcommingAnime />
    </Container>
  );
};

export default Home;
