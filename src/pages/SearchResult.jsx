import { useLocation } from "react-router-dom";
import { Typography, Container } from "@mui/material";

import CardAnime from "../components/CardAnime";

const SearchResults = () => {
  const location = useLocation();
  const { results } = location.state || {};

  return (
    <Container maxWidth="lg">
      <Typography variant="h6" gutterBottom>
        Search Results
      </Typography>
      {results && results.length > 0 ? (
        <CardAnime data={results} />
      ) : (
        <Typography variant="body1">No results found</Typography>
      )}
    </Container>
  );
};

export default SearchResults;
