import { test, expect } from "@playwright/test";

test.describe("Stratega Academy Homepage", () => {
  test("loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Stratega Academy/);
  });

  test("displays hero section with headline", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Formamos a líderes");
  });

  test("navigation links are visible", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("header");
    await expect(nav.getByText("Programas")).toBeVisible();
    await expect(nav.getByText("Metodología")).toBeVisible();
    await expect(nav.getByText("Docentes")).toBeVisible();
    await expect(nav.getByText("Eventos")).toBeVisible();
  });

  test("hero CTA buttons are present", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Explorar programas")).toBeVisible();
    await expect(page.getByText("Contactar admisiones")).toBeVisible();
  });

  test("lead form section is accessible", async ({ page }) => {
    await page.goto("/");
    await page.getByText("Solicita información").scrollIntoViewIfNeeded();
    await expect(page.getByText("Solicita información")).toBeVisible();
    await expect(page.locator("#lead-name")).toBeVisible();
    await expect(page.locator("#lead-email")).toBeVisible();
    await expect(page.locator("#lead-phone")).toBeVisible();
  });

  test("faq accordion expands on click", async ({ page }) => {
    await page.goto("/");
    await page.getByText("Preguntas sobre admisiones").scrollIntoViewIfNeeded();
    const firstQuestion = page.getByText("¿Qué requisitos necesito para aplicar?");
    await firstQuestion.click();
    await expect(page.getByText("Buscamos perfiles con vocación pública")).toBeVisible();
  });
});
