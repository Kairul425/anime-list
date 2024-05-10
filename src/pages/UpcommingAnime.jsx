import { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Container,
  Button,
  Pagination,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

const UpcommingAnime = () => {
  const [upcomming, setUpcomming] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcommingResponse = await axios.get(
          `${
            import.meta.env.VITE_REACT_ANIME
          }/top/anime?filter=upcoming&limit=24&page=${page}`
        );
        setUpcomming(upcommingResponse.data.data);
        setTotalPage(upcommingResponse.data.pagination.last_visible_page);
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
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          mt: "85px",
          mb: { xs: 3, sm: 5 },
          fontSize: { xs: "22px", sm: "2.5rem" },
        }}
      >
        Upcomming Anime
      </Typography>

      <Link to="/">
        <Button variant="outlined" sx={{ mb: { xs: 3, sm: 5 } }}>
          Back
        </Button>
      </Link>
      <Grid container spacing={2}>
        {upcomming?.map((item, index) => (
          <Grid item xs={6} sm={3} md={3} key={index}>
            <Link
              to={`/detail-upcomming/${item.mal_id}`}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ width: "100%", height: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.images.jpg.image_url}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: "14px", sm: "20px" },
                        mb: 1,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center" }}
                    >
                      favorites : {item.favorites}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>

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

export default UpcommingAnime;
