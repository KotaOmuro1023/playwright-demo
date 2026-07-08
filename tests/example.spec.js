const { test, expect } = require('@playwright/test');

test('RPAシミュレーション：GoogleからYouTubeを検索して動画を再生', async ({ page }) => {
  // 1. Googleを開く
  await page.goto('https://www.google.com/');

  // 2. 検索ボックスに「Youtube」と入力してEnterキーを押す
  await page.fill('textarea[name="q"]', 'Youtube');
  await page.keyboard.press('Enter');

  // 3. 検索結果から「YouTube」のリンクをクリックする
  await page.click('h3:has-text("YouTube")');

  // 4. YouTubeの画面が開き、上部の検索ボックスが表示されるまで待つ
  await page.waitForSelector('input#search');

  // 5. YouTube内で「キタニタツヤ 月光」と入力してEnterキーを押す
  await page.fill('input#search', 'キタニタツヤ 月光');
  await page.keyboard.press('Enter');

  // 6. 検索結果の動画リンク（一番上）をクリックする
  await page.waitForSelector('ytd-video-renderer');
  await page.click('ytd-video-renderer a#video-title');

  // 7. 再生されるのを少し待つ（結果確認用）
  await page.waitForTimeout(5000);
});
