
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
        const getCardHoldersNameSelector = {
            selector: {
                controlType: "sap.m.Label",
                viewId: "container-cart---checkoutView",
                i18NText: {
                    propertyName: "text",
                    key: "checkoutCreditCardName"
                }
            }
        }
        return getCardHoldersNameSelector
    }

    get getCardNumberSelector() {
        const getCardNumberSelector = {
            selector: {
                controlType: "sap.m.Label",
                viewId: "container-cart---checkoutView",
                i18NText: {
                    propertyName: "text",
                    key: "checkoutCreditCardCardNo"
                }
            }
        }
        return getCardNumberSelector
    }


    get inputCardHolderName() {
        const inputCardHolderName = {
            selector: {
                id: "container-cart---checkoutView--creditCardHolderName",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputCardHolderName
    }

    get inputCardNumber() {
        const inputCardNumber = {
            selector: {
                id: "container-cart---checkoutView--creditCardNumber",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputCardNumber
    }


    get getControlDigitsSelector() {
        const getControlDigitsSelector = {
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
        return getControlDigitsSelector
    }

    get expirationDateSelector() {
        const expirationDateSelector = {
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
        return expirationDateSelector
    }

    get inputControlDigits() {
        const inputControlDigits = {
            selector: {
                id: "container-cart---checkoutView--creditCardSecurityNumber",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputControlDigits
    }

    get inputExpirationDate() {
        const inputExpirationDate = {
            selector: {
                id: "container-cart---checkoutView--creditCardExpirationDate",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputExpirationDate
    }

    get nextStepButton() {
        const nextStepButton = {
            selector: {
                id: "container-cart---checkoutView--creditCardStep-nextButton",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return nextStepButton
    }


    async getTextCardHoldersNameDescriptionText() {
        const textCardHoldersName = await browser.asControl(this.getCardHoldersNameSelector).getText();
        return await textCardHoldersName;
    }

    async getRequiredCardHoldersNameDescriptionText() {
        const requiredCardHoldersName = await browser.asControl(this.getCardHoldersNameSelector).getRequired();
        return await requiredCardHoldersName;
    }

    async getTextCardNumber() {
        const textCardNumber = await browser.asControl(this.getCardNumberSelector).getText();
        return await textCardNumber;
    }

    async getRequiredCardNumber() {
        const requiredCardNumber = await browser.asControl(this.getCardNumberSelector).getRequired();
        return await requiredCardNumber;
    }

    async getTextControlDigits() {
        const textControlDigits = await browser.asControl(this.getControlDigitsSelector).getText();
        return await textControlDigits;
    }

    async getRequiredControlDigits() {
        const requiredControlDigits = await browser.asControl(this.getControlDigitsSelector).getRequired();
        return await requiredControlDigits;
    }

    async getTextExpirationDate() {
        const textExpirationDate = await browser.asControl(this.expirationDateSelector).getText();
        return await textExpirationDate;
    }

    async getRequiredExpirationDate() {
        const requiredExpirationDate = await browser.asControl(this.expirationDateSelector).getRequired();
        return await requiredExpirationDate;
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
