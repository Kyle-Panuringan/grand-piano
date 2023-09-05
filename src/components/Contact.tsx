import {
  Avatar,
  Box,
  List,
  ListItem,
  Stack,
  Typography,
  ListItemAvatar,
  ListItemText,
  TextField,
  styled,
  Button,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";

const CssTextField = styled(TextField)({
  margin: "10px 0 10px",
  "& input": {
    color: "black",
  },
  "& label,& label.Mui-focused": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset, &:hover fieldset, &.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});

const Contact = () => {
  return (
    <Stack
      id="Contact"
      direction={{ xs: "column", md: "row" }}
      sx={{ minHeight: "100vh", padding: { xs: 0, md: "50px" } }}
    >
      <Stack
        sx={{
          width: 1,
          padding: { xs: "17px", md: "0" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack>
          <Typography sx={{ typography: { xs: "h3", md: "h2" } }}>
            Contact Us
          </Typography>
          <Typography
            sx={{ typography: { xs: "body1", md: "h6" } }}
            fontStyle="italic"
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, recusandae
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "secondary.dark" }}>
                  <PlaceIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="ADRESS"
                secondary="123 East Blue, Grand Line City"
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "secondary.dark" }}>
                  <LocalPhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="PHONE" secondary="123456789+" />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "secondary.dark" }}>
                  <TwitterIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Twitter" secondary="www.twitter.com" />
            </ListItem>
          </List>
        </Stack>
      </Stack>
      <Stack
        sx={{
          bgcolor: "secondary.dark",
          width: 1,
          borderRadius: { xs: "0px", md: "20px" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ typography: { xs: "h4", md: "h2" } }} color="black">
          Send Email
        </Typography>
        <Box width="90%">
          <CssTextField label="Name" fullWidth />
          <CssTextField label="Email" fullWidth />
          <CssTextField label="Subject" fullWidth />
          <CssTextField label="Message" fullWidth multiline rows={4} />
          <Button
            variant="contained"
            fullWidth
            sx={{
              letterSpacing: "5px",
              fontWeight: "bolder",
              marginBottom: "10px",
            }}
          >
            Submit Email
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Contact;
