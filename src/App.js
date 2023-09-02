import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer/Footer";

const theme = createTheme({
  palette: {
    primary: purple,
    text: {
      primary: "#fff",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "normal",
          fontSize: "1.15rem",
          padding: "0.3rem 1rem",
          borderRadius: "0.3rem",
          background: "linear-gradient(90deg, rgba(156,39,176,1) 0%, rgba(221,8,223,1) 40%);"
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Hero />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
