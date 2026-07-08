const { test, expect } = require('@playwright/test');

test('RPAシミュレーション：YouTubeで直接検索', async ({ page }) => {
  // 1. Googleのbot弾きを避けるため、直接YouTubeを開く
  await page.goto('https://www.youtube.com/');

  // 2. YouTubeの画面が開き、上部の検索ボックスが表示されるまで待つ
  await page.waitForSelector('input[name="search_query"]');

  // 3. YouTube内で「キタニタツヤ 月光」と入力してEnterキーを押す
  await page.fill('input[name="search_query"]', 'キタニタツヤ 月光');
  await page.keyboard.press('Enter');

  // 4. 検索結果の動画リンク（一番上）をクリックする
  await page.waitForSelector('ytd-video-renderer');
  await page.click('ytd-video-renderer a#video-title');

  // 5. 再生されるのを少し待つ（結果確認用）
  await page.waitForTimeout(5000);
});
