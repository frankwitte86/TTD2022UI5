
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
        return {
            selector: {
                id: "container-cart---checkoutView--cashOnDeliveryName",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get inputLastNameSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--cashOnDeliveryLastName",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get inputPhoneNumberSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--cashOnDeliveryPhoneNumber",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get inputEmailAdressSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--cashOnDeliveryEmail",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get nextStepButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--cashOnDeliveryStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

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
