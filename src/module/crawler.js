const http = require('https')
class Crawler {
  constructor(options) {
    this.options = options
  }
  start() {
    return new Promise((resolve, reject) => {
      const req = http.request(
        this.options.url,
        {
          method: this.options.method || 'get',
          headers: this.options.headers || {},
        },
        (res) => {
          let chunks = []
          res.on('data', (c) => chunks.push(c))
          res.on('end', () => {
            let result = JSON.parse(Buffer.concat(chunks).toString('utf-8'))
            if (result) resolve(result)
            else reject('ERROR_HTTP')
          })
        }
      )
      req.end()
    })
  }
}

module.exports = {
  Crawler,
}
