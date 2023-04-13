const crawler = require('../module/crawler.js')
let CrawlerResult = new crawler.Crawler({
  url: 'https://api-v2.lingtiku.com/quiz/findQuestions?quizID=5',
})
CrawlerResult.start().then((res) => {
  if (res) console.log(res)
  else console.log('ERROR')
})
