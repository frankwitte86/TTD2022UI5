
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    // /**

    get welcomeTextSelector() {
        return {
            selector: {
                controlType: "sap.m.Title",
                viewId: "container-cart---welcomeView",
                i18NText: {
                    propertyName: "tooltip",
                    key: "welcomeDescription"
                },
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get categoryAccessoiresSelector() {
        return {
            selector: {
                controlType: "sap.m.StandardListItem",
                viewId: "container-cart---homeView",
                bindingPath: {
                    path: "/ProductCategories('AC')",
                    propertyPath: "CategoryName"
                },
                interaction: {
                    idSuffix: "content"
                }
            }
        }
    }

    get shoppingCartSelector() {
        return {
            selector: {
                controlType: "sap.ui.core.Icon",
                viewId: "container-cart---welcomeView",
                properties: {
                    src: {
                        regex: {
                            source: "cart"
                        }
                    }
                },
                ancestor: {
                    controlType: "sap.m.ToggleButton",
                    viewId: "container-cart---welcomeView",
                    bindingPath: {
                        path: "",
                        propertyPath: "/layout",
                        modelName: "appView"
                    }
                }
            }
        }
    }

    get shoppingCartIconSelector() {
        return {
            selector: {
                controlType: "sap.ui.core.Icon",
                viewId: "container-cart---product",
                properties: {
                    src: {
                        regex: {
                            source: "cart"
                        }
                    }
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async getTextWelcomeTextSelector() {
        return await browser.asControl(this.welcomeTextSelector).getText();
    }

    async getTitleCategoryAccessoiresSelector() {
        return await browser.asControl(this.categoryAccessoiresSelector).getTitle();
    }

    async pressCategoryAccessoiresSelector() {
        await browser.asControl(this.categoryAccessoiresSelector).press();
    }

    async getSrcShoppingCartIcon() {
        return await browser.asControl(this.shoppingCartIconSelector).getSrc();
    }

    async getBlockedShoppingCartIcon() {
        return await browser.asControl(this.shoppingCartIconSelector).getBlocked();
    }

    async getVisibleShoppingCartIcon() {
        return await browser.asControl(this.shoppingCartIconSelector).getVisible();
    }

    async pressShoppingCartIcon() {
        await browser.asControl(this.shoppingCartIconSelector).press();
    }

    open() {
        return super.open('index.html');
    }
}

module.exports = new MainPage();
