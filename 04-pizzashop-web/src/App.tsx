import './globals.css';

import { RouterProvider } from 'react-router';

import { router } from './routes';

export function App() {
  return (
    <RouterProvider router={router} />

    // <div className="flex h-screen items-center justify-center">
    //   <Button>Enviar</Button>
    // </div>
  );
}
