
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutCashOnDelivery extends Page {
    /**
     * define selectors using getter methods
     */
    // /**


    get inputFirstNameSelector() {
        const inputFirstNameSelector = {
            selector: {
                id: "container-cart---checkoutView--cashOnDeliveryName",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputFirstNameSelector
    }

    get inputLastNameSelector() {
        const inputLastNameSelector = {
            selector: {
                id: "container-cart---checkoutView--cashOnDeliveryLastName",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputLastNameSelector
    }

    get inputPhoneNumberSelector() {
        const inputPhoneNumberSelector = {
            selector: {
                id: "container-cart---checkoutView--cashOnDeliveryPhoneNumber",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputPhoneNumberSelector
    }

    get inputEmailAdressSelector() {
        const inputEmailAdressSelector = {
            selector: {
                id: "container-cart---checkoutView--cashOnDeliveryEmail",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputEmailAdressSelector
    }

    get nextStepButtonSelector() {
        const nextStepButtonSelector = {
            selector: {
                id: "container-cart---checkoutView--cashOnDeliveryStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
        return nextStepButtonSelector
    }

    async pressNextStepButton() {
        await browser.asControl(this.nextStepButtonSelector).firePress()
    }

    async enterTextAccountDetails(firstname, lastname, phonenumber, email) {
        await browser.asControl(this.inputFirstNameSelector).enterText(firstname);
        await browser.asControl(this.inputLastNameSelector).enterText(lastname);
        await browser.asControl(this.inputPhoneNumberSelector).enterText(phonenumber);
        await browser.asControl(this.inputEmailAdressSelector).enterText(email);
    }


    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutCashOnDelivery();
