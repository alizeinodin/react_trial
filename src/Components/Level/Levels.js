import * as React from 'react';
import {lazy, useEffect, useState} from 'react';
import {CircularProgress, Grid} from "@mui/material";
import axios from '../../axios'

const Level = lazy(() => import('./Level'));

export default function (props) {
    const [levels, setLevels] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect((levels) => {
        axios.get('level/reference')
            .then(function (response) {
                console.log(response);
                setLevels(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (!loading && levels.length === 0)
        return (
            <div className='center-container'>
                <h3>No levels was found!</h3>
            </div>
        )

    return (
        loading ? (
                <div className="center-container">
                    <CircularProgress/>
                </div>
            ) :
            <Grid
                container
                pt={20}
                spacing={{xs: 2, md: 3}}
                columns={{xs: 4, sm: 8, md: 12}}
                alignItems="center"
                justifyContent="center"
            >
                {levels.map((level, index) => (<Grid item xs={4} sm={4} md={3} key={index}>
                    <Level level={level}/>
                </Grid>))}
            </Grid>

    )
        ;
}