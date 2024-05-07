import { Container, Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ textAlign: "center", backgroundColor: "red", paddingX: "100px" }}
      >
        <Typography variant="h1">Not Found!!!</Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
