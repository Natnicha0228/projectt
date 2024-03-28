import { RouterProvider} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import guestRouter from '../routes/guestRouter';
import userRouter from '../routes/userRouter';
import adminRouter from '../routes/adminRoutes';


export default function AppRouter() {
  const { user } = useAuth();
  let finalRouter;

  if (user?.role === 'admin') {
    finalRouter = adminRouter;
  } else if (user?.id) {
    finalRouter = userRouter;
  } else {
    finalRouter = guestRouter;
  }
  return (
    <RouterProvider router={finalRouter} />
  )
}
