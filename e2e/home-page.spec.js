// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });

  test("Has browser tab title", async ({ page }) => {
    await expect(page).toHaveTitle("Vite + React");
  });

  test("Has Heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Home Page" })
    ).toBeVisible();
  });

  test.skip("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    await page.getByRole("link", { name: "Get started" }).click();

    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });
});
