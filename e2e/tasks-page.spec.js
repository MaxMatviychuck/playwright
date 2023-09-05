// @ts-check

const { test, expect } = require("@playwright/test");

test.describe("Tasks Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/tasks");
  });

  test("Has browser tab title", async ({ page }) => {
    await expect(page).toHaveTitle("Vite + React");
  });

  test("it should open/close new task modal", async ({ page }) => {
    await page.locator("id=add-task-btn").click();
    await expect(page.locator("id=new-task-form")).toBeVisible();

    await page.locator("button", { hasText: "Cancel" }).click();
    await expect(page.locator("id=new-task-form")).not.toBeVisible();

    await page.locator("id=add-task-btn").click();
    await expect(page.locator("id=new-task-form")).toBeVisible();
    await page.locator("id=backdrop").click({
      force: true,
      position: {
        x: 20,
        y: 20,
      },
    });
    await expect(page.locator("id=new-task-form")).not.toBeVisible();
  });

  test("should create a new task", async ({ page }) => {
    await page.locator("id=add-task-btn").click();
    await expect(page.locator("id=new-task-form")).toBeVisible();

    await page.locator("id=title").type("New Task");
    await page.locator("id=summary").type("New Summary");
    await page
      .locator("id=new-task-form")
      .getByRole("button", { name: /add task/i })
      .click();

    await expect(page.locator("id=task")).toBeVisible();
    await expect(
      page.locator("id=task").getByRole("heading", { name: /new task/i })
    ).toBeVisible();

    await expect(
      page.locator("id=task").getByText(/new summary/i)
    ).toBeVisible();
  });

  test("should validate user input", async ({ page }) => {
    await page.locator("id=add-task-btn").click();

    await page
      .locator("id=new-task-form")
      .getByRole("button", { name: /add task/i })
      .click();

    await expect(
      page.locator("id=new-task-form").getByText(/please provide values for/i)
    ).toBeVisible();
  });

  test("should filter tasks", async ({ page }) => {
    await page.locator("id=add-task-btn").click();

    await page.locator("id=title").type("New Task");
    await page.locator("id=summary").type("New Summary");

    await page.locator("id=category").selectOption("urgent");

    await page
      .locator("id=new-task-form")
      .getByRole("button", { name: /add task/i })
      .click();

    await expect(page.getByLabel(/urgent/i)).toBeVisible();

    await page.locator("id=filter").selectOption("low");
    await expect(page.getByText(/no tasks found/i)).toBeVisible();
    await expect(page.getByLabel(/urgent/i)).not.toBeVisible();
  });

  test("should add multiple tasks", async ({ page }) => {
    await page.locator("id=add-task-btn").click();
    await page.locator("id=title").type("First Task");
    await page.locator("id=summary").type("First Task Summary");
    await page.locator("id=category").selectOption("urgent");
    await page
      .locator("id=new-task-form")
      .getByRole("button", { name: /add task/i })
      .click();

    await page.locator("id=add-task-btn").click();
    await page.locator("id=title").type("Second Task");
    await page.locator("id=summary").type("Second Task Summary");
    await page.locator("id=category").selectOption("important");
    await page
      .locator("id=new-task-form")
      .getByRole("button", { name: /add task/i })
      .click();

    await page.locator("id=add-task-btn").click();
    await page.locator("id=title").type("Third Task");
    await page.locator("id=summary").type("Third Task Summary");
    await page.locator("id=category").selectOption("low");
    await page
      .locator("id=new-task-form")
      .getByRole("button", { name: /add task/i })
      .click();

    await expect(page.locator("id=task")).toHaveCount(3);
    await expect(page.locator("id=task").getByRole("paragraph")).toHaveText([
      /first task/i,
      /second task/i,
      /third task/i,
    ]);
  });
});
