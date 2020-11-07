import Page from './page'

export class BasketPage extends Page {
  get title() {
    return $('h5')
  }

  get proceedButton() {
    return $('button[data-testid="co-func-footer-forward"]')
  }

  get productQuantityInput() {
    return $('input[data-testid="utils-product-quantity-input"]')
  }

  get getPriceBasket() {
    return $('span[data-testid="dcp-co-totals-total"]')
  }

  getNumberItems() {
    this.productQuantityInput.waitForDisplayed()
    return this.productQuantityInput.getValue()
  }

  goToAddressDelivery() {
    this.proceedButton.waitForDisplayed()
    this.proceedButton.click()
  }

  getCurrentPriceBasket() {
    this.getPriceBasket.waitForDisplayed()
    const price = this.getPriceBasket.getText()
    return parseFloat(price.substring(1))
  }
}

export const basketPage = new BasketPage()
