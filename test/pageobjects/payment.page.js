import Page from './page'

export class PaymentPage extends Page {
  get creditCardRadio() {
    return $(
      'label[data-testid="dcp-co-payment-modes_options-CREDITCARD-label"]'
    )
  }
  get visaCardRadio() {
    return $('label[data-testid="dcp-co-payment-modes_options-visa-label"]')
  }
  get masterCardRadio() {
    return $(
      'label[data-testid="dcp-co-payment-modes_options-mastercard-label"]'
    )
  }
  get americanExpressRadio() {
    return $('label[data-testid="dcp-co-payment-modes_options-amex-label"]')
  }

  get paypalRadio() {
    return $('label[data-testid="dcp-co-payment-modes_options-paypal-label"]')
  }

  get continue() {
    return $('button[data-testid="co-func-header-forward"]')
  }

  payPaypal() {
    this.paypalRadio.waitForDisplayed()
    this.paypalRadio.click()
    this.continue.click()
  }
}

export const paymentPage = new PaymentPage()
