import { makeStyles } from "@mui/styles";
import { Grid, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import PhoneIcon from "@mui/icons-material/Phone";


const useStyles = makeStyles((theme) => {
    return {
      title: {
        paddingTop: "20px",
        paddingBottom: "3rem",
        textAlign: "center",
      },
      aboutImg: {
        width: "100%",
      },
      aboutGrid: {
        alignItems: "center !important",

        [theme.breakpoints.down("md")]: {
          width: "80% !important",
          margin: "0 auto !important"
        },
        [theme.breakpoints.down("sm")]: {
          width: "90% !important",
        },
      },
      aboutTextHolder: {
        padding: '2rem !important',

       
      },
      aboutMe: {
        paddingBottom: "3rem",

        [theme.breakpoints.down("lg")]: {
          padding: '0.3rem !important',
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "1.4rem !important",
        },
      },
      aboutTextHolder: {
        paddingLeft: "3rem !important",
        textAlign: "left !important",
       
        [theme.breakpoints.down("lg")]: {
          paddingLeft: "1rem !important",
          maxWidth: "40% !important",
        },
        [theme.breakpoints.down("md")]: {
          padding: '0 !important',
          maxWidth: "100% !important",
        },
        
      },
      aboutImgHolder: {
        width: "100% !important",
        paddingRight: "3rem !important",

        
        [theme.breakpoints.down("lg")]: {
          paddingLeft: "1.5rem !important",
          width: "150%"
        },
        [theme.breakpoints.down("md")]: {
          padding: '0 !important',
          marginBottom: "2rem !important",
        },

      },
      firstP: {
        fontWeight: '200 !important',
        lineHeight: '1.9 !important',
        fontSize: '1.25rem !important',
        marginBottom: '1rem !important',
        color: 'rgba(255,255,255,.4)',
      },
      secondP: {
        fontWeight: '200 !important',
        lineHeight: '1.5 !important',
        fontSize: '0.95rem !important',
        marginBottom: '3rem !important',
        color: 'rgba(255,255,255,.4)',

        [theme.breakpoints.down("lg")]: {
          marginBottom: '0.5rem !important',
        },
      },
      btn: {
        margin: "0.2rem !important",
        letterSpacing: '1px !important'
      }
    };
  });

export default function AboutComponent(){
    const classes = useStyles();

    return(
        <section className="section">
          <Grid container className={classes.aboutGrid}>
            <Grid item md={6} className={classes.aboutImgHolder}>
              <img src="/pic.webp" alt="me" className={classes.aboutImg} />
            </Grid>

            <Grid item md={6} className={classes.aboutTextHolder}>
              <Typography variant="h4" className={classes.aboutMe}>
                About <strong>Me</strong>
              </Typography>

              <div>
                <Typography variant="body1" className={classes.firstP}>
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </Typography>

                <Typography variant="body2" className={classes.secondP}>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth
                </Typography>

                <Button variant="outlined" startIcon={<PhoneIcon />} className={classes.btn}>
                    Hire Me
                </Button>
                <Button variant="contained" color="secondary" endIcon={<DownloadIcon />} className={classes.btn}>
                    Download CV
                </Button>
              </div>
            </Grid>
          </Grid>
        </section>
    )
}