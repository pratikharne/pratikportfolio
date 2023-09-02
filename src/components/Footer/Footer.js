import { Box, Grid, Stack, Typography } from "@mui/material";
import FooterCss from "./Footer.module.css";
import linked from "../../assets/icons/linkedin.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import footerVector from "../../assets/images/footer-vector.png";
export const Footer = () => {
    return (
      <section id="footer" className={FooterCss.footer}>
        {/* <div className={FooterCss["divider"]}></div> */}
        <Box>
          <div className={FooterCss["divider"]}></div>
          <Grid container sx={{ marginTop: "7%" }}>
            <Grid item xs={12} md={2}>
              <img className="footer-vector" width="90%" src={footerVector} alt="footer-image" />
            </Grid>
            <Grid item xs={12} md={10} textAlign="center">
              <Stack spacing={1}>
                <Typography variant="h4">Thanks for your visit!</Typography>
                <Typography className="sub-description" variant="body1">
                  Copyright &copy; 2022-2023
                </Typography>
                <div className="social-icon">
                  <a href="#"><img src={linked} /></a>
                  <a href="#"><img src={facebook} /></a>
                  <a href="#"><img src={instagram} /></a>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </section>
    );
}