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
const CheckOutPageOverview = require('../../pageobjects/checkout.overview.page');
const OrderCompletedPage = require('../../pageobjects/checkout.completed');


describe('Shopping Cart - Lot of UI5 checks test', () => {

    it('Open Shopping Cart app', async () => {
        browser.maximizeWindow();
        expect(await MainPage.getTextWelcomeTextSelector()).toEqual("Welcome to the Shopping Cart");
    })

    it('Select an Portable DVD and verify the specifications', async () => {
        expect(await MainPage.getTitleCategoryAccessoiresSelector()).toEqual("Accessories");
        await MainPage.pressCategoryAccessoiresSelector();
        expect(await CategoryPage.getTitlePortableDVD()).toEqual("10\" Portable DVD player");
        expect(await CategoryPage.getnumberPortableDVD()).toEqual("449,99");
        expect(await CategoryPage.getnumberUnitPortableDVD()).toEqual("EUR");
        expect(await CategoryPage.getIconPortableDVD()).toEqual("./localService/mockdata/images/HT-2001.jpg");
        expect(await CategoryPage.getTextStatePortableDVD()).toEqual("Available");
        expect(await CategoryPage.getStatePortableDVD()).toEqual("Success");
        expect(await CategoryPage.getTextCompareLinkPortableDVD()).toEqual("Compare");
        expect(await CategoryPage.getActiveTextCompareLinkPortableDVD()).toBeTruthy();
        await CategoryPage.pressPortableDVD();
    })

    it('Verify the Product specifications on the Product Detail Screen', async () => {
        expect(await ProductPage.getTextProductHeaderTitle()).toEqual("10\" Portable DVD player");
        expect(await ProductPage.getTitleProductDetailsPortableDVDSelector()).toEqual("10\" Portable DVD player");
        expect(await ProductPage.getNumberProductDetailsPortableDVDSelector()).toEqual("449,99");
        expect(await ProductPage.getNumberUnitProductDetailsPortableDVDSelector()).toEqual("EUR");
        expect(await ProductPage.getTextProductDetailPortableDVDStatusSelector()).toEqual("Available");
        expect(await ProductPage.getStateProductDetailPortableDVDStatusSelector()).toEqual("Success");
        expect(await ProductPage.getTitlePortableDVDSupplier()).toEqual("Supplier");
        expect(await ProductPage.getTextPortableDVDSupplier()).toEqual("Titanium");
        expect(await ProductPage.getTitlePortableDVDDescription()).toEqual("Description");
        expect(await ProductPage.getTextPortableDVDDescription()).toEqual("10\" LCD Screen, storage battery holds up to 8 hours");
        expect(await ProductPage.getTitlePortableDVDWeight()).toEqual("Weight");
        expect(await ProductPage.getTextPortableDVDWeight()).toEqual("0.84 KG");
        expect(await ProductPage.getTitlePortableDVDWMeasures()).toEqual("Measures");
        expect(await ProductPage.getTextPortableDVDMeasures()).toEqual("24 cm, 19.5 cm, 29 cm");
        expect(await ProductPage.getSrcProductImage()).toEqual("./localService/mockdata/images/HT-2001.jpg");
    })

    it('Verify the image pop up', async () => {
        await ProductPage.pressProductImage();
        expect(await ProductPage.getImageSrcLargePopUpImage()).toEqual("./localService/mockdata/images/HT-2001.jpg");
        expect(await ProductPage.getTitleLargePopUpImage()).toEqual('10" Portable DVD player');
        await ProductPage.pressPopUpCloseButton();
    })

    it('Add Portable DVD to the Shopping Cart', async () => {
        expect(await ProductPage.getTextAddToShoppingCartButton()).toEqual("Add to Cart");
        expect(await ProductPage.getVisibleAddToShoppingCartButton()).toBeTruthy();
        expect(await ProductPage.getEnabledAddToShoppingCartButton()).toBeTruthy();
        await ProductPage.pressAddToShoppingCartButton();
    })

    it('Open the Shopping Cart', async () => {
        expect(await MainPage.getSrcShoppingCartIcon()).toEqual("sap-icon://cart");
        expect(await MainPage.getBlockedShoppingCartIcon()).toBeFalsy();
        expect(await MainPage.getVisibleShoppingCartIcon()).toBeTruthy();
        await MainPage.pressShoppingCartIcon();
    })

    it('Verify the content of the Shopping Cart', async () => {
        await ShoppingCartPage.pressEnlargeArrowIconSelector();
        expect(await ShoppingCartPage.getTextTitleShoppingCart()).toEqual("Shopping Cart");
        expect(await ShoppingCartPage.getTextTitleItemsInShoppingCart()).toEqual("Items in Shopping Cart");
        expect(await ShoppingCartPage.getTitlePortableDVDInShoppingCart()).toEqual('10" Portable DVD player');
        expect(await ShoppingCartPage.getNumberPortableDVDInShoppingCart()).toEqual("449,99");
        expect(await ShoppingCartPage.getNumberUnitPortableDVDInShoppingCart()).toEqual("EUR");
        expect(await ShoppingCartPage.getIconPortableDVDInShoppingCart()).toEqual("./localService/mockdata/images/HT-2001.jpg");
        expect(await ShoppingCartPage.getIntroPortableDVDInShoppingCart()).toEqual("1 x");
        expect(await ShoppingCartPage.getTextStatusPortableDVDInShoppingCart()).toEqual("Available");
        expect(await ShoppingCartPage.getStateStatusPortableDVDInShoppingCart()).toEqual("Success");
    })

    it('Verify Save for Later Functionality', async () => {
        expect(await ShoppingCartPage.getTextSaveForLaterLink()).toEqual("Save for Later")
        expect(await ShoppingCartPage.getActiveSaveForLaterLink()).toBeTruthy();
        expect(await ShoppingCartPage.getVisibleSaveForLaterLink()).toBeTruthy();
        expect(await ShoppingCartPage.getBlockedSaveForLaterLink()).toBeFalsy();
        expect(await ShoppingCartPage.getNoDataTextItemsSavedForLater()).toEqual("No items saved for later");
        expect(await ShoppingCartPage.getNoDataTextItemsSavedForLater()).toBeTruthy();
        await ShoppingCartPage.pressSaveForLaterLink();
        expect(await ShoppingCartPage.getTextTotalPriceShoppingCart()).toEqual("Total: 0,00 EUR")
        expect(await ShoppingCartPage.getTextAddToShoppingCartLink()).toEqual("Add to Shopping Cart")
        expect(await ShoppingCartPage.getActiveAddToShoppingCartLink()).toBeTruthy();
        expect(await ShoppingCartPage.getVisibleAddToShoppingCartLink()).toBeTruthy();
        await ShoppingCartPage.pressAddToShoppingCartLink();
    })

    it('Check Grand Total Shopping Cart and proceed to Check Out', async () => {
        expect(await ShoppingCartPage.getTextTotalPriceShoppingCart()).toEqual("Total: 449,99 EUR");
        await ShoppingCartPage.pressProceedButtonShoppingCart();
    })

    it('Verify and Proceed Checkout Page - Items', async () => {
        expect(await CheckOutPageItems.getCheckOutPageTitle()).toEqual("Checkout");
        expect(await CheckOutPageItems.getStepCountCheckoutFlow()).toEqual(2);
        expect(await CheckOutPageItems.getTextCheckOutPortableDVD()).toEqual('10" Portable DVD player');
        expect(await CheckOutPageItems.getNumberCheckOutPortableDVD()).toEqual("449,99");
        expect(await CheckOutPageItems.getUnitCheckOutPortableDVD()).toEqual("EUR");
        expect(await CheckOutPageItems.getSrcImageCheckOutPortableDVD()).toEqual("./localService/mockdata/images/HT-2001.jpg");
        expect(await CheckOutPageItems.getTextGrandTotal()).toEqual("Total: 449,99 EUR");
        expect(await CheckOutPageItems.getTextNextStepButton()).toEqual("Step 2");
        expect(await CheckOutPageItems.getEnabledNextStepButton()).toBeTruthy();
        await CheckOutPageItems.pressNextStepButton();
    })

    it('Verify and Proceed Checkout Page - PaymentType', async () => {
        expect(await CheckOutPagePaymentType.getTextCheckOutPagePayment()).toEqual("We accept all major credit cards with no additional charging. Bank transfer and cash on delivery are only possible for inland deliveries. For those, we will charge additional 2.99 EUR. Orders payed with bank transfer, will be shipped direcly after the payment is received.")
        expect(await CheckOutPagePaymentType.getTextBankTransferButton()).toEqual("Bank Transfer")
        await CheckOutPagePaymentType.pressBankTransferButton();
        expect(await CheckOutPagePaymentType.getTextCashOnDeliveryButton()).toEqual("Cash on Delivery")
        await CheckOutPagePaymentType.pressCashOnDeliveryButton();
        expect(await CheckOutPagePaymentType.getTextCreditCardButton()).toEqual("Credit Card")
        await CheckOutPagePaymentType.pressCreditCardButton();
        expect(await CheckOutPagePaymentType.getTextNextButton()).toEqual("Step 3")
        await CheckOutPagePaymentType.pressNextButton();
    })

    it('Verify and Proceed Checkout Page - Credit Card Details', async () => {
        expect(await CheckOutPageCreditCard.getTextCardHoldersNameDescriptionText()).toEqual("Cardholder's Name")
        expect(await CheckOutPageCreditCard.getRequiredCardHoldersNameDescriptionText()).toBeTruthy();
        expect(await CheckOutPageCreditCard.getTextCardNumber()).toEqual("Card Number")
        expect(await CheckOutPageCreditCard.getRequiredCardNumber()).toBeTruthy();
        expect(await CheckOutPageCreditCard.getTextControlDigits()).toEqual("Security Code")
        expect(await CheckOutPageCreditCard.getRequiredControlDigits()).toBeTruthy();
        expect(await CheckOutPageCreditCard.getTextExpirationDate()).toEqual("Expiration Date (MM/YYYY)")
        expect(await CheckOutPageCreditCard.getRequiredExpirationDate()).toBeFalsy();
        await CheckOutPageCreditCard.enterTextCreditCardDetails("Joris Kellendonk", "1234-4567-8910-1112", "666", "01/2025")
        await CheckOutPageCreditCard.pressNextStepButton();
    })

    it('Verify and Proceed Checkout Page - Invoice Address', async () => {
        expect(await CheckOutPageInvoiceAdress.getSelecteddifferentAddressCheckBox()).toBeFalsy();
        await CheckOutPageInvoiceAdress.pressDifferentAddressCheckBoxSelector();
        expect(await CheckOutPageInvoiceAdress.getSelecteddifferentAddressCheckBox()).toBeTruthy();
        await CheckOutPageInvoiceAdress.pressDifferentAddressCheckBoxSelector();
        expect(await CheckOutPageInvoiceAdress.getSelecteddifferentAddressCheckBox()).toBeFalsy();
        await CheckOutPageInvoiceAdress.enterTextInvoiceAddress("Stadionplein 1", "Nijmegen", "6060", "Netherlands", "Demotext")
        await CheckOutPageInvoiceAdress.pressNextStepButton();
    })

    it('Verify and Proceed Checkout Page - Delivery Type Standard', async () => {
        expect(await CheckOutPageDeliveryType.getTextDeliveryTypes()).toEqual("Standard delivery time is 5 workdays. During high-season sales, please allow one additional day. Express delivery is delivered within 36 hours. For express delivery on workdays, we charge a service fee of 5.49 EUR, for a express delivery on holidays, the service fee is 8,00 EUR. Express delivery is only available for inland deliveries. For deliveries abroud, please check the specific conditions.")
        await CheckOutPageDeliveryType.pressStandardDeliveryButton();
        await CheckOutPageDeliveryType.pressExpressDeliveryButton();
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