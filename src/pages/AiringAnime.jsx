import { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Container, Button, Pagination, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CardAnime from "../components/CardAnime";

const AiringAnime = () => {
  const [airingData, setAiringData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataResponse = await axios.get(
          `${
            import.meta.env.VITE_REACT_ANIME
          }?filter=airing&limit=24&page=${page}`
        );
        setAiringData(dataResponse.data.data);
        setTotalPage(dataResponse.data.pagination.last_visible_page);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [page]);

  const handlePageChange = (event, value) => {
    event.preventDefault();
    setPage(value);
  };

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Airing Anime
      </Typography>

      <Link to="/">
        <Button variant="outlined" sx={{ marginY: 5 }}>
          Back
        </Button>
      </Link>
      <CardAnime data={airingData} />

      <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
        <Pagination
          count={totalPage}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default AiringAnime;
