import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from '../layout/Header';

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      // Add admin-specific routes here if needed
    ],
  },
]);

export default adminRouter;
