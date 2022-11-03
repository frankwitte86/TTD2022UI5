
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPageItems extends Page {
    /**
     * define selectors using getter methods
     */
    // /**


    get checkOutPageTitleSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--wizardContentPage-title",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get stepCountSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--shoppingCartWizard-progressNavigator"
            }
        }
    }

    get checkOutTitleItemsSelector() {
        return {
            selector: {
                id: "container-cart---checkoutView--contentsStep",
                interaction: {
                    idSuffix: "Title"
                }
            }
        }
    }

    get textCheckOutPortableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.Text",
                viewId: "container-cart---checkoutView",
                properties: {
                    text: "10\" Portable DVD player"
                }
            }
        }
    }

    get priceCheckOutPortableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectNumber",
                viewId: "container-cart---checkoutView",
                properties: {
                    number: "449,99"
                },
                interaction: {
                    idSuffix: "number"
                }
            }
        }
    }

    get imageCheckOutPortableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.Image",
                viewId: "container-cart---checkoutView",
                properties: {
                    src: {
                        regex: {
                            source: "HT\\-2001\\.jpg"
                        }
                    }
                }
            }
        }
    }

    get grandTotalSelector() {
        return {
            selector: {
                controlType: "sap.m.Text",
                viewId: "container-cart---checkoutView",
                bindingPath: {
                    path: "",
                    propertyPath: "/cartEntries",
                    modelName: "cartProducts"
                }
            }
        }
    }

    get statusCheckOutPortableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectStatus",
                viewId: "container-cart---checkoutView",
                bindingPath: {
                    path: "/cartEntries/HT-2001",
                    propertyPath: "Status",
                    modelName: "cartProducts"
                }
            }
        }
    }

    get nextStepButton() {
        return {
            selector: {
                id: "container-cart---checkoutView--contentsStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async getCheckOutPageTitle() {
        return await browser.asControl(this.checkOutPageTitleSelector).getText();
    }

    async getStepCountCheckoutFlow() {
        return await browser.asControl(this.stepCountSelector).getStepCount();
    }

    async getStepTilesCheckoutFlow() {
        return await browser.asControl(this.stepCountSelector).getStepTitles();
    }

    async getStepIconsCheckoutFlow() {
        return await browser.asControl(this.stepCountSelector).getStepIcons();
    }

    async getTextCheckOutTitleItemsSelector() {
        return await browser.asControl(this.checkOutTitleItemsSelector).getTitle();
    }

    async getIconCheckOutTitleItemsSelector() {
        return await browser.asControl(this.checkOutTitleItemsSelector).getIcon();
    }

    async getTextCheckOutPortableDVD() {
        return await browser.asControl(this.textCheckOutPortableDVDSelector).getText();
    }

    async getNumberCheckOutPortableDVD() {
        return await browser.asControl(this.priceCheckOutPortableDVDSelector).getNumber();
    }

    async getUnitCheckOutPortableDVD() {
        return await browser.asControl(this.priceCheckOutPortableDVDSelector).getUnit();
    }

    async getSrcImageCheckOutPortableDVD() {
        return await browser.asControl(this.imageCheckOutPortableDVDSelector).getSrc();
    }

    async getTextGrandTotal() {
        return await browser.asControl(this.grandTotalSelector).getText();
    }

    async getTextStatusCheckOutPortableDVD() {
        return await browser.asControl(this.statusCheckOutPortableDVDSelector).getText();
    }

    async getStateStatusCheckOutPortableDVD() {
        return await browser.asControl(this.statusCheckOutPortableDVDSelector).getState();
    }

    async getTextNextStepButton() {
        return await browser.asControl(this.nextStepButton).getText();
    }

    async getEnabledNextStepButton() {
        return await browser.asControl(this.nextStepButton).getEnabled();
    }

    async pressNextStepButton() {
        await browser.asControl(this.nextStepButton).press();
    }

    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPageItems();
