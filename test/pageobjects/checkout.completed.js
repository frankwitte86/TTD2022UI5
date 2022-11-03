
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
        return {
            selector: {
                controlType: "sap.m.FormattedText",
                viewId: "container-cart---orderCompletedView",
                properties: {
                    htmlText: '<h3 class="sapMTitle sapMTitleStyleH3">Thank you for your order!</h3><p><strong>Your order number: 20171941</strong></p><p>You will receive an e-mail confirmation shortly.</p><p>When the shipment is ready, you will also get an e-mail notification.</p><p>Want to stay informed?</p><p>Please subscribe to our monthly newsletter. Send a mail to <em><a href="#" class="sapMLnk">newsletter@openui5isgreat.corp</a></em>.</p>'
                }
            }
        }
    }

    get returnToShopButtonSelector() {
        return {
            selector: {
                id: "container-cart---orderCompletedView--returnToShopButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async getTextOrderConfirmation() {
        return await browser.asControl(this.orderConfirmationTextSelector).getHtmlText();
    }

    async pressReturnToShopButton() {
        await browser.asControl(this.returnToShopButtonSelector).firePress();
    }

    open() {
        return super.open('index.html');
    }
}

module.exports = new OrderCompletedPage();
