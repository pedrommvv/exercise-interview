import Page from './page'

export class ProductPage extends Page {
  get title() {
    return $('h2[data-testid="pdp-shortdescription-header__articlename"]')
  }

  get quantityInput() {
    return $('input[data-testid="utils-product-quantity-input"]')
  }

  get basketButton() {
    return $('button[data-testid="pdp-buy-box-add-to-basket-add"]')
  }

  get shoppingBasket() {
    return $('button[data-testid="pdp-buy-box-add-to-basket-got-to-cart"]')
  }

  addToBasket(quantity) {
    this.title.waitForDisplayed()
    this.quantityInput.waitForDisplayed()
    this.quantityInput.setValue(quantity)
    this.basketButton.click()
    this.shoppingBasket.click()
  }

  open() {
    this.navBar.click()
  }
}

export const productPage = new ProductPage()
