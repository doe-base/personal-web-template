import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import PorfolioComponent from "../pages/Porfolio";
import ResumeComponent from "../pages/Resume";
import AboutComponent from "../pages/About";
import ServiceComponent from "../pages/Services";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";

// Material Ui
const useStyles = makeStyles((theme) => {
  return {
    // Real Work
    h1Span: {
      letterSpacing: "0.2rem",
      fontWeight: "200 !important",
      color: "#fff",
      fontSize: "70px !important",
      marginBottom: "20px !important",
      display: "block",
      [theme.breakpoints.down("md")]: {
        fontWeight: "200 !important",
        color: "#fff !important",
        marginBottom: "20px !important",
        fontSize: "2.5rem !important",
      },
    },
    pprofession: {
      letterSpacing: "0.2rem",
      color: "rgba(255,255,255, 0.658) !important",
      textTransform: "uppercase",
      display: "block",
      fontWeight: "bold",
      lineHeight: 1.7,
      fontSize: 18,
      [theme.breakpoints.down("md")]: {
        fontSize: 12,
        fontWeight: "200",
      },
    },
    footer: {
      width: "100%",
      margin: "0 auto !important",
      display: 'flex',
      flexDirection: "column",
      alignItems: "center",
    },
    socialIcons: {
      display: 'flex',
      flexWrap: "wrap",
      margin: "2rem 0 !important"
    },
    socialIcon: {
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      width: '60px',
      height: '60px',
      background: '#333',
      position: 'relative',
      borderRadius: '50%',
      fontSize: '26px',
      margin: '5px 10px',
      color: '#bac964 !important',

    },
    a: {
      color: '#bac964 !important',
    }
  };
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <main>
      <section id="hero-section" style={{ backgroundImage: "url(/pic.webp)" }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <Grid container className="hero-text-holder">
              <Grid item>
                <Typography variant="h1" className={classes.h1Span}>
                  <span>Hello, I'm</span> <br />
                  <strong>Isah Ibrahim Abu</strong>
                </Typography>
                <Typography variant="p" className={classes.pprofession}>
                  And am a Fashion Designer from the Irak
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>

      {/* Main Section of all page content */}
      <section id="page-content">
        <PorfolioComponent />

        <ResumeComponent />

        <AboutComponent />

        <ServiceComponent />

        <Testimonials />

        <Contact />

        <section className="section">

          <div className={classes.footer}>

            <Typography variant="body1">Copyright © 2022 All rights reserved | This template is made by  <a href="#" className={classes.a}>Daniel IDG</a></Typography>
            <div className={classes.socialIcons}>
              <div className={classes.socialIcon}><i class="fa fa-facebook" aria-hidden="true"></i></div>
              <div className={classes.socialIcon}><i class="fa fa-instagram" aria-hidden="true"></i></div>
              <div className={classes.socialIcon}><i class="fa fa-twitter" aria-hidden="true"></i></div>
              <div className={classes.socialIcon}><i class="fa fa-linkedin" aria-hidden="true"></i></div>
              <div className={classes.socialIcon}><i class="fa fa-reddit-alien" aria-hidden="true"></i></div>
            </div>
            
          
          </div>
        </section>

      </section>
    </main>
  );
}
