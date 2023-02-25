import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../views/pages/Home';
import NewsPage from '../views/pages/News';
import ProfilePage from '../views/pages/Profile';
import LoginPage from '../views/pages/Login';

const AppRoutes = (): JSX.Element => {
    return (
        <Routes>		
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/news" element={<NewsPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
    );
};


export default AppRoutes;