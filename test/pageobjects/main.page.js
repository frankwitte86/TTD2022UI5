
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
        const welcomeTextSelector = {
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
        return welcomeTextSelector
    }

    get categoryAccessoiresSelector() {
        const categoryAccessoiresSelector = {
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
        return categoryAccessoiresSelector
    }

    get shoppingCartSelector() {
        const shoppingCartSelector = {
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
        return shoppingCartSelector
    }

    get shoppingCartIconSelector() {
        const shoppingCartIconSelector = {
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
        return shoppingCartIconSelector
    }


    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async getTextWelcomeTextSelector() {
        const welcomeText = await browser.asControl(this.welcomeTextSelector).getText();
        return await welcomeText;
    }

    async getTitleCategoryAccessoiresSelector() {
        const categoryText = await browser.asControl(this.categoryAccessoiresSelector).getTitle();
        return await categoryText;
    }

    async pressCategoryAccessoiresSelector() {
        await browser.asControl(this.categoryAccessoiresSelector).press();
    }

    async getSrcShoppingCartIcon() {
        const srcShoppingCartIcon = await browser.asControl(this.shoppingCartIconSelector).getSrc();
        return await srcShoppingCartIcon;
    }

    async getBlockedShoppingCartIcon() {
        const blockedShoppingCartIcon = await browser.asControl(this.shoppingCartIconSelector).getBlocked();
        return await blockedShoppingCartIcon;
    }

    async getVisibleShoppingCartIcon() {
        const visibleShoppingCartIcon = await browser.asControl(this.shoppingCartIconSelector).getVisible();
        return await visibleShoppingCartIcon;
    }

    async pressShoppingCartIcon() {
        await browser.asControl(this.shoppingCartIconSelector).press();
    }


    // async getCategorySelector(categoryName) {

    //     const categorySelector = {
    //         selector: {
    //             controlType: "sap.m.StandardListItem",
    //             viewId: "container-cart---homeView",
    //             bindingPath: {
    //                 path: "/ProductCategories('" + categoryName + "')",
    //                 propertyPath: "CategoryName"
    //             },
    //             interaction: {
    //                 idSuffix: "content"
    //             }

    //         }
    //     }
    //     const categorySelector2 = await browser.asControl(categorySelector).getTitle();
    //     return categorySelector2
    // }


    open() {
        return super.open('index.html');
    }
}

module.exports = new MainPage();
