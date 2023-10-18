import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, CardActions, Container} from '@mui/material';
import '../../App.css';
import {useNavigate} from "react-router-dom";

function Segment(props) {
    let navigate = useNavigate();

    function handleClick() {
        navigate(props.segment.id);
    }

    return (<Container maxWidth="sm">
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {props.segment.type}
                </Typography>
                <Typography variant="h4" component="div">
                    {props.segment.title}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {props.segment.level}
                </Typography>
                <Typography variant="body2">
                    {props.segment.webTitle}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleClick} size="large">Learn More</Button>
            </CardActions>
        </Card>
    </Container>);
}

export default Segment;