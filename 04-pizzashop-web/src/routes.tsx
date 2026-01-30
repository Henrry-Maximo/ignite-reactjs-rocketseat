import { createBrowserRouter } from 'react-router';

import { AppLayout } from './pages/_layout/app';
import { AuthLayout } from './pages/_layout/auth';
import { Dashboard } from './pages/app/dashboard/dashboard';
import { Orders } from './pages/app/orders/orders';
import { SignIn } from './pages/auth/sign-in';
import { SignUp } from './pages/auth/sign-up';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
]);

/*
  ## Exemplo de código utilizando a estrutura para montar as rotas

  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
*/
