import Page from './page'
import assert from 'assert'

export class OrderPage extends Page {
  get headline() {
    return $(`//h2[contains(text(),'Your order data')]`)
  }

  get name() {
    return $(
      'div[data-testid="dcp-co-order-data"] div[data-ng-bind-html="::paymentAddress.formattedAddress"] br:nth-of-type(1)'
    )
  }

  get country() {
    return $(
      'div[data-testid="dcp-co-order-data"] div[data-ng-bind-html="::paymentAddress.formattedAddress"] br:nth-of-type(4)'
    )
  }
  get emailAddress() {
    return $(
      'div[data-testid="dcp-co-order-data"] div[data-ng-bind-html="::paymentAddress.formattedAddress"] br:nth-of-type(5)'
    )
  }

  getData() {
    this.headline.waitForDisplayed()
    assert.strictEqual(
      this.headline.getText(),
      'Your order data',
      'Order Page is not loaded'
    )
    return [this.name, this.country, this.emailAddress]
  }
}

export const orderPage = new OrderPage()
