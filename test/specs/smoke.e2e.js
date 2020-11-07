import { homePage } from '../pageobjects/home.page'
import { menuPage } from '../pageobjects/menu.page'
import { productList } from '../pageobjects/list.page'
import { productPage } from '../pageobjects/product.page'
import { basketPage } from '../pageobjects/basket.page'
import { addressPage } from '../pageobjects/address.page'
import { paymentPage } from '../pageobjects/payment.page'
import { orderPage } from '../pageobjects/order.page'

import assert from 'assert'

import {
  MAIN_MENU,
  QUANTITY_INPUT,
  GUEST_EMAIL,
  PRODUCT_PRICE,
  CUSTOMER_COUNTRY
} from '../constants/test-data'

describe('Smoke Suite', function () {
  it('Order a Men watch flow', () => {
    homePage.open()
    homePage.dismissCookies()
    menuPage.open()
    menuPage.selectMenu(MAIN_MENU.watches[0])
    menuPage.selectMenu(MAIN_MENU.watches[1].men)
    productList.openItem('watch, Classic Tonneau')
    let productPrice = productPage.getCurrentPrice()
    assert.strictEqual(
      productPrice,
      PRODUCT_PRICE,
      'Single Product price does not match'
    )
    productPage.addToBasket(QUANTITY_INPUT)
    productPage.proceed()

    const numberItems = basketPage.getNumberItems()
    assert.strictEqual(
      numberItems,
      QUANTITY_INPUT,
      'Product quantity does not match'
    )
    productPrice = basketPage.getCurrentPriceBasket()
    assert.strictEqual(
      productPrice,
      PRODUCT_PRICE * Number(QUANTITY_INPUT),
      'Multiple Product price does not match'
    )

    basketPage.goToAddressDelivery()
    addressPage.orderAsGuest(GUEST_EMAIL)
    addressPage.fillForm()
    addressPage.proceedPayment()
    paymentPage.payPaypal()
    const userData = orderPage.getData()
    assert.strictEqual[
      (userData,
      ['Pedro Ferreira', CUSTOMER_COUNTRY, GUEST_EMAIL],
      'Customer data does not match')
    ]
  })
})
