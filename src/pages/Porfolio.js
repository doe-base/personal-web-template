import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button, Image } from "@mui/material";
import Porfolio from "../components/portfolioCard";
import porfolioJsonData from "../data/porfolioData.json";
import { motion } from "framer-motion/dist/framer-motion";


// Creating and Array of porfolio category
const porfolioSet = new Set();
porfolioSet.add("all");
porfolioJsonData.map((item) => porfolioSet.add(item.category));
const porfolioArr = [...porfolioSet];

// Material Ui
const useStyles = makeStyles((theme) => {
  return {
    title: {
      paddingTop: "20px",
      paddingBottom: "3rem",
      textAlign: "center",


      [theme.breakpoints.down("xs")]: {
        fontSize: "1.4rem !important",
        paddingTop: "0px !important",
        paddingBottom: "0rem !important",
      },
    },
    button: {
      margin: "0 0.2rem !important",
      fontWeight: "100 !important",
    },
    cardGrid: {
      paddingTop: "2rem",
      display: "grid !important",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
      
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.2rem",
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "0.8rem",
      },
    },
    
  };
});
export default function PorfolioComponent() {
  const [porfolioData, setPorfolioData] = useState(porfolioJsonData);
  const classes = useStyles();

  function filterPorfolioArr(category) {
    if (category === "all") {
      setPorfolioData(porfolioJsonData);
    } else {
      // setPorfolioData(
      //   porfolioJsonData.map(item => item.category === category ? {...item, displayStatus: true} : {...item, displayStatus: false})
      // );
      setPorfolioData(
        porfolioJsonData.filter((item) => item.category === category)
      );
    }
  }

  return (
    <section className="section profile-section">
      <Typography variant="h4" className={classes.title}>
        My <strong>Designes</strong>
      </Typography>

      {/* Porfolio Filter Buttons */}
      <div className="filter-btn-container" style={{ marginBottom: "30px" }}>
        {porfolioArr.map((item, index) => {
          return (
            <Button
              key={index}
              color="primary"
              className={classes.button}
              onClick={() => filterPorfolioArr(item)}
            >
              {item}
            </Button>
          );
        })}
      </div>

      <motion.div layout className={classes.cardGrid}>
        {porfolioData.map((item, index) => {
          return <Porfolio item={item} key={index} />;
        })}
      </motion.div>
    </section>
  );
}
