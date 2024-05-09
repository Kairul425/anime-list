import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Container, Typography, Box, Grid } from "@mui/material";

const DetailAnime = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataResponse = await axios.get(
          `${import.meta.env.VITE_REACT_ANIME}/anime/${id}/full`
        );
        const charResponse = await axios.get(
          `${import.meta.env.VITE_REACT_ANIME}/anime/${id}/characters`
        );
        setDetail(dataResponse.data.data);
        setCharacters(charResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" sx={{ textAlign: "center", my: 5 }}>
        Detail Anime
      </Typography>

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

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Characters :</Typography>
        <Box sx={{ p: 2, backgroundColor: "#F0EBE3", borderRadius: "8px" }}>
          <Grid container spacing={1}>
            {characters.map((char) => (
              <Grid item xs={3} sm={2} md={2} key={char.character.mal_id}>
                <Box
                  sx={{
                    textAlign: "center",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundColor: "#B4B4B8",
                  }}
                >
                  <img
                    src={char.character.images.jpg.image_url}
                    alt={`image${char.character.name}`}
                    width="100%"
                    height="auto"
                    style={{ borderRadius: "10px", marginBottom: "8px" }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: { xs: "12px", sm: "16px", md: "19px" } }}
                  >
                    {char.character.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default DetailAnime;
