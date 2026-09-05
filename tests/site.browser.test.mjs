import { expect, test } from "@playwright/test";

test("home and archive navigation reproduce the intended content states", async ({ page }) => {
  const browserErrors = [];
  page.on("pageerror", (error) => browserErrors.push(error.message));

  await page.goto("/");
  await expect(page).toHaveTitle(/オカルト研究会へようこそ/);
  await expect(page.locator("#page-context")).toHaveText("当ブログについて");
  await expect(page.locator(".article-card")).toHaveCount(1);
  await expect(page.locator(".article-card h2")).toContainText("はじめまっぴー");

  await page.getByRole("link", { name: "UMA", exact: true }).first().click();
  await expect(page.locator("#page-context")).toHaveText("カテゴリ：UMA");
  await expect(page.locator(".article-card")).toHaveCount(3);
  await expect(page.locator(".article-card").first()).toContainText("俺も見た見た！");

  await page.locator("#archive-select").selectOption("2011-10");
  await expect(page.locator("#page-context")).toHaveText("2011年10月の記事");
  await expect(page.locator(".article-card")).toHaveCount(4);
  expect(browserErrors).toEqual([]);
});

test("search, comments, and local submissions work end to end", async ({ page }) => {
  await page.goto("/");
  await page.locator("#search-input").fill("聖剣");
  await page.getByRole("button", { name: "検索" }).click();
  await expect(page.locator("#results-summary")).toContainText("3件");

  const commentButton = page.locator(".comment-toggle").first();
  await commentButton.click();
  await expect(commentButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(".comments").first()).toBeVisible();

  await page.locator("#open-submission").click();
  await page.locator("#report-name").fill("テスト調査員");
  await page.locator("#report-category").selectOption("怪談");
  await page.locator("#report-title").fill("夜の部室から聞こえる音");
  await page.locator("#report-body").fill("誰もいないはずの部室から椅子を引く音がしました。\n再調査をお願いします。");
  await page.getByRole("button", { name: "この内容で投稿" }).click();

  await expect(page.locator(".article-card h2")).toHaveText("夜の部室から聞こえる音");
  await page.reload();
  await expect(page.locator(".article-card h2")).toHaveText("夜の部室から聞こえる音");
});

test.describe("responsive layout", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("mobile view remains contained and keeps primary controls usable", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#search-input")).toBeVisible();
    await expect(page.locator(".main-navigation")).toBeVisible();
    await expect(page.locator(".article-card")).toBeVisible();

    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth
    }));
    expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
  });
});
