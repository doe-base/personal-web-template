import { Typography, Button, Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=>{
    return {
        card: {
            background: '#333',
            padding: '30px',
            textAlign: 'center !important',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '16px 16px',
            borderRadius: '7px',

            [theme.breakpoints.down("lg")]: {
                padding: '10px !important',
              },
            
        },
        svg: {
            background: "#bac964 !important",
            padding: '2rem',
            borderRadius: '50%',
            display: 'block',
            marginBottom: '50px !important',
            width: '100px !important',
            height: '100px !important',
            position: 'relative',
            margin: '0 auto 30px auto !important',


            [theme.breakpoints.down("lg")]: {
                width: '55px !important',
                height: '55px !important',
                marginBottom: '25px !important',
              },

        },
        icon: {
            width: '100%',
        },
        mainText: {
            fontSize: '20px !important',
            fontWeight: '200',
            marginBottom: '1.5rem !important',
        },
        textP:{
            marginBottom: '1rem !important',
            color: 'rgba(255,255,255,.4)',
            lineHeight: '1.7',
            fontSize: '16px',
            fontWeight: '300',
        },
        btn: {
            color: "#bac964 !important",
            marginBottom: '0.5rem !important', 
        },
        flexHolder: {  

            [theme.breakpoints.down("lg")]: {
                width: '85% !important',
                margin: '0 auto !important'
              },
            [theme.breakpoints.down("sm")]: {
                width: '98% !important',
              },
        }
    }
})

export default function ServiceCard(){

    const classes = useStyles()

    return(
        <Grid container className={classes.flexHolder}>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <div className={classes.card}>
                    <div className={classes.svg}><img src="/design-svg.svg" className={classes.icon} alt="icon" /></div>
                    <Typography variant="h5" className={classes.mainText}>Design</Typography>
                    <Typography variant="body1" className={classes.textP}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Typography>
                    <Button className={classes.btn}>Learn More</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <div className={classes.card}>
                    <div className={classes.svg}><img src="/clothe-svg.svg" className={classes.icon} alt="icon" /></div>
                    <Typography variant="h5" className={classes.mainText}>Tailoring</Typography>
                    <Typography variant="body1" className={classes.textP}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</Typography>
                    <Button className={classes.btn}>Learn More</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <div className={classes.card}>
                    <div className={classes.svg}><img src="/marketing-svg.svg" className={classes.icon} alt="icon"/></div>
                    <Typography variant="h5" className={classes.mainText}>Markerting</Typography>
                    <Typography variant="body1" className={classes.textP}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Typography>
                    <Button className={classes.btn}>Learn More</Button>
                </div>
            </Grid>

        </Grid>
    )
} 