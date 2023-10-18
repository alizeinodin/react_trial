// import logo from './logo.svg';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Courses from "./Components/Courses";
// import { Grid } from '@mui/material';
import Levels from "./Components/Level/Levels";
import {Route, Routes} from "react-router-dom";
import Courses from "./Components/Course/Courses";
import Course from "./Components/Course/Course";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Levels/>}/>

                <Route path='/course' element={<Courses/>}/>
                <Route path='/course/:courseId' element={<Course/>}/>
            </Routes>
        </div>
    );
}

export default App;
