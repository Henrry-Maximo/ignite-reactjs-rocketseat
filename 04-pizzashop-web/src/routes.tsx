import { createBrowserRouter } from 'react-router';

import { AppLayout } from './pages/_layout/app';
import { AuthLayout } from './pages/_layout/auth';
import { Dashboard } from './pages/app/dashboard';
import { SignIn } from './pages/auth/sign-in';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-ing',
        element: <SignIn />,
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
