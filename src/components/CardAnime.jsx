import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import PropTypes from "prop-types";

const CardAnime = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data?.map((item, index) => (
        <Grid item xs={6} sm={3} md={3} key={index}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.images.jpg.image_url}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  episode : {item.episodes}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  duration : {item.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  score : {item.score}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

CardAnime.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CardAnime;
