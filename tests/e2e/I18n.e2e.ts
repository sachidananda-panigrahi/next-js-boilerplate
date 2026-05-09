import { expect, test } from '@playwright/test';

test.describe('I18n', () => {
  test.describe('Language Switching', () => {
    test('should switch language from English to French using dropdown and verify text on the homepage', async ({
      page,
    }) => {
      await page.goto('/');

      await expect(
        page.locator('main').getByRole('heading', {
          name: 'Starter code for your Next.js project with Tailwind CSS',
        }),
      ).toBeVisible();

      await page.getByLabel('Change language').selectOption('fr');

      await expect(
        page.locator('main').getByRole('heading', {
          name: 'Code de démarrage pour Next.js avec Tailwind CSS',
        }),
      ).toBeVisible();
    });
  });
});
