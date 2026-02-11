import { test } from '@playwright/test';

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Pizza Shop' }).click();
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click();

  await page.getByLabel('Nome').fill('Rocket Pizza');
  await page.getByLabel('Descrição').fill('Another Description');

  await page.getByRole('button', { name: 'Salvar' }).click();

  // aguardar qualquer requisição que esteja sendo processada
  await page.waitForLoadState('networkidle');

  const toast = page.getByText('Perfil atualizado com sucesso!');

  expect(toast).toBeVisible();

  await page.getByRole('button', { name: 'Close' }).click();

  await page.waitForTimeout(250);

  expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible();
});
