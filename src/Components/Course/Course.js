import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Container} from '@mui/material';
import '../../App.css';
import {useNavigate} from "react-router-dom";

export default function Course(props) {
    let navigate = useNavigate();

    function handleClick() {
        navigate(props.course.id + '/segment', {state: props.course.id});
    }

    return (
        <Container className="App" maxWidth="sm">
            <Card sx={{maxWidth: 365}} onClick={handleClick}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        loading='lazy'
                        image={props.course.photo}
                        alt={props.course.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.course.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.course.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
}