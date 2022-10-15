
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
        const nextStepButtonSelector = {
            selector: {
                id: "container-cart---checkoutView--bankAccountStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
        return nextStepButtonSelector
    }

    async pressNextStepButton() {
        await browser.asControl(this.nextStepButtonSelector).firePress()
    }


    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPageBankTransfer();
