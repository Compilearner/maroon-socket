import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import AddPlant from './pages/AddPlant.jsx';
import MyPlants from './pages/MyPlants.jsx';
import UserHome from './pages/UserHome.jsx';
import Community from './pages/Community.jsx';
import LandingPage from './pages/LandingPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <LandingPage /> },
            { path: '/addPlant', element: <AddPlant /> },
            { path: '/myPlants', element: <MyPlants /> },
            { path: '/userHome', element: <UserHome /> },
            { path: '/community', element: <Community /> }
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
