import { Box, Stack, Typography, Divider } from "@mui/material";
const AboutUs = () => {
  return (
    <Stack direction="column" id="About">
      <Box sx={{ bgcolor: "secondary.dark" }} textAlign="center" py={4}>
        <Typography variant="h3" color="black" fontWeight="bolder">
          ABOUT US
        </Typography>
        <Typography
          variant="h4"
          color="black"
          fontStyle="italic"
          fontWeight="bold"
        >
          ~ Our Story ~
        </Typography>
      </Box>
      <Box textAlign="justify" px={{ xs: 4, md: 11 }} py={3}>
        <Typography
          sx={{ typography: { xs: "body1", md: "h5" } }}
          fontStyle="italic"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          molestiae facilis placeat ea nobis cupiditate veritatis optio iusto
          impedit iste, vel sint odio, non fugit voluptas incidunt fuga, libero
          necessitatibus? Quae, eum? Soluta, sit ipsum! Odio cupiditate id
          consequatur culpa labore voluptatibus eos aut dolor eligendi velit
          illo, iste asperiores fuga atque consectetur ipsum voluptatem quasi
          repellendus consequuntur unde porro qui facilis? Omnis veniam,
          sapiente aut rerum recusandae dolorum in harum repellat eligendi
          ratione itaque quo minima!
        </Typography>
      </Box>
      <Divider sx={{ width: "90%", marginInline: "auto" }} />
      <Box px={{ xs: 4, md: 11 }} py={3}>
        <Typography
          sx={{ typography: { xs: "h6", md: "h5" } }}
          fontStyle="italic"
          fontWeight="bold"
          textAlign="center"
          py={2}
        >
          ~ Our Business Model ~
        </Typography>
        <Typography
          textAlign="justify"
          sx={{ typography: { xs: "body1", md: "h5" } }}
          fontStyle="italic"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          expedita facilis quasi, ullam qui perferendis non voluptatibus sequi
          autem at voluptas, voluptatum vel corrupti? Porro dolorum odit quia
          perspiciatis illum magnam saepe vel magni id quam doloribus qui quas,
          ut minima harum facilis cupiditate velit est dolore labore? Ipsam
          necessitatibus, pariatur odio, corporis hic ducimus nam voluptates,
          sint asperiores quaerat deserunt aut? At omnis earum, modi illo
          excepturi dolorem.
        </Typography>
      </Box>
    </Stack>
  );
};

export default AboutUs;
