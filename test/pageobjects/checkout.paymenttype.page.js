
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
        const getCheckOutPageTitleSelector = {
            selector: {
                id: "container-cart---checkoutView--paymentTypeStep"
            }
        }
        return getCheckOutPageTitleSelector
    }

    get textCheckOutPageSelector() {
        const textCheckOutPageSelector = {
            selector: {
                controlType: "sap.m.Text",
                viewId: "container-cart---checkoutView",
                i18NText: {
                    propertyName: "text",
                    key: "checkoutPaymentText"
                }
            }
        }
        return textCheckOutPageSelector
    }

    get creditCardButtonSelector() {
        const creditCardButtonSelector = {
            selector: {
                id: "container-cart---checkoutView--payViaCC-button"
            }
        }
        return creditCardButtonSelector
    }

    get bankTransferButtonSelector() {
        const bankTransferButtonSelector = {
            selector: {
                id: "container-cart---checkoutView--payViaBank-button"
            }
        }
        return bankTransferButtonSelector
    }

    get cashOnDeliveryButtonSelector() {
        const cashOnDeliveryButtonSelector = {
            selector: {
                id: "container-cart---checkoutView--payViaCOD-button"
            }
        }
        return cashOnDeliveryButtonSelector
    }

    get nextButtonSelector() {
        const nextButtonSelector = {
            selector: {
                id: "container-cart---checkoutView--paymentTypeStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
        return nextButtonSelector
    }


    async getCheckOutPageTitle() {
        const textCheckOutTitle = await browser.asControl(this.checkOutPageTitleSelector).getTitle();
        return await textCheckOutTitle;
    }

    async getTextCheckOutPagePayment() {
        const textCheckOutPayment = await browser.asControl(this.textCheckOutPageSelector).getText();
        return await textCheckOutPayment;
    }

    async getTextCreditCardButton() {
        const textCreditCard = await browser.asControl(this.creditCardButtonSelector).getText();
        return await textCreditCard;
    }

    async getTextBankTransferButton() {
        const textBankTransfer = await browser.asControl(this.bankTransferButtonSelector).getText();
        return await textBankTransfer;
    }

    async getTextCashOnDeliveryButton() {
        const textCash = await browser.asControl(this.cashOnDeliveryButtonSelector).getText();
        return await textCash;
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
        const textNetButton = await browser.asControl(this.nextButtonSelector).getText();
        return await textNetButton;
    }

    async pressNextButton() {
        await browser.asControl(this.nextButtonSelector).firePress();
    }




    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPagePaymentType();
