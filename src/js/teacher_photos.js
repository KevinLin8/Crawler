const http = require('https')
const cheerio = require('cheerio')

// 创建请求对象
const HOST = 'https://www.kancloud.cn/pillys/qianduan'
;(function () {
  let req = http.request(HOST + '/2049676', (res) => {
    let chunks = []
    res.on('data', (c) => chunks.push(c))
    res.on('end', () => {
      let html = Buffer.concat(chunks).toString('utf-8') //处理二进制数据
      const $ = cheerio.load(html)
      $('#main .seo .catalog ul li a').each(async (index, item) => {
        const id = item.attribs.href
        if (!id) {
          return ture
        }
        await HttpRequest(id).then((res) => console.log(res))
        console.log('index:', index, '--------------- id:', id)
        const text = item.children[0].data
      })
    })
  })
  req.end()
})()

const HttpRequest = function (id) {
  id = '/' + id
  return new Promise((resolve, reject) => {
    let req = http.request(HOST + id, (res) => {
      let chunks = []
      res.on('data', (c) => chunks.push(c))
      res.on('end', () => {
        let html = Buffer.concat(chunks).toString('utf-8') //处理二进制数据
        const $ = cheerio.load(html)
        const text = $('#main .seo .content').text()
        if (text) {
          resolve(text)
        } else {
          reject('GET TEXT ERROR')
        }
      })
    })
    req.end()
  })
}

// HttpRequest('/2049676').then((res) => console.log(res))
