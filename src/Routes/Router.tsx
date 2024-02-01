import App from '@/App';
import About from '@/Pages/About/About';
import AddService from '@/Pages/Admin/AddService';
import Dashboard from '@/Pages/Admin/Dashboard';
import ServiceList from '@/Pages/Admin/ServiceList';
import Home from '@/Pages/Home/Home';
import AdminLayout from '@/components/ui/Layouts/AdminLayout/AdminLayout';

import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard"></Navigate>,
      },
      {
        // index: true,
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'add-service',
        element: <AddService />,
      },
      {
        path: 'serviceList',
        element: <ServiceList />,
      },
    ],
  },
]);

export default router;
