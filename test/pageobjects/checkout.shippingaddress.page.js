
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
        return {
            selector: {
                id: "container-cart---checkoutView--deliveryAddressAddress",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get inputDeliveryCitySelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--deliveryAddressCity",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get inputDeliveryZipCodeSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--deliveryAddressZip",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get inputDeliveryCountrySelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--deliveryAddressCountry",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get inputDeliveryNoteSelector() {
        return {
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
    }

    get nextStepButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--deliveryAddressStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

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
