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

  get getPrice() {
    return $('span[data-testid="pdp-buy-box-add-to-basket-price"]')
  }

  addToBasket(quantity) {
    this.title.waitForDisplayed()
    this.quantityInput.waitForDisplayed()
    this.quantityInput.setValue(quantity)
  }

  getCurrentPrice() {
    const price = this.getPrice.getText()
    return parseFloat(price.substring(1))
  }

  proceed() {
    this.basketButton.waitForDisplayed()
    this.basketButton.click()
    this.shoppingBasket.waitForDisplayed()
    this.shoppingBasket.click()
  }
}

export const productPage = new ProductPage()
