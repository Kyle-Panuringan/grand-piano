import { Box, styled, Typography, Button } from "@mui/material";
import heroBG from "../assets/heroBG.jpg";

const BoxContainer = styled(Box)({
  height: "100vh",
  backgroundImage: `url(${heroBG})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
});

const Hero = () => {
  return (
    <BoxContainer>
      <Box
        sx={{
          height: "100%",
          bgcolor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ typography: { xs: "h4", md: "h2" } }}
          color="yellow"
          textAlign="center"
          fontStyle="italic"
        >
          Learn the Classic
          <br />&<br />
          Become a Pianist
        </Typography>
        <Button
          variant="outlined"
          sx={{
            typography: { xs: "body1", md: "h5" },
            color: "text.secondary",
            marginTop: "7px",
            borderWidth: "2.5px",
            borderColor: "white",
            letterSpacing: "2px",
            fontWeight: "bolder",
            fontSize: "1.2rem",
            "&:hover": {
              color: "text.primary",
              borderColor: "secondary.main",
            },
          }}
          disableRipple
        >
          SIGN UP & ENROLL NOW
        </Button>
      </Box>
    </BoxContainer>
  );
};

export default Hero;
