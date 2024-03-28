import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import LoginForm from '../layout/LoginForm';
import RegisterForm from '../layout/RegisterForm';
import Reviews from '../layout/Reviews';
import Dresses from '../layout/Dresses';
import Contact from '../layout/Contact';

const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Header /> },
      { path: '/register', element: <RegisterForm /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/dresses', element: <Dresses /> },
      { path: '/reviews', element: <Reviews /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

export default guestRouter;
