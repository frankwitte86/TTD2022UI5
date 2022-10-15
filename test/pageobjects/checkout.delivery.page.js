
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
        const standardDeliveryButtonSelector = {
            selector: {
                controlType: "sap.m.Button",
                viewId: "container-cart---checkoutView",
                properties: {
                    text: "Standard"
                }
            }
        }
        return standardDeliveryButtonSelector
    }

    get expressDeliveryButtonSelector() {
        const expressDeliveryButtonSelector = {
            selector: {
                id: "container-cart---checkoutView--expressDelivery-button"
            }
        }
        return expressDeliveryButtonSelector
    }

    get nextStepButtonSelector() {
        const nextStepButtonSelector = {
            selector: {
                id: "container-cart---checkoutView--deliveryTypeStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
        return nextStepButtonSelector
    }


    get deliveryTextSelector() {
        const deliveryTextSelector = {
            selector: {
                controlType: "sap.m.Text",
                viewId: "container-cart---checkoutView",
                i18NText: {
                    propertyName: "text",
                    key: "checkoutDeliveryTypeText"
                }
            }
        }
        return deliveryTextSelector
    }

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
        const textDeliveryTypes = await browser.asControl(this.deliveryTextSelector).getText();
        return await textDeliveryTypes;
    }





    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPageDeliveryType();
