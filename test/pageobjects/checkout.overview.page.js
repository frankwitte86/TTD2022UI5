
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
        const confirmButtonSelector = {
            selector: {
                id: "container-cart---checkoutView--submitOrder",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
        return confirmButtonSelector
    }

    get cancelButtonSelector() {
        const cancelButtonSelector = {
            selector: {
                id: "container-cart---checkoutView--cancelOrder",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
        return cancelButtonSelector
    }

    get confirmationButtonPopUpSelector() {
        const confirmationButtonPopUpSelector = {

            selector: {
                controlType: "sap.m.Button",
                properties: {
                    text: "Yes"
                },
                searchOpenDialogs: true
            }
        }
        return confirmationButtonPopUpSelector
    }

    get confirmationButtonCancelPopUpSelector() {
        const confirmationButtonCancelPopUpSelector = {
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
        return confirmationButtonCancelPopUpSelector
    }




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
        const textDeliveryTypes = await browser.asControl(this.deliveryTextSelector).getText();
        return await textDeliveryTypes;
    }





    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPageOverview();
