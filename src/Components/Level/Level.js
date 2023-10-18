import * as React from 'react';
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {useNavigate} from "react-router-dom";

export default function (props) {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/course', {state: props.level.courses});
    }

    return (
        <Card sx={{maxWidth: 385}} onClick={handleClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="210"
                    loading='lazy'
                    image={props.level.photo}
                    alt={props.level.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.level.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.level.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
        ;
}