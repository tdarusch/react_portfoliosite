import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter, BrowserRouter } from "react-router-dom";
import AppRouter from './AppRouter';

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

// const AppRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage/>
//   },
//   {
//     path: "/blog",
//     element: <BlogPage/>
//   },
//   {
//     path: "/contact",
//     element: <ContactPage/>
//   },
//   {
//     path: "/cv",
//     element: <CVPage/>
//   },
//   {
//     path: "/gallery",
//     element: <GalleryPage/>
//   },
//   {
//     path: "/github",
//     element: <GithubPage/>
//   },
//   {
//     path: "/links/instagram",
//     element: <InstagramPage/>
//   },
//   {
//     path: "/links/linkedin",
//     element: <LinkedInPage/>
//   },
//   {
//     path: "/projects/portfolio_site",
//     element: <PortfolioSitePage/>
//   },
//   {
//     path: "/recommendations",
//     element: <ReccsPage/>
//   },
//   {
//     path: "/projects/romulus",
//     element: <RomulusPage/>
//   },
//   {
//     path: "/links/rym",
//     element: <RYMPage/>
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter>
      <App />
    </AppRouter>
  </React.StrictMode>
);