import Page from './page'
import { QUANTITY_INPUT, GUEST_EMAIL } from '../constants/test-data'
import assert from 'assert'

export class BasketPage extends Page {
  get title() {
    return $('h5')
  }

  get addressdeliveryButton() {
    return $('button[data-testid="co-func-footer-forward"]')
  }

  get productQuantityInput() {
    return $('input[data-testid="utils-product-quantity-input"]')
  }

  get guestEmailInput() {
    return $('input[data-testid="co-order-process-login-guest-user-email"]')
  }

  get guestEmailButton() {
    return $('button[data-testid="co-order-process-login-guest-user-cta"]')
  }

  get mrRadioInput() {
    return $(
      'label[data-testid="dcp-schema-form-radios-inline_co_payment_address-salutationCode-radio-id-0-label"]'
    )
  }

  get firstNameInput() {
    return $('#co_payment_address-firstName')
  }

  get lastNameInput() {
    return $('#co_payment_address-lastName')
  }

  get streetNameInput() {
    return $('#co_payment_address-line1')
  }

  get NumberInput() {
    return $('#co_payment_address-line2')
  }

  get postCodeInput() {
    return $('#co_payment_address-postalCode')
  }

  get townInput() {
    return $('#co_payment_address-town')
  }

  get expandCountryDropdown() {
    return $(
      'button[data-testid="dcp-schema-form-select_Country-dropdown-toggle"]'
    )
  }
  countryDropdown(country) {
    return $(`//*[contains(text(),'${country}')]`)
  }

  get phoneInput() {
    return $('#co_payment_address-phone')
  }

  get paypalSelection() {
    return $('label[data-testid="dcp-co-payment-modes_options-paypal-label"]')
  }

  get continue() {
    return $('button[data-testid="co-func-header-forward"]')
  }

  get validatefinalorder() {
    return $(`//h2[contains(text(),'Your order data')]`)
  }

  openAddressDelivery() {
    this.addressdeliveryButton.waitForDisplayed()
    this.productQuantityInput.waitForDisplayed()
    assert.strictEqual(
      this.productQuantityInput.getValue(),
      QUANTITY_INPUT,
      'Product quantity does not match'
    )
    this.addressdeliveryButton.click()
  }

  orderAsGuest() {
    this.guestEmailInput.waitForDisplayed()
    this.guestEmailInput.setValue(GUEST_EMAIL)
    this.guestEmailButton.click()
  }

  fillForm() {
    this.mrRadioInput.waitForDisplayed()
    this.mrRadioInput.click()
    this.firstNameInput.setValue('pedro')
    this.lastNameInput.setValue('ferreira')
    this.streetNameInput.setValue('rua das margaritas')
    this.NumberInput.setValue('22')
    this.postCodeInput.setValue('SP2 0FL')
    this.townInput.setValue('cascais')
    this.expandCountryDropdown.click()
    browser.pause(2000)
    this.countryDropdown('Spain').click()
    this.phoneInput.setValue('911111111')
    browser.pause(5000)
    this.addressdeliveryButton.click()
    browser.pause(5000)
    this.paypalSelection.waitForDisplayed()
    this.paypalSelection.click()
    this.continue.click()
    browser.pause(5000)
    this.validatefinalorder.waitForDisplayed()
    assert.strictEqual(
      this.validatefinalorder.getText(),
      'Your order data',
      5000
    )
  }
}

export const basketPage = new BasketPage()
