import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProjectsCSS from "./Projects.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const projects = [
    {
      projectTitile: "Portfolio Website",
      projectDescription:
        "Interactive website built using React JS, Material UI and React Bootstrap, includes different sections.",
      websiteURL: "https://www.google.com/",
      imageURL: image1,
    },
    {
      projectTitile: "Stocks Website",
      projectDescription:
        "Stay Informed: Access the latest news, trends, and analysis on stocks and financial markets. Our team of experts curates real-time updates to keep you ahead of the curve.",
      websiteURL: "https://www.google.com/",
      imageURL: image2,
    },
    {
      projectTitile: "E-commerce Website",
      projectDescription:
        "Seamless Shopping: Our user-friendly interface and intuitive navigation make shopping a breeze. Easily browse, search, and filter products to find exactly what you're looking for, and complete your purchase with just a few clicks.",
      websiteURL: "https://www.google.com/",
      imageURL: image3,
    },
  ];
  return (
    <section id="projects" className={ProjectsCSS.projects}>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h3">A small selection of my work</Typography>
        </Grid>
        <Grid
          item
          xs={0}
          sm={0}
          md={0.5}
          className={ProjectsCSS["content-center"]}
        >
          <div
            className="vertical-bar"
            style={{
              height: "3rem",
              width: "1px",
              backgroundColor: "#fff",
              marginTop: "2.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={12} sm={6} md={5.5}>
          <Typography
            sx={{ width: "70%", margin: "auto" }}
            variant="body1"
            className="sub-description"
          >
            I have been able to build many beautiful brands. Small and large,
            from corporate to culture. I prefer to let my work speak for itself.
            Check it out yourself.
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ margin: "5rem 0" }}>
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
          {projects.map((project) => (
            <Box sx={{ marginTop: 5 }}>
              <Paper sx={{ padding: 3 }} className="dark-paper" elevation={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={7}>
                    <img
                      width="100%"
                      src={project.imageURL}
                      loading="lazy"
                      alt="images"
                    />
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Stack spacing={5}>
                      <Typography variant="h4">
                        {project.projectTitile}
                      </Typography>
                      <Typography variant="body1" className="sub-description">
                        {project.projectDescription}
                      </Typography>
                      <div>
                        <Button color="primary" variant="contained">
                          Open live site
                        </Button>
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
};
