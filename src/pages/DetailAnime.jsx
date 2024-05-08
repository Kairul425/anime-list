import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import { Container, Typography, Box, Button, Grid } from "@mui/material";

const DetailAnime = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataResponse = await axios.get(
          `${import.meta.env.VITE_REACT_ANIME}/anime/${id}/full`
        );
        setDetail(dataResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  console.log(detail);

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Detail Anime
      </Typography>
      <Link to="/">
        <Button variant="outlined" sx={{ marginY: 5 }}>
          Back
        </Button>
      </Link>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          {detail.images && detail.images.jpg && (
            <img
              src={detail.images.jpg.image_url}
              alt={`image${detail.title}`}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={8} md={9} sx={{ mt: 3 }}>
          <Typography variant="h6">🧿 Title : {detail.title}</Typography>
          <Typography variant="h6">🧿 Episode : {detail.episodes}</Typography>
          <Typography variant="h6">🧿 Score : {detail.score}</Typography>
          <Typography variant="h6">
            🧿 Popularity : {detail.popularity}
          </Typography>
          <Typography variant="h6">🧿 Source : {detail.source}</Typography>
          <Typography variant="h6">🧿 Rank : {detail.rank}</Typography>
          <Typography variant="h6">🧿 rating : {detail.rating}</Typography>
          <Typography variant="h6">🧿 Status : {detail.status}</Typography>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Synopsis :
        </Typography>
        <Typography variant="body1">{detail.synopsis}</Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Trailer :
        </Typography>
        {detail.trailer && (
          <Box>
            <iframe
              width="100%"
              height="400"
              src={detail.trailer.embed_url}
              title="Trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default DetailAnime;
