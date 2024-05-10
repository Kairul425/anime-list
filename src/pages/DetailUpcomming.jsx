import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Container, Typography, Box, Grid } from "@mui/material";

const DetailAnime = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [characters, setCharacters] = useState([]);
  const [synopsisExpanded, setSynopsisExpanded] = useState(false);

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

  const handleExpandClick = () => {
    setSynopsisExpanded(!synopsisExpanded);
  };

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          mt: "85px",
          mb: { xs: 3, sm: 5 },
          fontSize: { xs: "22px", sm: "2.5rem" },
        }}
      >
        Detail Anime
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          {detail.images && detail.images.jpg && (
            <Box sx={{ width: { xs: "160px", sm: "230px" } }}>
              <img
                src={detail.images.jpg.image_url}
                alt={`image${detail.title}`}
                width={"100%"}
                height={"100%"}
              />
            </Box>
          )}
        </Grid>

        <Grid item xs={12} sm={8} md={9} sx={{ mt: { xs: 1, sm: 3 } }}>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", sm: "20px" } }}
          >
            🧿 Title : {detail.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", sm: "20px" } }}
          >
            🧿 Broadcast : {detail.broadcast && detail.broadcast.string}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", sm: "20px" } }}
          >
            🧿 Aired :{" "}
            {detail.aired &&
              detail.aired.prop &&
              detail.aired.prop.from &&
              `${detail.aired.prop.from.day} - ${detail.aired.prop.from.month} - ${detail.aired.prop.from.year}`}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", sm: "20px" } }}
          >
            🧿 Popularity : {detail.popularity}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", sm: "20px" } }}
          >
            🧿 Source : {detail.source}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", sm: "20px" } }}
          >
            🧿 Type : {detail.type}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", sm: "20px" } }}
          >
            🧿 Rating : {detail.rating}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", sm: "20px" } }}
          >
            🧿 Status : {detail.status}
          </Typography>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Synopsis :
        </Typography>
        <Typography variant="body1">
          {detail.synopsis && (
            <>
              {detail.synopsis.length <= 230 ? (
                detail.synopsis
              ) : (
                <>
                  {synopsisExpanded
                    ? detail.synopsis
                    : detail.synopsis.slice(0, 230) + "..."}
                  <button
                    onClick={handleExpandClick}
                    style={{
                      cursor: "pointer",
                      border: "none",
                      background: "none",
                      color: "blue",
                    }}
                  >
                    {synopsisExpanded ? "Read Less" : "Read More"}
                  </button>
                </>
              )}
            </>
          )}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Trailer :
        </Typography>
        {detail.trailer && (
          <Box sx={{ height: { xs: "200px", sm: "400px" } }}>
            <iframe
              width="100%"
              height="100%"
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
                    border: { xs: "none", sm: "1px solid #ccc" },
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundColor: { xs: "none", sm: "#B4B4B8" },
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
