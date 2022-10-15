
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
        const getCheckOutPageTitleSelector = {
            selector: {
                id: "container-cart---checkoutView--wizardContentPage-title",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return getCheckOutPageTitleSelector
    }

    get stepCountSelector() {
        const stepCountSelector = {
            selector: {
                id: "container-cart---checkoutView--shoppingCartWizard-progressNavigator"
            }
        }
        return stepCountSelector
    }

    get checkOutTitleItemsSelector() {
        const checkOutTitleItemsSelector = {
            selector: {
                id: "container-cart---checkoutView--contentsStep",
                interaction: {
                    idSuffix: "Title"
                }
            }
        }
        return checkOutTitleItemsSelector
    }

    get textCheckOutPortableDVDSelector() {
        const textheckOutPortableDVDSelector = {
            selector: {
                controlType: "sap.m.Text",
                viewId: "container-cart---checkoutView",
                properties: {
                    text: "10\" Portable DVD player"
                }
            }
        }
        return textheckOutPortableDVDSelector
    }

    get priceCheckOutPortableDVDSelector() {
        const priceCheckOutPortableDVDSelector = {
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
        return priceCheckOutPortableDVDSelector
    }

    get imageCheckOutPortableDVDSelector() {
        const imageCheckOutPortableDVDSelector = {
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
        return imageCheckOutPortableDVDSelector
    }

    get grandTotalSelector() {
        const grandTotalSelector = {
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
        return grandTotalSelector
    }

    get statusCheckOutPortableDVDSelector() {
        const statusCheckOutPortableDVDSelector = {
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
        return statusCheckOutPortableDVDSelector
    }

    get nextStepButton() {
        const nextStepButton = {
            selector: {
                id: "container-cart---checkoutView--contentsStep-nextButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
        return nextStepButton
    }

    async getCheckOutPageTitle() {
        const textCheckOutTitle = await browser.asControl(this.checkOutPageTitleSelector).getText();
        return await textCheckOutTitle;
    }

    async getStepCountCheckoutFlow() {
        const stepCountCheckoutFlow = await browser.asControl(this.stepCountSelector).getStepCount();
        return await stepCountCheckoutFlow;
    }

    async getStepTilesCheckoutFlow() {
        const stepTilesCheckoutFlow = await browser.asControl(this.stepCountSelector).getStepTitles();
        return await stepTilesCheckoutFlow;
    }

    async getStepIconsCheckoutFlow() {
        const stepIconsCheckoutFlow = await browser.asControl(this.stepCountSelector).getStepIcons();
        return await stepIconsCheckoutFlow;
    }

    async getTextCheckOutTitleItemsSelector() {
        const titleCheckOutTitleItems = await browser.asControl(this.checkOutTitleItemsSelector).getTitle();
        return await titleCheckOutTitleItems;
    }

    async getIconCheckOutTitleItemsSelector() {
        const titleCheckOutTitleItems = await browser.asControl(this.checkOutTitleItemsSelector).getIcon();
        return await titleCheckOutTitleItems;
    }

    async getTextCheckOutPortableDVD() {
        const textCheckOutPortableDVD = await browser.asControl(this.textCheckOutPortableDVDSelector).getText();
        return await textCheckOutPortableDVD;
    }

    async getNumberCheckOutPortableDVD() {
        const numberCheckOutPortableDVD = await browser.asControl(this.priceCheckOutPortableDVDSelector).getNumber();
        return await numberCheckOutPortableDVD;
    }

    async getUnitCheckOutPortableDVD() {
        const unitCheckOutPortableDVD = await browser.asControl(this.priceCheckOutPortableDVDSelector).getUnit();
        return await unitCheckOutPortableDVD;
    }

    async getSrcImageCheckOutPortableDVD() {
        const srcImageCheckOutPortableDVD = await browser.asControl(this.imageCheckOutPortableDVDSelector).getSrc();
        return await srcImageCheckOutPortableDVD;
    }


    async getTextGrandTotal() {
        const textGrandTotalSelector = await browser.asControl(this.grandTotalSelector).getText();
        return await textGrandTotalSelector;
    }

    async getTextStatusCheckOutPortableDVD() {
        const textStatusCheckOutPortableDVD = await browser.asControl(this.statusCheckOutPortableDVDSelector).getText();
        return await textStatusCheckOutPortableDVD;
    }

    async getStateStatusCheckOutPortableDVD() {
        const stateStatusCheckOutPortableDVD = await browser.asControl(this.statusCheckOutPortableDVDSelector).getState();
        return await stateStatusCheckOutPortableDVD;
    }

    async getTextNextStepButton() {
        const textNextStepButton = await browser.asControl(this.nextStepButton).getText();
        return await textNextStepButton;
    }

    async getEnabledNextStepButton() {
        const enabledNextStepButton = await browser.asControl(this.nextStepButton).getEnabled();
        return await enabledNextStepButton;
    }

    async pressNextStepButton() {
        await browser.asControl(this.nextStepButton).press();

    }




    open() {
        return super.open('index.html');
    }
}

module.exports = new CheckOutPageItems();
