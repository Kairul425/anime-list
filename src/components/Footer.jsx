import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: { xs: 3, md: 10 },
        py: { xs: 1, md: 2 },
        bgcolor: "primary.main",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "white",
          fontSize: { xs: "16px", md: "20px" },
        }}
      >
        Made with ❤️ by SYAHRUL
      </Typography>
      <Typography
        variant="caption"
        sx={{ textAlign: "center", color: "white", mt: 1 }}
      >
        Data provided by Jikan API
      </Typography>
    </Box>
  );
};

export default Footer;
