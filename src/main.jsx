import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DiscoverScreen } from './Screens/DiscoverScreen';
import { RankingScreen } from './Screens/RankingScreen';
import { TaskScreen } from './Screens/TaskScreen';
import { HomeScreen } from './Screens/HomeScreen'
import App from './App';
import './index.css';

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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
