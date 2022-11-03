
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CategoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    // /**

    get portableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectListItem",
                viewId: "container-cart---category",
                bindingPath: {
                    path: "/Products('HT-2001')",
                    propertyPath: "PictureUrl"
                }
            }

        }
    }

    get statusPortableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectStatus",
                viewId: "container-cart---category",
                bindingPath: {
                    path: "/Products('HT-2001')",
                    propertyPath: "Status"
                },
                interaction: {
                    idSuffix: "text"
                }
            }
        }
    }

    get compareLinkPortableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectAttribute",
                viewId: "container-cart---category",
                bindingPath: {
                    path: "",
                    propertyPath: "/system/desktop",
                    modelName: "device"
                },
                ancestor: {
                    controlType: "sap.m.ObjectListItem",
                    viewId: "container-cart---category",
                    bindingPath: {
                        path: "/Products('HT-2001')"
                    },
                    ancestor: {
                        id: "container-cart---category--productList"
                    }
                },
                interaction: {
                    idSuffix: "text"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async getTitlePortableDVD() {
        return await browser.asControl(this.portableDVDSelector).getTitle();
    }

    async getnumberPortableDVD() {
        return await browser.asControl(this.portableDVDSelector).getNumber();
    }

    async getnumberUnitPortableDVD() {
        return await browser.asControl(this.portableDVDSelector).getNumberUnit();
    }

    async getIconPortableDVD() {
        return await browser.asControl(this.portableDVDSelector).getIcon();
    }

    async pressPortableDVD() {
        await browser.asControl(this.portableDVDSelector).press();
    }

    async getTextStatePortableDVD() {
        return await browser.asControl(this.statusPortableDVDSelector).getText();
    }

    async getStatePortableDVD() {
        return await browser.asControl(this.statusPortableDVDSelector).getState();
    }

    async getTextCompareLinkPortableDVD() {
        return await browser.asControl(this.compareLinkPortableDVDSelector).getText();
    }

    async getActiveTextCompareLinkPortableDVD() {
        return await browser.asControl(this.compareLinkPortableDVDSelector).getActive();
    }

    open() {
        return super.open('index.html');
    }
}

module.exports = new CategoryPage();
