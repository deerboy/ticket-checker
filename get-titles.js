const { getItemCount } = require('./chromium')

module.exports = async function (req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', `text/plain`)
  res.end(await getItemCount())
}
