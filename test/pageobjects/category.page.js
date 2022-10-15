
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
        const portableDVDSelector = {
            selector: {
                controlType: "sap.m.ObjectListItem",
                viewId: "container-cart---category",
                bindingPath: {
                    path: "/Products('HT-2001')",
                    propertyPath: "PictureUrl"
                }
            }

        }
        return portableDVDSelector
    }

    get statusPortableDVDSelector() {
        const statusPortableDVDSelector = {
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
        return statusPortableDVDSelector
    }

    get compareLinkPortableDVDSelector() {
        const compareLinkPortableDVDSelector = {
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
        return compareLinkPortableDVDSelector
    }




    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async getTitlePortableDVD() {
        const portableDvdTitle = await browser.asControl(this.portableDVDSelector).getTitle();
        return await portableDvdTitle;
    }

    async getnumberPortableDVD() {
        const portableDvdNumber = await browser.asControl(this.portableDVDSelector).getNumber();
        return await portableDvdNumber;
    }

    async getnumberUnitPortableDVD() {
        const portableDvdNumberUnit = await browser.asControl(this.portableDVDSelector).getNumberUnit();
        return await portableDvdNumberUnit;
    }

    async getIconPortableDVD() {
        const portableDvdIcon = await browser.asControl(this.portableDVDSelector).getIcon();
        return await portableDvdIcon;
    }

    async pressPortableDVD() {
        await browser.asControl(this.portableDVDSelector).press();
    }

    async getTextStatePortableDVD() {
        const stateTextPortableDVD = await browser.asControl(this.statusPortableDVDSelector).getText();
        return await stateTextPortableDVD;
    }

    async getStatePortableDVD() {
        const statePortableDVD = await browser.asControl(this.statusPortableDVDSelector).getState();
        return await statePortableDVD;
    }

    async getTextCompareLinkPortableDVD() {
        const compareLinkPortableDVD = await browser.asControl(this.compareLinkPortableDVDSelector).getText();
        return await compareLinkPortableDVD;
    }

    async getActiveTextCompareLinkPortableDVD() {
        const compareLinkActivePortableDVD = await browser.asControl(this.compareLinkPortableDVDSelector).getActive();
        return await compareLinkActivePortableDVD;
    }

    // async getTextCompareLinkPortableDVD() {
    //     const compareLinkPortableDVD = await browser.asControl(this.compareLinkPortableDVDSelector).getText();
    //     return await compareLinkPortableDVD;
    // }


    open() {
        return super.open('index.html');
    }
}

module.exports = new CategoryPage();
