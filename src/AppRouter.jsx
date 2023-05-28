import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from './Pages/Home';
import BlogPage from './Pages/Blog';
import ContactPage from './Pages/Contact';
import CVPage from './Pages/CV';
import GalleryPage from './Pages/Gallery';
import GithubPage from './Pages/Github';
import InstagramPage from './Pages/Instagram';
import LinkedInPage from './Pages/LinkedIn';
import PortfolioSitePage from './Pages/PortfolioSite';
import ReccsPage from './Pages/Reccs';
import RomulusPage from './Pages/Romulus';
import RYMPage from './Pages/RYM';

function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/cv" element={<CVPage/>}/>
                <Route path="/gallery" element={<GalleryPage/>}/>
                <Route path="/github" element={<GithubPage/>}/>
                <Route path="/links/instagram" element={<InstagramPage/>}/>
                <Route path="/links/linkedin" element={<LinkedInPage/>}/>
                <Route path="/projects/portfolio_site" element={<PortfolioSitePage/>}/>
                <Route path="/recommendations" element={<ReccsPage/>}/>
                <Route path="/projects/romulus" element={<RomulusPage/>}/>
                <Route path="/links/rym" element={<RYMPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;