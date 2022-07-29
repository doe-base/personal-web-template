import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import PorfolioComponent from "../pages/Porfolio";
import ResumeComponent from "../pages/Resume";
import AboutComponent from "../pages/About";
import ServiceComponent from "../pages/Services";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import NavBar from "./NavBar";
import Home from "@mui/icons-material/Home";

import Aos from "aos";
import "aos/dist/aos.css"

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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    socialIcons: {
      display: "flex",
      flexWrap: "wrap",
      margin: "2rem 0 !important",
    },
    socialIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "60px",
      height: "60px",
      background: "#333",
      position: "relative",
      borderRadius: "50%",
      fontSize: "26px",
      margin: "5px 10px",
      color: "#bac964 !important",
      cursor: "pointer",
    },
    a: {
      color: "#bac964 !important",
    },
    home: {
      color: "#bac964 !important",
      background: "#333",
      padding: "0.5rem !important",
      display: (isFixed) => {
        if (isFixed) {
          return "inline-block";
        } else {
          return "none";
        }
      },
      borderRadius: "2rem !important",
      position: "fixed",
      bottom: "2rem !important",
      right: "2rem !important",
      cursor: "pointer",
      zIndex: "999999999",

      [theme.breakpoints.down("sm")]: {
        bottom: "1rem !important",
        right: "1rem !important",
      },
    },
  };
});

export default function Layout({ children }) {
  const [isFixed, setIsFixed] = useState(false);
  const [ isActive, setIsActive] = useState(5)

  // Refs
  const porfolioRef = useRef(null) 
  const resumeRef = useRef(null) 
  const aboutRef = useRef(null) 
  const servicesRef = useRef(null) 
  const contactRef = useRef(null) 
  const footerRef = useRef(null) 

  let porfolioTop = null
  let resumeTop = null
  let aboutTop = null
  let servicesTop = null
  let contactTop = null
  let footerTop = null
  
  useEffect(()=>{
    if(porfolioRef.current){
       porfolioTop = porfolioRef.current.offsetTop - 300
       resumeTop = resumeRef.current.offsetTop - 300
       aboutTop = aboutRef.current.offsetTop - 300
       servicesTop = servicesRef.current.offsetTop - 300
       contactTop = contactRef.current.offsetTop - 300
       footerTop = footerRef.current.offsetTop - 300
    }
  }, [])

  window.addEventListener("scroll", (e) => {
    let scroll = window.pageYOffset;

    if (scroll > 300) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
      setIsActive(2)
    }

    if (scroll >= porfolioTop && scroll < resumeTop) {
        setIsActive(1)
      }else if(scroll >= resumeTop && scroll < aboutTop){
      setIsActive(2)
    }else if(scroll >= aboutTop && scroll < servicesTop){
      setIsActive(3)
    }else if(scroll >= servicesTop && scroll < contactTop){
      setIsActive(4)
    }else if(scroll >= contactTop && scroll < footerTop){
      setIsActive(5)
    }

    
  });

  const classes = useStyles(isFixed);

  function backTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(()=>{
    Aos.init({ duration: 500})
  }, [])



  return (
    <main>
      <section id="hero-section" style={{ backgroundImage: "url(/pic.webp)" }}>
        <div className="hero-overlay">
          <NavBar isActive={isActive} />
          <div className="hero-content">
            <Grid container className="hero-text-holder" data-aos="fade-up">
              <Grid item xs={11}>
                <Typography variant="h1" className={classes.h1Span} >
                  <span>Hello, I'm</span> <br />
                  <strong>Isah Ibrahim Abu</strong>
                </Typography>
                <Typography variant="body1" className={classes.pprofession}>
                  And am a Fashion Designer from the Egypt
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <div className={classes.home} onClick={() => backTop()}>
        <Home fontSize="large" />
      </div>

      {/* Main Section of all page content */}
      <section id="page-content">
        <PorfolioComponent porfolioRef={porfolioRef}/>

        <ResumeComponent resumeRef={resumeRef}/>

        <AboutComponent aboutRef={aboutRef}/>

        <ServiceComponent servicesRef={servicesRef}/>

        <Testimonials />

        <Contact contactRef={contactRef}/>

        <section className="section" ref={footerRef}>
          <div className={classes.footer}>
            <Typography variant="body1">
              Copyright © 2022 All rights reserved | This template is made by{" "}
              <a href="#" className={classes.a}>
                Daniel IDG
              </a>
            </Typography>
            <div className={classes.socialIcons}>
              <div className={classes.socialIcon} data-aos="fade-up" data-aos-once="true" data-aos-delay="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </div>
              <div className={classes.socialIcon} data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </div>
              <div className={classes.socialIcon} data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <div className={classes.socialIcon} data-aos="fade-up" data-aos-once="true" data-aos-delay="150">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </div>
              <div className={classes.socialIcon} data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
                <i className="fa fa-reddit-alien" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
