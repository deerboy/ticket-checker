const puppeteer = require('puppeteer');

async function getTitle(author) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(`https://nhentai.net/artist/${author}`);
  const element = await page.$('.gallery[data-tags*="6346"] .caption');
  const title = await page.evaluate((elm) => {
    return elm.textContent;
  }, element);

  await browser.close();
  return title;
}

module.exports = { getTitle };
