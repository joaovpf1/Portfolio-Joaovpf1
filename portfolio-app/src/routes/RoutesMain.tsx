import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../components/Home';
import { ProjectsPage } from '../components/ProjectsPage';
import { AboutMePage } from '../components/AboutMePage';

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/projects' element={<ProjectsPage/>} />
            <Route path='/aboutme' element={<AboutMePage/>} />
        </Routes>
    )
}