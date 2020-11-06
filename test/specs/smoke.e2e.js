import { homePage } from '../pageobjects/home.page'
import { menuPage } from '../pageobjects/menu.page'
import { productList } from '../pageobjects/list.page'
import { productPage } from '../pageobjects/product.page'
import { basketPage } from '../pageobjects/basket.page'

import { MAIN_MENU, QUANTITY_INPUT } from '../constants/test-data'

describe('First Suite', function () {
  it('First smoke test draft without assertions', () => {
    homePage.open()
    homePage.dismissCookies()
    menuPage.open()
    menuPage.selectMenu(MAIN_MENU.watches[0])
    menuPage.selectMenu(MAIN_MENU.watches[1].men)
    productList.openItem('watch, Classic Tonneau')
    productPage.addToBasket(QUANTITY_INPUT)
    basketPage.openAddressDelivery()
    basketPage.orderAsGuest()
    basketPage.fillForm()
  })
})
