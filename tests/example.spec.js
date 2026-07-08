const { test, expect } = require('@playwright/test');

test('仕事のシミュレーション：商品ページを開いてカートに追加できるかテスト', async ({ page }) => {
  // 1. Coupa画面を開く代わりに、練習用のECサイトを開く
  await page.goto('https://danube-webshop.herokuapp.com/');

  // 2. 画面が正常に開いたかチェック（AWS連携が動いている状態のイメージ）
  await expect(page).toHaveTitle(/Danube Webshop/);

  // 3. 最初の商品をクリックして詳細を見る
  await page.click('.preview:first-child a');

  // 4. 「カートに入れる」ボタンを押す（画面操作）
  await page.click('button:has-text("Add to cart")');

  // 5. カートの中身に商品が入ったか自動で判定（期待結果の確認）
  const cartBadge = page.locator('.cart-count');
  await expect(cartBadge).toHaveText('1');
});