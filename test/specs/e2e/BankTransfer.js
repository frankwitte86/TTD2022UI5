"use strict"
const { wdi5 } = require('wdio-ui5-service');
const MainPage = require('../../pageobjects/main.page');
const CategoryPage = require('../../pageobjects/category.page');
const ProductPage = require('../../pageobjects/product.page');
const ShoppingCartPage = require('../../pageobjects/shoppingcart.page');
const CheckOutPageItems = require('../../pageobjects/checkout.items.page');
const CheckOutPagePaymentType = require('../../pageobjects/checkout.paymenttype.page');
const CheckOutPageBankTransfer = require('../../pageobjects/checkout.banktransfer.page');
const CheckOutPageInvoiceAdress = require('../../pageobjects/checkout.invoice.page');
const CheckOutPageDeliveryType = require('../../pageobjects/checkout.delivery.page');
const CheckOutPageOverview = require('../../pageobjects/checkout.overview.page');
const OrderCompletedPage = require('../../pageobjects/checkout.completed');

describe('Shopping Cart - Bank Transfer Flow', () => {

    it('Open Shopping Cart app', async () => {
        browser.maximizeWindow();
        expect(await MainPage.getTextWelcomeTextSelector()).toEqual("Welcome to the Shopping Cart");
    })

    it('Select the "Portable DVD" from the "Accessoires" Category', async () => {
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
        await CheckOutPagePaymentType.pressBankTransferButton();
        await CheckOutPagePaymentType.pressNextButton();
    })

    it('Verify and Proceed Checkout Page - Bank Transfer Details', async () => {
        await CheckOutPageBankTransfer.pressNextStepButton();
    })

    it('Verify and Proceed Checkout Page - Invoice Address', async () => {
        await CheckOutPageInvoiceAdress.enterTextInvoiceAddress("Stadionplein 1", "Nijmegen", "6060", "Netherlands", "Demotext")
        await CheckOutPageInvoiceAdress.pressNextStepButton();
    })

    it('Verify and Proceed Checkout Page - Delivery Type Standard', async () => {
        await CheckOutPageDeliveryType.pressStandardDeliveryButton();
        await CheckOutPageDeliveryType.pressNextStepButton();
    })

    it('Verify and Confirm - Overview Page', async () => {
        await CheckOutPageOverview.pressconfirmButton();
        await CheckOutPageOverview.pressconfirmButtonPopUp();
    })

    it('Verify Order Confirmation Page', async () => {
        expect(await OrderCompletedPage.getTextOrderConfirmation()).toEqual('<h3 class="sapMTitle sapMTitleStyleH3">Thank you for your order!</h3><p><strong>Your order number: 20171941</strong></p><p>You will receive an e-mail confirmation shortly.</p><p>When the shipment is ready, you will also get an e-mail notification.</p><p>Want to stay informed?</p><p>Please subscribe to our monthly newsletter. Send a mail to <em><a href="#" class="sapMLnk">newsletter@openui5isgreat.corp</a></em>.</p>');
    })

    it('Return to Shop', async () => {
        await OrderCompletedPage.pressReturnToShopButton();
        expect(await MainPage.getTextWelcomeTextSelector()).toEqual("Welcome to the Shopping Cart");
    })
})