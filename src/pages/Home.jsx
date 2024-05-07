import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_REACT_TOP_ANIME)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Home
      </Typography>
      {data?.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </Container>
  );
};

export default Home;
