import { test, expect } from '@playwright/test';

test.describe('Lovable Badge Visibility', () => {
  test('should not be visible on the home page', async ({ page }) => {
    await page.goto('/');
    
    // Check for common selectors used to hide the badge
    const badgeSelectors = [
      '#lovable-badge',
      '[class*="lovable-badge"]',
      '[id*="lovable-badge"]',
      'iframe[src*="lovable"]'
    ];

    for (const selector of badgeSelectors) {
      const badge = page.locator(selector);
      // Even if the element exists in the DOM, it should not be visible
      // according to the CSS rules applied (display: none !important)
      await expect(badge).not.toBeVisible();
    }
  });

  test('should not be visible in iframes', async ({ page }) => {
    await page.goto('/');
    
    // Get all iframes on the page
    const frames = page.frames();
    
    for (const frame of frames) {
      // Check if any element matching badge selectors exists inside the frame and is visible
      const badgeSelectors = [
        '#lovable-badge',
        '[class*="lovable-badge"]',
        '[id*="lovable-badge"]'
      ];

      for (const selector of badgeSelectors) {
        const badge = frame.locator(selector);
        // It shouldn't be visible in any frame
        await expect(badge).not.toBeVisible();
      }
    }
  });
});
