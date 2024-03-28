import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Dresses from '../layout/Dresses';
import ReviewsUser from '../layout/Reviews';
import ContactUser from '../layout/Contact';
import UserHeader from '../layout/Header';
import LoginForm from '../layout/LoginForm';

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>  
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <UserHeader /> },
      { path: '/header', element: <Header /> },
      { path: '/dresses', element: <Dresses /> },
      { path: '/contact', element: <ContactUser /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/reviews', element: <ReviewsUser /> }
    ],
  },
]);

export default userRouter;
