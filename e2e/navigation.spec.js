const { test, expect } = require("@playwright/test");

test.describe("page navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });

  test("Has 3 nav links with exact text", async ({ page }) => {
    await expect(page.locator("id=header").getByRole("listitem")).toHaveCount(
      3
    );
    await expect(page.locator("id=header").getByRole("listitem")).toHaveText([
      "Home",
      "About",
      "Tasks",
    ]);
  });

  test("Home nav tab should navigate to home page", async ({ page }) => {
    await page
      .locator("id=header")
      .getByRole("listitem")
      .filter({ hasText: "Home" })
      .click();

    await expect(page.getByText(/home page/i)).toBeVisible();
  });

  test("About nav tab should navigate to about page", async ({ page }) => {
    await page
      .locator("id=header")
      .getByRole("listitem")
      .filter({ hasText: "About" })
      .click();

    await expect(page.getByText(/about us/i)).toBeVisible();
  });

  test("Tasks nav tab should navigate to task page", async ({ page }) => {
    await page
      .locator("id=header")
      .getByRole("listitem")
      .filter({ hasText: "Tasks" })
      .click();

    await expect(page.locator("id=add-task-btn")).toBeVisible();
  });
});
