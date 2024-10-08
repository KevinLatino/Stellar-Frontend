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
import SetGoals from './Screens/DiscoverScreens/SetGoals';
import EisenhowerMatrix from './Screens/DiscoverScreens/EisenhowerMatrix';
import ImportantDates from './Screens/DiscoverScreens/ImportantDates';
import PlanificationEnvironment from './Screens/DiscoverScreens/PlanificationEnvironment';
import Mindfulness from './Screens/DiscoverScreens/Mindfulness';
import './index.css';
import PodomoroTechnique from './Screens/DiscoverScreens/PodomoroTechnique';
import ViewMedal from '@Screens/ViewTasks';
import { NavBar } from '@Components/NavBarComponent';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
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
        path: 'calendar',
        element: <CalendarScreen />
      },
      {
        path: 'discover',
        element: <DiscoverScreen />,
      },
      {
        path: 'set-goals',
        element: <SetGoals />
      },
      {
        path: 'eisenhower-matrix',
        element: <EisenhowerMatrix />
      },
      {
        path: 'podomoro-technique',
        element: <PodomoroTechnique />
      },
      {
        path: 'important-dates',
        element: <ImportantDates />
      },
      {
        path: 'planification-environment',
        element: <PlanificationEnvironment />
      },
      {
        path: 'Mindfulness',
        element: <Mindfulness />
      },
      {
        path: 'profile',
        element: <ProfileScreen />
      },
      {
        path: 'medal/:id',
        element: <ViewMedal />
      }
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
