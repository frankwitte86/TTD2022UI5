
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPageDeliveryType extends Page {
    /**
     * define selectors using getter methods
     */
    // /**
    get standardDeliveryButtonSelector() {
        return {
            selector: {
                controlType: "sap.m.Button",
                viewId: "container-cart---checkoutView",
                properties: {
                    text: "Standard"
                }
            }
        }
    }

    get expressDeliveryButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--expressDelivery-button"
            }
        }
    }

    get nextStepButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--deliveryTypeStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    get deliveryTextSelector() {
        return {
            selector: {
                controlType: "sap.m.Text",
                viewId: "container-cart---checkoutView",
                i18NText: {
                    propertyName: "text",
                    key: "checkoutDeliveryTypeText"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async pressStandardDeliveryButton() {
        await browser.asControl(this.standardDeliveryButtonSelector).press();
    }

    async pressExpressDeliveryButton() {
        await browser.asControl(this.expressDeliveryButtonSelector).press();
    }

    async pressNextStepButton() {
        await browser.asControl(this.nextStepButtonSelector).firePress();
    }

    async getTextDeliveryTypes() {
        return await browser.asControl(this.deliveryTextSelector).getText();
    }





    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPageDeliveryType();
