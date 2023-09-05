import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

const theme = createTheme({
  typography: {
    fontFamily: `"Times New Roman","Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#020202",
    },
    secondary: {
      main: "rgb(255, 255, 0)",
    },
    background: {
      default: "#020202",
    },
    text: {
      primary: "rgb(255, 255, 0)",
      secondary: "#FFFFFF",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Navbar />
      <Hero />
      <Courses />
      <AboutUs />
      <FAQ />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
