
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

    get confirmationButtonPopUpSelector() {
        const confirmationButtonPopUpSelector = {

            selector: {
                controlType: "sap.m.Button",
                properties: {
                    text: "Ja"
                },
                searchOpenDialogs: true
            }
        }
        return confirmationButtonPopUpSelector
    }

    async pressconfirmButton() {
        await browser.asControl(this.confirmButtonSelector).firePress();
    }

    async pressconfirmButtonPopUp() {
        await browser.asControl(this.confirmationButtonPopUpSelector).firePress();
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
