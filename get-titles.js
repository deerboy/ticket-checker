const { getTitle } = require('./chromium')

const authors = [
  'tachibana-omina',
  'chiba-shuusaku',
  'crimson',
  'yoshiura-kazuya'
];

(async function (req, res) {
  const titles = []

  for (let i = 0; i < authors.length; i++) {
    titles.push({
      title: await getTitle(authors[i]),
      author: authors[i]
    })
  }

  console.log(titles)
})()
