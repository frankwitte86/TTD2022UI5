"use strict"
const { wdi5 } = require('wdio-ui5-service');
const MainPage = require('../../pageobjects/main.page');
const CategoryPage = require('../../pageobjects/category.page');
const ProductPage = require('../../pageobjects/product.page');
const ShoppingCartPage = require('../../pageobjects/shoppingcart.page');
const CheckOutPageItems = require('../../pageobjects/checkout.items.page');
const CheckOutPagePaymentType = require('../../pageobjects/checkout.paymenttype.page');
const CheckOutPageCreditCard = require('../../pageobjects/checkout.creditcard.page');
const CheckOutPageInvoiceAdress = require('../../pageobjects/checkout.invoice.page');
const CheckOutPageDeliveryType = require('../../pageobjects/checkout.delivery.page');
const CheckOutPageShippingAddress = require('../../pageobjects/checkout.shippingaddress.page');
const CheckOutPageOverview = require('../../pageobjects/checkout.overview.page');
const OrderCompletedPage = require('../../pageobjects/checkout.completed');

describe('Shopping Cart - Credit Card Flow', () => {

    it('Open Shopping Cart app', async () => {
        browser.maximizeWindow();
        expect(await MainPage.getTextWelcomeTextSelector()).toEqual("Welcome to the Shopping Cart");
    })

    it('Select an Portable DVD and verify the specifications', async () => {
        expect(await MainPage.getTitleCategoryAccessoiresSelector()).toEqual("Accessories");
        await MainPage.pressCategoryAccessoiresSelector();
        expect(await CategoryPage.getTitlePortableDVD()).toEqual("10\" Portable DVD player");
        await CategoryPage.pressPortableDVD();
    })

    it('Verify the Product specifications on the Product Detail Screen', async () => {
        expect(await ProductPage.getTextProductHeaderTitle()).toEqual("10\" Portable DVD player");
    })

    it('Add Portable DVD to the Shopping Cart', async () => {
        await ProductPage.pressAddToShoppingCartButton();
    })

    it('Open the Shopping Cart', async () => {
        await MainPage.pressShoppingCartIcon();
    })

    it('Verify the content of the Shopping Cart', async () => {
        await ShoppingCartPage.pressEnlargeArrowIconSelector();
        expect(await ShoppingCartPage.getTextTitleShoppingCart()).toEqual("Shopping Cart");
        expect(await ShoppingCartPage.getTextStatusPortableDVDInShoppingCart()).toEqual("Available");
        expect(await ShoppingCartPage.getStateStatusPortableDVDInShoppingCart()).toEqual("Success");
    })

    it('Check Grand Total Shopping Cart and proceed to Check Out', async () => {
        expect(await ShoppingCartPage.getTextTotalPriceShoppingCart()).toEqual("Total: 449,99 EUR");
        await ShoppingCartPage.pressProceedButtonShoppingCart();
    })

    it('Verify and Proceed Checkout Page - Items', async () => {
        expect(await CheckOutPageItems.getCheckOutPageTitle()).toEqual("Checkout");
        expect(await CheckOutPageItems.getTextCheckOutPortableDVD()).toEqual('10" Portable DVD player');
        await CheckOutPageItems.pressNextStepButton();
    })

    it('Verify and Proceed Checkout Page - PaymentType', async () => {
        expect(await CheckOutPagePaymentType.getTextCreditCardButton()).toEqual("Credit Card")
        await CheckOutPagePaymentType.pressNextButton();
    })

    it('Verify and Proceed Checkout Page - Credit Card Details', async () => {
        await CheckOutPageCreditCard.enterTextCreditCardDetails("Joris Kellendonk", "1234-4567-8910-1112", "666", "01/2025")
        await CheckOutPageCreditCard.pressNextStepButton();
    })

    it('Verify and Proceed Checkout Page - Invoice Address', async () => {
        await CheckOutPageInvoiceAdress.enterTextInvoiceAddress("Stadionplein 1", "Nijmegen", "6060", "Netherlands", "Demotext")

        //Select different Delivery Address Option
        await CheckOutPageInvoiceAdress.pressDifferentAddressCheckBoxSelector();
        expect(await CheckOutPageInvoiceAdress.getSelecteddifferentAddressCheckBox()).toBeTruthy();

        await CheckOutPageInvoiceAdress.pressNextStepButton();
    })

    it('Verify and Proceed Checkout Page - Delivery Address', async () => {
        await CheckOutPageShippingAddress.enterTextShippingAddress("Rijzathe", "de Meern", "6060", "Netherlands", "Other Delivery Address")
        await CheckOutPageShippingAddress.pressNextStepButton();
    })

    it('Verify and Proceed Checkout Page - Delivery Type Standard', async () => {
        await CheckOutPageDeliveryType.pressStandardDeliveryButton();
        await CheckOutPageDeliveryType.pressNextStepButton();
    })

    it('Verify and Cancel - Overview Page', async () => {
        await CheckOutPageOverview.presscancelButton();
        await CheckOutPageOverview.pressCancelButtonPopUp();
    })

    it('Return to Shop', async () => {
        expect(await MainPage.getTextWelcomeTextSelector()).toEqual("Welcome to the Shopping Cart");
    })
})