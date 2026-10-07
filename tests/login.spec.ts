import { test, expect } from "@playwright/test";

test.describe("Login Page - Engineered Calm System", () => {
  test("enforces engineered calm tokens, focus ring, zero border radius, and aria-live", async ({ page }) => {
    await page.goto("/login");

    // 1. Verify mandatory test IDs exist
    const emailInput = page.getByTestId("login-email");
    const passwordInput = page.getByTestId("login-password");
    const submitButton = page.getByTestId("login-submit");

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(submitButton).toBeVisible();

    // 2. Focus on email input and verify computed border-color equals rgb(184, 115, 51) (#B87333)
    await emailInput.focus();
    const emailBorderColor = await emailInput.evaluate((el) => getComputedStyle(el).borderColor);
    expect(emailBorderColor).toBe("rgb(184, 115, 51)");

    // 3. Focus on password input and verify focus border-color equals rgb(184, 115, 51)
    await passwordInput.focus();
    const passBorderColor = await passwordInput.evaluate((el) => getComputedStyle(el).borderColor);
    expect(passBorderColor).toBe("rgb(184, 115, 51)");

    // 4. Assert computed border-radius is 0px on all inputs and submit button
    const emailBorderRadius = await emailInput.evaluate((el) => getComputedStyle(el).borderRadius);
    expect(emailBorderRadius).toBe("0px");

    const passBorderRadius = await passwordInput.evaluate((el) => getComputedStyle(el).borderRadius);
    expect(passBorderRadius).toBe("0px");

    const btnBorderRadius = await submitButton.evaluate((el) => getComputedStyle(el).borderRadius);
    expect(btnBorderRadius).toBe("0px");

    // 5. Assert error summary container possesses aria-live="polite"
    const ariaLiveContainer = page.locator('[aria-live="polite"]');
    await expect(ariaLiveContainer).toBeAttached();
    const ariaLiveAttr = await ariaLiveContainer.getAttribute("aria-live");
    expect(ariaLiveAttr).toBe("polite");

    // 6. Test submission error trigger and error color
    await submitButton.click();
    await expect(ariaLiveContainer).toBeVisible();
    const errorColor = await ariaLiveContainer.evaluate((el) => getComputedStyle(el).color);
    expect(errorColor).toBe("rgb(158, 71, 57)");
  });
});
