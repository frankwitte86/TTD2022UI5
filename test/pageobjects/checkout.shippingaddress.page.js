
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPageShippingAddress extends Page {
    /**
     * define selectors using getter methods
     */
    // /**


    get inputDeliveryAddressSelector() {
        const inputDeliveryAddressSelector = {
            selector: {
                id: "container-cart---checkoutView--deliveryAddressAddress",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputDeliveryAddressSelector
    }

    get inputDeliveryCitySelector() {
        const inputDeliveryCitySelector = {
            selector: {
                id: "container-cart---checkoutView--deliveryAddressCity",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputDeliveryCitySelector
    }

    get inputDeliveryZipCodeSelector() {
        const inputDeliveryZipCodeSelector = {
            selector: {
                id: "container-cart---checkoutView--deliveryAddressZip",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputDeliveryZipCodeSelector
    }

    get inputDeliveryCountrySelector() {
        const inputDeliveryCountrySelector = {
            selector: {
                id: "container-cart---checkoutView--deliveryAddressCountry",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputDeliveryCountrySelector
    }

    get inputDeliveryNoteSelector() {
        const inputDeliveryNoteSelector = {
            selector: {
                controlType: "sap.m.TextArea",
                viewId: "container-cart---checkoutView",
                bindingPath: {
                    path: "",
                    propertyPath: "/DeliveryAddress/Note"
                },
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return inputDeliveryNoteSelector
    }

    get nextStepButtonSelector() {
        const nextStepButtonSelector = {
            selector: {
                id: "container-cart---checkoutView--deliveryAddressStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
        return nextStepButtonSelector
    }


    async enterTextShippingAddress(address, city, zipCode, country, note) {
        await browser.asControl(this.inputDeliveryAddressSelector).enterText(address);
        await browser.asControl(this.inputDeliveryCitySelector).enterText(city);
        await browser.asControl(this.inputDeliveryZipCodeSelector).enterText(zipCode);
        await browser.asControl(this.inputDeliveryCountrySelector).enterText(country);
        await browser.asControl(this.inputDeliveryNoteSelector).enterText(note);
    }

    async pressNextStepButton() {
        await browser.asControl(this.nextStepButtonSelector).firePress();

    }










    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPageShippingAddress();
