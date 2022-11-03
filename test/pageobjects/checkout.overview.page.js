
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPageOverview extends Page {
    /**
     * define selectors using getter methods
     */
    // /**

    get confirmButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--submitOrder",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    get cancelButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--cancelOrder",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    get confirmationButtonPopUpSelector() {
        return {

            selector: {
                controlType: "sap.m.Button",
                properties: {
                    text: "Yes"
                },
                searchOpenDialogs: true
            }
        }
    }

    get confirmationButtonCancelPopUpSelector() {
        return {
            selector: {
                controlType: "sap.m.Button",
                properties: {
                    text: "No"
                },
                searchOpenDialogs: true,
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async pressconfirmButton() {
        await browser.asControl(this.confirmButtonSelector).firePress();
    }

    async pressconfirmButtonPopUp() {
        await browser.asControl(this.confirmationButtonPopUpSelector).firePress();
    }

    async presscancelButton() {
        await browser.asControl(this.cancelButtonSelector).firePress();
    }

    async pressCancelButtonPopUp() {
        await browser.asControl(this.confirmationButtonPopUpSelector).firePress();
    }

    async pressconfirmButtonPopUp() {
        await browser.asControl(this.confirmationButtonPopUpSelector).firePress();
    }

    async pressconfirmButtonCancelPopUp() {
        await browser.asControl(this.confirmationButtonCancelPopUpSelector).firePress();
    }

    async getTextDeliveryTypes() {
        return await browser.asControl(this.deliveryTextSelector).getText();
    }





    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPageOverview();
