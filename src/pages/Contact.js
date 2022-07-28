import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, TextField, Typography, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
    field: {
      display: "inline-block",
      marginTop: "20px !important",
      background: "#CCC !important",
      color: "#fff !important",
      alignItems: 'left'
    },
    subtitle: {
      fontSize: "1.6rem !important",
      textAlign: "left",
    },
    textField: {
      textAlign: "left",
      paddingLeft: "3rem !important",


      [theme.breakpoints.down("sm")]: {
        marginTop: "1.8rem !important",
        paddingLeft: "0rem !important",
      },
    },
    headText: {
      color: " #2c3e50",
      letterSpacing: ".1em !important",
      fontSize: "12px !important",
      fontWeight: "500 !important",
      marginBottom: "5px !important",
      paddingTop: "12px !important",
      display: "block",
      textTransform: "uppercase",
    },
    headSec: {
      marginBottom: "20px !important",
      color: "rgba(255,255,255,.4)",
      background: "#222",
      lineHeight: "1.7 !important",
      fontSize: "16px",
      fontWeight: "300",
    },
    btn: {
        marginTop: "1rem !important",
        maxWidth: "150px !important"
    },
    contact: {
      paddingTop: "3rem !important",

      [theme.breakpoints.down("sm")]: {
        padding: "1.5rem !important",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "1rem 0 !important",
        width: '100% !important',
      },

    },

    inputs: {
      width: "100% !important",
    }
  };
});

export default function Contact() {
  const classes = useStyles();

  return (
    <section className="section">
      <Typography variant="h4" className={classes.title}>
        Get <strong>In Touch</strong>
      </Typography>

      <Grid container className={classes.contact}>
        <Grid item xs={12} sm={7} className={classes.inputs}>
          <Typography variant="h4" className={classes.subtitle}>
            Send me a mail
          </Typography>
          <form>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              margin="dense"
              color="secondary"
              className={classes.field}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              color="secondary"
              margin="dense"
              className={classes.field}
            />
            <TextField
              label="Your Phone Number"
              variant="outlined"
              fullWidth
              color="secondary"
              margin="dense"
              className={classes.field}
            />
            <TextField
              label="Enter Message"
              variant="outlined"
              fullWidth
              margin="dense"
              multiline
              rows={4}
              className={classes.field}
            />
            <Button
              variant="contained"
              color="secondary"
              endIcon={<SendIcon />}
              className={classes.btn}
            >
              Send
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.textField}>
          <Typography variant="h4" className={classes.subtitle}>
            Contact Infomation
          </Typography>

          <div className={classes.headSec}>
            <Typography variant="h6" className={classes.headText}>
              Email
            </Typography>
            <Typography variant="body1">example@yourdomain.com</Typography>
          </div>
          <div className={classes.headSec}>
            <Typography variant="h6" className={classes.headText}>
              Phone
            </Typography>
            <Typography variant="body1">+12 345 678 900</Typography>
          </div>

          <div className={classes.headSec}>
            <Typography variant="h6" className={classes.headText}>
              Address
            </Typography>
            <Typography variant="body1" className="db">
              San Francisco, CA
            </Typography>
            <Typography variant="body1" className="db">
              4th Floor8 Lower
            </Typography>
            <Typography variant="body1" className="db">
              San Francisco street, M1 50F
            </Typography>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
