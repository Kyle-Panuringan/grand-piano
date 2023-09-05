import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const itemButtons = ["Courses", "About", "FAQ", "Contact"];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <AppBar
      position="absolute"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Link
          href="#"
          underline="none"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bolder" }} color="yellow">
            Grand<span style={{ color: "white" }}>Piano</span>
          </Typography>
        </Link>

        {/* Nav Buttons */}
        <Stack
          direction="row"
          sx={{
            marginLeft: "auto",
            display: { xs: "none", md: "flex" },
          }}
        >
          {itemButtons.map((itemButton, i) => {
            return (
              <Link
                href="#"
                underline="none"
                key={i}
                sx={{ mx: "22px", color: "text.secondary" }}
              >
                <Typography variant="h6">{itemButton}</Typography>
              </Link>
            );
          })}
        </Stack>
        {/* Menu Button */}
        <IconButton
          sx={{
            marginLeft: "auto",
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        {/* Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sx={{ padding: "0" }}
        >
          <Box width="250px">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              px={2}
              py={2}
            >
              <Typography variant="h6">GrandPiano</Typography>
              <IconButton onClick={() => setIsDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <List>
              {itemButtons.map((item, i) => (
                <ListItem key={i} disablePadding>
                  <ListItemButton
                    href={`#${item}`}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <ListItemText
                      primary={item}
                      disableTypography
                      sx={{ color: "white" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
