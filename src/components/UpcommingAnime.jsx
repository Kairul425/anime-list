import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// Import Swiper styles
import "swiper/css";

const UpcommingAnime = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataResponse = await axios.get(
          import.meta.env.VITE_REACT_ANIME +
            "/top/anime?filter=upcoming&limit=12"
        );
        setData(dataResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Swiper slidesPerView={4} spaceBetween={7} className="mySwiper">
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <Link
              to={`/detail-upcomming/${item.mal_id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{ width: "100%", minHeight: "300px", boxShadow: "none" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.images.jpg.image_url}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        textAlign: "center",
                        fontSize: { xs: "12px", md: "20px" },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default UpcommingAnime;
