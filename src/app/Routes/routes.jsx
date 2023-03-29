import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/pages/charts/ChartsRoute';
import dashboardRoutes from 'app/pages/dashboard/DashboardRoutes';
import materialRoutes from 'app/Routes/MaterialRoutes';
import NotFound from 'app/pages/sessions/NotFound';
import sessionRoutes from 'app/pages/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from '../components/MatxLayout/MatxLayout';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes],
  },
  ...sessionRoutes,
  { path: '/', element: <Navigate to="/netcare/dashboard/admin" /> },
  { path: '/', element: <Navigate to="/netcare/dashboard/hospital" /> },
  { path: '/', element: <Navigate to="/netcare/dashboard/service_provider" /> },
  { path: '/', element: <Navigate to="/netcare/dashboard/driver" /> },
  { path: '*', element: <NotFound to="session/404" /> },
];

export default routes;
