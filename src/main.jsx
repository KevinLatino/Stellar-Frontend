import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { DashboardScreen } from './Screens/DashboardScreen';
import { TaskScreen } from './Screens/TaskScreen';
import { CalendarScreen } from './Screens/CalendarScreen';
import { ProfileScreen } from './Screens/ProfileScreen';
import { DiscoverScreen } from './Screens/DiscoverScreen';
import { RegisterScreen } from './Screens/RegisterScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { AuthProvider } from './Context/context';
import App from './App';
import './index.css';


const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: '/sidebar',
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <DashboardScreen />
      },
      {
        path: 'tasks',
        element: <TaskScreen />
      },
      {
        path: 'Calendar',
        element: <CalendarScreen />
      },
      {
        path: 'discover',
        element: <DiscoverScreen />
      },
      {
        path: 'profile',
        element: <ProfileScreen />
      },
    ]
  },
  {
    path: '/register',
    element: <RegisterScreen />
  },
  {
    path: "/login",
    element: <LoginScreen />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
