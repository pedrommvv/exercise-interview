import Page from './page'

export class MenuPage extends Page {
  get navBar() {
    return $(
      'a[data-testid="dcp-shopnav-main_92412837-4ba7-409a-bde4-62a8d50f9ce5-link"]'
    )
  }

  get productCollection() {
    return $(
      'a[data-testid="shopnav-flyout-collection-items-c37978e0-8ce2-45c0-a302-9b7360f55213"]'
    )
  }

  get carsCollection() {
    return $(
      'a[data-testid="shopnav-flyout-collection-items-c37978e0-8ce2-45c0-a302-9b7360f55213"]'
    )
  }

  get fashionBeautyCollection() {
    return $(
      'a[data-testid="shopnav-flyout-collection-items-c37978e0-8ce2-45c0-a302-9b7360f55213"]'
    )
  }

  get watchesCollection() {
    return $(
      'a[data-testid="shopnav-flyout-collection-items-c37978e0-8ce2-45c0-a302-9b7360f55213"]'
    )
  }

  get menWatch() {
    return $(
      'a[data-testid="shopnav-flyout-collection-items-d48a1ba9-4bcb-4c3b-b24b-d7a11be04251"]'
    )
  }

  menuItemElement(menuItem) {
    return $(`a[data-testid=${menuItem}]`)
  }

  login(username, password) {
    this.inputUsername.setValue(username)
    this.inputPassword.setValue(password)
    this.btnSubmit.click()
  }

  selectMenu(menuItem) {
    this.menuItemElement(menuItem).waitForDisplayed(10000)
    this.menuItemElement(menuItem).waitForClickable()
    this.menuItemElement(menuItem).click()
  }

  open() {
    this.navBar.click()
  }
}

export const menuPage = new MenuPage()
