import { useLocation } from "react-router-dom";
import { Typography, Container, Box, Button } from "@mui/material";

import CardAnime from "../components/CardAnime";

const SearchResults = () => {
  const location = useLocation();

  const { results } = location.state || {};

  const handleBack = () => {
    window.history.back();
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h6" sx={{ mt: "85px", mb: 2 }}>
        Search Results
      </Typography>
      <Button
        variant="outlined"
        sx={{ mb: { xs: 1, sm: 2 } }}
        onClick={handleBack}
      >
        Back
      </Button>
      {results && results.length > 0 ? (
        <CardAnime data={results} />
      ) : (
        <Box
          sx={{
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">No results found 😣</Typography>
        </Box>
      )}
    </Container>
  );
};

export default SearchResults;
