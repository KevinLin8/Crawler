const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    // 自动打开游览器
    // await driver.get('https://om.tencent.com/attendances/check_out/20075876')
    // // 找到id为kw的输入框-输入关键字-按回车
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
