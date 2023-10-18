import React from "react";
import "../../App.css";
import {Grid} from "@mui/material";
import Course from "./Course";
import {useLocation} from "react-router-dom";

function Courses(props) {
    const location = useLocation();
    const courses = location.state || [];

    if (courses.length === 0) {
        return (
            <div className="App">
                <h3>No course was found!</h3>
            </div>
        );
    }
    return (
        <Grid
            container
            pt={20}
            spacing={{xs: 2, md: 3}}
            columns={{xs: 4, sm: 8, md: 12}}
            alignItems="center"
            justifyContent="center"
        >
            {courses.map((course, index) => (
                <Grid item xs={3} sm={4} md={3} key={index}>
                    <Course course={course}></Course>
                </Grid>
            ))}
        </Grid>
    );
}

export default Courses;
