import Page from './page'

export class ProductList extends Page {
  get title() {
    return $('div[data-testid="pg-grid"] h1')
  }

  productItem(item) {
    return $(`//h3[contains(text(),'${item}')]`)
  }

  openItem(item) {
    this.title.waitForDisplayed()
    this.productItem(item).click()
  }

  open() {
    this.navBar.click()
  }
}

export const productList = new ProductList()
