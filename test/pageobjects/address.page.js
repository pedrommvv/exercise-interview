import Page from './page'
import { POSTAL_CODE, PAUSE_SHORT } from '../constants/test-data'

export class AddressPage extends Page {
  get guestEmailInput() {
    return $('input[data-testid="co-order-process-login-guest-user-email"]')
  }

  get guestEmailButton() {
    return $('button[data-testid="co-order-process-login-guest-user-cta"]')
  }

  orderAsGuest(guestEmail) {
    this.guestEmailInput.waitForDisplayed()
    this.guestEmailInput.setValue(guestEmail)
    this.guestEmailButton.click()
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

  get proceedButton() {
    return $('button[data-testid="co-func-footer-forward"]')
  }

  fillForm() {
    this.mrRadioInput.waitForDisplayed()
    this.mrRadioInput.click()
    this.firstNameInput.setValue('Pedro')
    this.lastNameInput.setValue('Ferreira')
    this.streetNameInput.setValue('rua das margaritas')
    this.NumberInput.setValue('22')
    this.postCodeInput.setValue(POSTAL_CODE)
    this.townInput.setValue('cascais')
    this.expandCountryDropdown.click()
    browser.pause(PAUSE_SHORT)
    this.countryDropdown('Spain').click()
    this.phoneInput.setValue('911111111')
    browser.pause(PAUSE_SHORT)
    this.proceedButton.click()
  }

  proceedPayment() {
    this.proceedButton.waitForDisplayed()
    this.proceedButton.click()
  }
}

export const addressPage = new AddressPage()
