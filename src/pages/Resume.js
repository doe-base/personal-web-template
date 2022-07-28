import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import ResumeCard from "../components/resumeCard";

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
        paddingBottom: "2rem !important",
      },
    },
    resume: {
      display: "flex !important",
      flexDirection: "row",
      alignItems: "center",

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    resumeItem: {
      padding: "0px 15px 15px 0px !important",
    },
    subTitle: {
      marginBottom: "3rem!important",
      fontSize: "25px !important",
      color: "white",
      fontWeight: "200",
      textAlign: "left !important"
    },
  };
});

export default function ResumeComponent() {
  const classes = useStyles();

  return (
    <section className="section">
      <Typography variant="h4" className={classes.title}>
        My <strong>Resume</strong>
      </Typography>

      <div className={classes.resume}>
        <div className={classes.resumeItem}>
          <Typography variant="h3" className={classes.subTitle}>
            Education
          </Typography>

          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
        </div>
        <div className={classes.resumeItem}>
          <Typography variant="h3" className={classes.subTitle}>
            Experience
          </Typography>

          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
        </div>
      </div>
    </section>
  );
}
