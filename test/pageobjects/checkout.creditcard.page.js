
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPageCreditCard extends Page {
    /**
     * define selectors using getter methods
     */
    // /**

    get getCardHoldersNameSelector() {
        return {
            selector: {
                controlType: "sap.m.Label",
                viewId: "container-cart---checkoutView",
                i18NText: {
                    propertyName: "text",
                    key: "checkoutCreditCardName"
                }
            }
        }
    }

    get getCardNumberSelector() {
        return {
            selector: {
                controlType: "sap.m.Label",
                viewId: "container-cart---checkoutView",
                i18NText: {
                    propertyName: "text",
                    key: "checkoutCreditCardCardNo"
                }
            }
        }
    }


    get inputCardHolderName() {
        return {
            selector: {
                id: "container-cart---checkoutView--creditCardHolderName",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get inputCardNumber() {
        return {
            selector: {
                id: "container-cart---checkoutView--creditCardNumber",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get getControlDigitsSelector() {
        return {
            selector: {
                controlType: "sap.m.Label",
                viewId: "container-cart---checkoutView",
                i18NText: {
                    propertyName: "text",
                    key: "checkoutCreditCardCode"
                },
                interaction: {
                    idSuffix: "bdi"
                }
            }
        }
    }

    get expirationDateSelector() {
        return {
            selector: {
                controlType: "sap.m.Label",
                viewId: "container-cart---checkoutView",
                i18NText: {
                    propertyName: "text",
                    key: "checkoutCreditCardExpiration"
                },
                interaction: {
                    idSuffix: "bdi"
                }
            }
        }
    }

    get inputControlDigits() {
        return {
            selector: {
                id: "container-cart---checkoutView--creditCardSecurityNumber",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get inputExpirationDate() {
        return {
            selector: {
                id: "container-cart---checkoutView--creditCardExpirationDate",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get nextStepButton() {
        return {
            selector: {
                id: "container-cart---checkoutView--creditCardStep-nextButton",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async getTextCardHoldersNameDescriptionText() {
        return await browser.asControl(this.getCardHoldersNameSelector).getText();
    }

    async getRequiredCardHoldersNameDescriptionText() {
        return await browser.asControl(this.getCardHoldersNameSelector).getRequired();
    }

    async getTextCardNumber() {
        return await browser.asControl(this.getCardNumberSelector).getText();
    }

    async getRequiredCardNumber() {
        return await browser.asControl(this.getCardNumberSelector).getRequired();
    }

    async getTextControlDigits() {
        return await browser.asControl(this.getControlDigitsSelector).getText();
    }

    async getRequiredControlDigits() {
        return await browser.asControl(this.getControlDigitsSelector).getRequired();
    }

    async getTextExpirationDate() {
        return await browser.asControl(this.expirationDateSelector).getText();
    }

    async getRequiredExpirationDate() {
        return await browser.asControl(this.expirationDateSelector).getRequired();
    }

    async enterTextInputCardHolderName(name) {
        await browser.asControl(this.inputCardHolderName).enterText(name);
    }

    async enterTextInputCardNumber(number) {
        await browser.asControl(this.inputCardNumber).enterText(number);
    }

    async enterTextInputControlDigits(controlDigits) {
        await browser.asControl(this.inputControlDigits).enterText(controlDigits);
    }

    async enterTextInputExpirationDate(expirationDate) {
        await browser.asControl(this.inputExpirationDate).enterText(expirationDate);
    }

    async pressNextStepButton() {
        await browser.asControl(this.nextStepButton).firePress()
    }

    async enterTextCreditCardDetails(name, number, controlDigits, expirationDate) {
        await browser.asControl(this.inputCardHolderName).enterText(name);
        await browser.asControl(this.inputCardNumber).enterText(number);
        await browser.asControl(this.inputControlDigits).enterText(controlDigits);
        await browser.asControl(this.inputExpirationDate).enterText(expirationDate);
    }

    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPageCreditCard();
