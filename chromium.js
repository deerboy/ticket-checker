const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer')

async function getTitle (author) {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless
  })

  const page = await browser.newPage()

  await page.goto(`https://nhentai.net/artist/${author}`)
  const titleElement = await page.$('.gallery[data-tags*="6346"] .caption')
  const linkElement = await page.$('.gallery[data-tags*="6346"] a')
  const imageElement = await page.$('.gallery[data-tags*="6346"] img')
  const result = await page.evaluate((titleElm, linkElm, imageElm) => {
    return {
      title: titleElm.textContent,
      link: 'https://nhentai.net' + linkElm.getAttribute('href'),
      image: imageElm.getAttribute('src')
    }
  }, titleElement, linkElement, imageElement)

  await browser.close()
  return JSON.stringify(result)
}

module.exports = { getTitle }
