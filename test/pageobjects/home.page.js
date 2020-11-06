import Page from './page'
import assert from 'assert'

export class HomePage extends Page {
  get navigationLogin() {
    return $('a[data-testid="navigation-login-ciam"]')
  }

  get agreeCookies() {
    return $('#layer-text button')
  }

  dismissCookies() {
    try {
      this.agreeCookies.waitForDisplayed()
    } catch (err) {
      console.log(err)
    } finally {
      this.agreeCookies.click()
      // firefox reloads the page after closing the cookies.
      // I hate this solution, with more time I think i could find a better solution.
      if (browser.capabilities.browserName === 'firefox') {
        browser.pause(10000)
      }
    }
  }

  login(username, password) {
    this.inputUsername.setValue(username)
    this.inputPassword.setValue(password)
    this.btnSubmit.click()
  }

  open() {
    return super.open('')
  }
}

export const homePage = new HomePage()
