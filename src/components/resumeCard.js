import { Typography } from "@mui/material";
import React from "react";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=>{
    return {
        date: {
            display: 'block',
            marginBottom: '10px !important',
            fontSize: 12,
            fontWeight: '700',
            color: '#fff',
        },
        title: {
            color: '#bac964',
            fontSize: '20px !important',
            fontWeight: '200 !important',
            marginBottom: '0.5rem !important',
            lineHeight: '1.2',
        },
        text: {
            display: 'block',
            color: 'rgba(255,255,255,.4)',
            lineHeight: 1.7,
            fontSize: '15px !important',
            fontWeight: '300',
            marginBottom: '1rem !important',
        },
        industry: {
            display: 'block',
            fontSize: '15px !important',
            color: 'rgba(255,255,255,.2)',
        },
        card: {
            padding: 30,
            background: '#333',
            transition: ".3s all ease",
            border: '4px solid transparent',
            borderRadius: '7px',
            margin: '0 0 1.5rem 0 !important',
            textAlign: 'left !important'
        }
    }
})

export default function ResumeCard(){

    const classes = useStyles()

    return(
        <div className={classes.card}>
            <Typography variant="p" className={classes.date}><CalendarMonthOutlinedIcon fontSize="10px"/> April 2020 - December 2023</Typography>
            <Typography variant="h5" className={classes.title}>Masters in Civil Law</Typography>
            <Typography variant="p" className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
            <Typography variant="p" className={classes.industry}>University of London</Typography>
        </div>
    )
} 