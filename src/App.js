// import logo from './logo.svg';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Courses from "./Components/Courses";
// import { Grid } from '@mui/material';
import Levels from "./Components/Level/Levels";
import {Route, Routes} from "react-router-dom";
import Courses from "./Components/Course/Courses";
import Segments from "./Components/Segment/Segments";
import SegmentDetails from "./Components/Segment/SegmentDetails";

import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div>
                <Routes>
                    <Route path='/' element={<Levels/>}/>

                    <Route path='/course' element={<Courses/>}/>

                    <Route path='/course/:courseId/segment' element={<Segments/>}/>

                    <Route path='/course/:courseId/segment/:segmentId' element={<SegmentDetails/>}/>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
