const { getTitle } = require('./chromium')
const { URL } = require('url')

module.exports = async function (req, res) {
  const author = new URL(req.url, 'https://echecker.deerboy.now.sh').searchParams.get('author')

  res.statusCode = 200
  res.setHeader('Content-Type', `text/json`)
  res.end(author ? await getTitle(author) : null)
}
