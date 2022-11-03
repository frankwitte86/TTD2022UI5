
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPageBankTransfer extends Page {
    /**
     * define selectors using getter methods
     */
    // /**

    get nextStepButtonSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--bankAccountStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async pressNextStepButton() {
        await browser.asControl(this.nextStepButtonSelector).firePress()
    }


    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPageBankTransfer();
