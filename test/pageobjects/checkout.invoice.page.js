
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPageInvoiceAdress extends Page {
    /**
     * define selectors using getter methods
     */
    // /**
    get inputAddressSelector() {
        const inputAddressSelector = {
            selector: {
                id: "container-cart---checkoutView--invoiceAddressAddress",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputAddressSelector
    }

    get inputCitySelector() {
        const inputCitySelector = {
            selector: {
                id: "container-cart---checkoutView--invoiceAddressCity",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputCitySelector
    }

    get inputZipCodeSelector() {
        const inputZipCodeSelector = {
            selector: {
                id: "container-cart---checkoutView--invoiceAddressZip",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputZipCodeSelector
    }

    get inputCountrySelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--invoiceAddressCountry",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get inputNoteSelector() {
        return {
            selector: {
                controlType: "sap.m.TextArea",
                viewId: "container-cart---checkoutView",
                labelFor: {
                    text: "Note"
                },
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get differentAddressCheckBoxSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--differentDeliveryAddress",
                interaction: {
                    idSuffix: "CbBg"
                }
            }
        }
    }

    get nextStepButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--invoiceStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async enterTextInputAddressSelector(address) {
        await browser.asControl(this.inputAddressSelector).enterText(address);
    }

    async enterTextInputCitySelector(city) {
        await browser.asControl(this.inputCitySelector).enterText(city);
    }

    async enterTextinputZipCodeSelector(zippCode) {
        await browser.asControl(this.inputZipCodeSelector).enterText(zippCode);
    }

    async enterTextInputCountrySelector(country) {
        await browser.asControl(this.inputCountrySelector).enterText(country);
    }

    async enterTextInputNoteSelector(note) {
        await browser.asControl(this.inputNoteSelector).enterText(note);
    }

    async pressDifferentAddressCheckBoxSelector() {
        await browser.asControl(this.differentAddressCheckBoxSelector).press();
    }

    async pressNextStepButton() {
        await browser.asControl(this.nextStepButtonSelector).firePress();
    }

    async getSelecteddifferentAddressCheckBox() {
        return await browser.asControl(this.differentAddressCheckBoxSelector).getSelected();
    }

    async enterTextInvoiceAddress(address, city, zippCode, country, note) {
        await browser.asControl(this.inputAddressSelector).enterText(address);
        await browser.asControl(this.inputCitySelector).enterText(city);
        await browser.asControl(this.inputZipCodeSelector).enterText(zippCode);
        await browser.asControl(this.inputCountrySelector).enterText(country);
        await browser.asControl(this.inputNoteSelector).enterText(note);
    }

    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPageInvoiceAdress();
