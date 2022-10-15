
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrderCompletedPage extends Page {
    /**
     * define selectors using getter methods
     */
    // /**

    get orderConfirmationTextSelector() {
        const orderConfirmationTextSelector = {
            selector: {
                controlType: "sap.m.FormattedText",
                viewId: "container-cart---orderCompletedView",
                properties: {
                    htmlText: '<h3 class="sapMTitle sapMTitleStyleH3">Thank you for your order!</h3><p><strong>Your order number: 20171941</strong></p><p>You will receive an e-mail confirmation shortly.</p><p>When the shipment is ready, you will also get an e-mail notification.</p><p>Want to stay informed?</p><p>Please subscribe to our monthly newsletter. Send a mail to <em><a href="#" class="sapMLnk">newsletter@openui5isgreat.corp</a></em>.</p>'
                }
            }
        }
        return orderConfirmationTextSelector
    }

    get returnToShopButtonSelector() {
        const returnToShopButtonSelector = {
            selector: {
                id: "container-cart---orderCompletedView--returnToShopButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
        return returnToShopButtonSelector
    }

    get enlargeButtonSelector() {
        const enlargeButtonSelector = {
            selector: {
                id: "container-cart---app--layout-midForward-img"
            }
        }
        return enlargeButtonSelector
    }



    async getTextOrderConfirmation() {
        const textOrderCormfirmation = await browser.asControl(this.orderConfirmationTextSelector).getHtmlText();
        return await textOrderCormfirmation;
    }

    async pressReturnToShopButton() {
        await browser.asControl(this.returnToShopButtonSelector).firePress();
    }

    async pressEnlargeButton() {
        await browser.asControl(this.enlargeButtonSelector).firePress();
    }






    open() {
        return super.open('index.html');
    }
}

module.exports = new OrderCompletedPage();
