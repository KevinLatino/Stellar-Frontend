import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DiscoverScreen } from './Screens/DiscoverScreen';
import { RankingScreen } from './Screens/RankingScreen';
import { TaskScreen } from './Screens/TaskScreen';
import { HomeScreen } from './Screens/HomeScreen';
import { RegisterScreen } from './Screens/RegisterScreen';
import { LoginScreen } from './Screens/LoginScreen';
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
        element: <HomeScreen />
      },
      {
        path: 'discover',
        element: <DiscoverScreen />
      },
      {
        path: 'ranking',
        element: <RankingScreen />
      },
      {
        path: 'tasks',
        element: <TaskScreen />
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
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
