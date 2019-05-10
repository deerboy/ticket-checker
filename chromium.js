const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')

async function getItemCount () {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless
  })

  const page = await browser.newPage()


  await page.goto(`https://tiketore.com/events/artist/11114`)
  const itemElements = await page.$$('#tickets .list-ticket')
  await browser.close()
  return itemElements.length.toString()
}

module.exports = { getItemCount }
