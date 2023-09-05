const { test, expect } = require("@playwright/test");

const ERROR_INPUT_BORDER_COLOR = "rgb(255, 102, 208)";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/about");
  });

  test("should submit the form", async ({ page }) => {
    await page.locator("id=message").type("Message");
    await page.locator("id=name").type("Name");
    await page.locator("id=email").type("test@mail.com");

    await page.getByRole("button").filter({ hasText: "Send Message" }).click();
    await expect(page.locator("id=contact-btn-submit")).toHaveText(/sending/i);
    await expect(page.locator("id=contact-btn-submit")).toBeDisabled();
  });

  test("should validate the form input", async ({ page }) => {
    await page.getByRole("button").filter({ hasText: "Send Message" }).click();
    await expect(page.locator("id=contact-btn-submit")).not.toBeDisabled();
    await expect(page.locator("id=contact-btn-submit")).not.toHaveText(
      /sending/i
    );

    await page.locator("id=message").focus();
    await page.locator("id=message").blur();

    await expect(page.locator("id=message")).toHaveCSS(
      "border-color",
      ERROR_INPUT_BORDER_COLOR
    );

    await page.locator("id=name").focus();
    await page.locator("id=name").blur();

    await expect(page.locator("id=name")).toHaveCSS(
      "border-color",
      ERROR_INPUT_BORDER_COLOR
    );

    await page.locator("id=email").focus();
    await page.locator("id=email").blur();

    await expect(page.locator("id=email")).toHaveCSS(
      "border-color",
      ERROR_INPUT_BORDER_COLOR
    );
  });
});
