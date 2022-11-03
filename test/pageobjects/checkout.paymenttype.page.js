
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPagePaymentType extends Page {
    /**
     * define selectors using getter methods
     */
    // /**


    get checkOutPageTitleSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--paymentTypeStep"
            }
        }
    }

    get textCheckOutPageSelector() {
        return {
            selector: {
                controlType: "sap.m.Text",
                viewId: "container-cart---checkoutView",
                i18NText: {
                    propertyName: "text",
                    key: "checkoutPaymentText"
                }
            }
        }
    }

    get creditCardButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--payViaCC-button"
            }
        }
    }

    get bankTransferButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--payViaBank-button"
            }
        }
    }

    get cashOnDeliveryButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--payViaCOD-button"
            }
        }
    }

    get nextButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--paymentTypeStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async getCheckOutPageTitle() {
        return await browser.asControl(this.checkOutPageTitleSelector).getTitle();
    }

    async getTextCheckOutPagePayment() {
        return await browser.asControl(this.textCheckOutPageSelector).getText();
    }

    async getTextCreditCardButton() {
        return await browser.asControl(this.creditCardButtonSelector).getText();
    }

    async getTextBankTransferButton() {
        return await browser.asControl(this.bankTransferButtonSelector).getText();
    }

    async getTextCashOnDeliveryButton() {
        return await browser.asControl(this.cashOnDeliveryButtonSelector).getText();
    }

    async pressCreditCardButton() {
        await browser.asControl(this.creditCardButtonSelector).press();
    }

    async pressBankTransferButton() {
        await browser.asControl(this.bankTransferButtonSelector).press();
    }

    async pressCashOnDeliveryButton() {
        await browser.asControl(this.cashOnDeliveryButtonSelector).press();
    }

    async getTextNextButton() {
        return await browser.asControl(this.nextButtonSelector).getText();
    }

    async pressNextButton() {
        await browser.asControl(this.nextButtonSelector).firePress();
    }

    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPagePaymentType();
