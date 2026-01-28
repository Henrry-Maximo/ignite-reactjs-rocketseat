import './globals.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';

import { router } from './routes';

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>

    // <div className="flex h-screen items-center justify-center">
    //   <Button>Enviar</Button>
    // </div>
  );
}

/*
  # Helmet
  - Serve para passar metatags para os elementos da página, podendo identificar a página passando o valor desejado que será exibido de acordo com a rota
  - React Helmet Async é um fork do React Helmet
  - Permite alterar as metatags do React, como o título de cada página.
*/
