import { setupWorker } from 'msw/browser';

import { env } from '@/env';

export const worker = setupWorker();

// Apenas quando for chamado, aí os mocks entraram em ação
export async function enableMSW() {
  if (env.MODE !== 'test') {
    return;
  }

  await worker.start();
}
