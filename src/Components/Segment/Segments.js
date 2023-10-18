import * as React from 'react';
import {useEffect, useState} from 'react';
import axios from "../../axios";
import {CircularProgress, Grid} from "@mui/material";
import {useParams} from "react-router-dom";
// import {Segment} from "@mui/icons-material";
import Segment from './Segment'
function Segments(props) {
    const [segments, setSegments] = useState([]);

    const [loading, setLoading] = useState(true);

    const {courseId} = useParams();

    useEffect((segments) => {
        axios.get('course/' + courseId)
            .then(function (response) {
                console.log(response);
                setSegments(response.data.segments);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (!loading && segments.length === 0) return (<div className='center-container'>
        <h3>No segments was found!</h3>
    </div>)

    return (loading ? (
            <div className="center-container">
                <CircularProgress/>
            </div>) : <Grid
            container
            pt={20}
            spacing={{xs: 2, md: 3}}
            columns={{xs: 4, sm: 8, md: 12}}
            alignItems="center"
            justifyContent="center"
        >
            {segments.map((segment, index) => (<Grid item xs={4} sm={4} md={3} key={index}>
                <Segment segment={segment}/>
            </Grid>))}
        </Grid>

    );
}

export default Segments;