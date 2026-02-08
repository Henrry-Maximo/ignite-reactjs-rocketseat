import { setupWorker } from 'msw/browser';

import { env } from '@/env';

import { registerRestaurantMock } from './register-restaurant-mock';
import { signInMock } from './sign-in-mock';

export const worker = setupWorker(signInMock, registerRestaurantMock);

// Apenas quando for chamado, aí os mocks entraram em ação
export async function enableMSW() {
  if (env.MODE !== 'test') {
    return;
  }

  await worker.start();
}
