import { Typography } from "@mui/material";
import HeroCss from "./Hero.module.css";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import heroImg from "../../assets/images/banner-image.png";

export const Hero = () => {
  return (
    <section id="hero" className={HeroCss.hero}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Welcome, I'm Pratik
            </Typography>
            <Typography
              sx={{ marginBottom: 3 }}
              className={HeroCss["hero-title"]}
              variant="h2"
            >
              Transforming Code into Creative Magic
            </Typography>

            <Typography
              sx={{ marginBottom: 3 }}
              className="sub-description"
              variant="subtitle2"
            >
              Specializing in Front-End Magic with keen attention to detail and
              a knack for turning ideas into reality.
            </Typography>

            <Button color="primary" variant="contained" disableRipple>
              Let's connect
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={HeroCss["hero-image"]}>
            <img src={heroImg} alt="hero-image" />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};
