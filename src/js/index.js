const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

;(async function after_work() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.get('https://om.tencent.com/attendances/check_out/20075876')

    // await driver
    //   .findElement(By.id('kw'))
    //   .sendKeys('前端大神-蔡俊杰', Key.RETURN)
    // // 验证是否成功
    // await driver.wait(until.titleIs('前端大神-蔡俊杰_百度搜索'), 1000)
  } finally {
    // 关闭游览器
    // await driver.quit()
  }
})()

// const str = '09:56'
// let time = new Date('2023-4-12-' + str)
// console.log(time)
// console.log(time.getTime())
