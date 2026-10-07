import { test, expect } from "@playwright/test";

test.describe("Signup Page - Engineered Calm System", () => {
  test("enforces 5 test IDs, native bubble suppression, 13px copper error, and zero radius", async ({ page }) => {
    await page.goto("/signup");

    // 1. Test all 5 mandatory test IDs
    const nameInput = page.getByTestId("signup-name");
    const emailInput = page.getByTestId("signup-email");
    const passwordInput = page.getByTestId("signup-password");
    const confirmInput = page.getByTestId("signup-confirm");
    const submitButton = page.getByTestId("signup-submit");

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(confirmInput).toBeVisible();
    await expect(submitButton).toBeVisible();

    // 2. Assert zero border-radius on all elements
    for (const el of [nameInput, emailInput, passwordInput, confirmInput, submitButton]) {
      const radius = await el.evaluate((node) => getComputedStyle(node).borderRadius);
      expect(radius).toBe("0px");
    }

    // 3. Trigger submit with empty fields -> Assert native validation tooltips/bubbles are completely suppressed
    // (noValidate is on form, e.preventDefault() called, custom errors rendered instead)
    await submitButton.click();

    // 4. Assert custom 13px inline error text appears with color rgb(158, 71, 57) (#9E4739)
    const errorMessages = page.locator('[aria-live="polite"]');
    await expect(errorMessages.first()).toBeVisible();

    const firstError = errorMessages.first();
    const errorColor = await firstError.evaluate((el) => getComputedStyle(el).color);
    expect(errorColor).toBe("rgb(158, 71, 57)");

    const errorFontSize = await firstError.evaluate((el) => getComputedStyle(el).fontSize);
    expect(errorFontSize).toBe("13px");

    // 5. Test password mismatch handling
    await nameInput.fill("Alexander Vance");
    await emailInput.fill("vance@domain.com");
    await passwordInput.fill("secure12345");
    await confirmInput.fill("differentPassword");
    await submitButton.click();

    await expect(page.getByText("Passwords do not match.")).toBeVisible();
    const confirmBorderColor = await confirmInput.evaluate((el) => getComputedStyle(el).borderColor);
    expect(confirmBorderColor).toBe("rgb(158, 71, 57)");
  });
});
