
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShoppingCartPage extends Page {
    /**
     * define selectors using getter methods
     */
    // /**

    get proceedButtonSelector() {
        return {
            selector: {
                id: "container-cart---cartView--proceedButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    get enlargeArrowIconSelector() {
        return {
            selector: {
                id: "container-cart---app--layout-midBack-img"
            }
        }
    }

    get titleShoppingCartSelector() {
        return {
            selector: {
                id: "container-cart---cartView--page-title"
            }
        }
    }

    get titleItemsInShoppingCartSelector() {
        return {
            selector: {
                controlType: "sap.m.Title",
                viewId: "container-cart---cartView",
                i18NText: {
                    propertyName: "text",
                    key: "Cart_contentLabel"
                }
            }
        }
    }

    get portableDVDInShoppingCartSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectListItem",
                viewId: "container-cart---cartView",
                bindingPath: {
                    path: "/cartEntries/HT-2001",
                    propertyPath: "Quantity",
                    modelName: "cartProducts"
                }
            }
        }
    }

    get statusPortableDVDShoppingCartSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectStatus",
                viewId: "container-cart---cartView",
                bindingPath: {
                    path: "/cartEntries/HT-2001",
                    propertyPath: "Status",
                    modelName: "cartProducts"
                },
                interaction: {
                    idSuffix: "text"
                }
            }
        }
    }

    get totalPriceShoppingCartSelector() {
        return {
            selector: {
                id: "container-cart---cartView--totalPriceText"
            }
        }
    }

    get saveForLaterLinkSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectAttribute",
                viewId: "container-cart---cartView",
                i18NText: {
                    propertyName: "text",
                    key: "cartSaveForLaterLinkText"
                },
                interaction: {
                    idSuffix: "text"
                }
            }
        }
    }

    get itemsSavedForLaterContentSelector() {
        return {
            selector: {
                id: "container-cart---cartView--saveForLaterList",
                interaction: {
                    idSuffix: "nodata-text"
                }
            }
        }
    }

    get addToShoppingCartLinkSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectAttribute",
                viewId: "container-cart---cartView",
                i18NText: {
                    propertyName: "text",
                    key: "cartAddToCartLinkText"
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

    async pressProceedButtonShoppingCart() {
        await browser.asControl(this.proceedButtonSelector).firePress();
    }

    async pressEnlargeArrowIconSelector() {
        await browser.asControl(this.enlargeArrowIconSelector).press();
    }

    async getTextTitleShoppingCart() {
        return await browser.asControl(this.titleShoppingCartSelector).getText();
    }

    async getTextTitleItemsInShoppingCart() {
        return await browser.asControl(this.titleItemsInShoppingCartSelector).getText();
    }

    async getTitlePortableDVDInShoppingCart() {
        return await browser.asControl(this.portableDVDInShoppingCartSelector).getTitle();
    }

    async getNumberPortableDVDInShoppingCart() {
        return await browser.asControl(this.portableDVDInShoppingCartSelector).getNumber();
    }

    async getNumberUnitPortableDVDInShoppingCart() {
        return await browser.asControl(this.portableDVDInShoppingCartSelector).getNumberUnit();
    }

    async getIntroPortableDVDInShoppingCart() {
        return await browser.asControl(this.portableDVDInShoppingCartSelector).getIntro();

    }

    async getIconPortableDVDInShoppingCart() {
        return await browser.asControl(this.portableDVDInShoppingCartSelector).getIcon();
    }

    async getTextStatusPortableDVDInShoppingCart() {
        return await browser.asControl(this.statusPortableDVDShoppingCartSelector).getText();
    }

    async getStateStatusPortableDVDInShoppingCart() {
        return await browser.asControl(this.statusPortableDVDShoppingCartSelector).getState();
    }

    async getTextTotalPriceShoppingCart() {
        return await browser.asControl(this.totalPriceShoppingCartSelector).getText();
    }

    async getTextSaveForLaterLink() {
        return await browser.asControl(this.saveForLaterLinkSelector).getText();
    }

    async getActiveSaveForLaterLink() {
        return await browser.asControl(this.saveForLaterLinkSelector).getActive();
    }

    async getVisibleSaveForLaterLink() {
        return await browser.asControl(this.saveForLaterLinkSelector).getVisible();
    }

    async getBlockedSaveForLaterLink() {
        return await browser.asControl(this.saveForLaterLinkSelector).getBlocked();
    }

    async pressSaveForLaterLink() {
        await browser.asControl(this.saveForLaterLinkSelector).firePress();
    }

    async getNoDataTextItemsSavedForLater() {
        return await browser.asControl(this.itemsSavedForLaterContentSelector).getNoDataText();
    }

    async getShowNoDataItemsSavedForLater() {
        return await browser.asControl(this.itemsSavedForLaterContentSelector).getShowNoData();
    }

    async getTextAddToShoppingCartLink() {
        return await browser.asControl(this.addToShoppingCartLinkSelector).getText();
    }

    async getActiveAddToShoppingCartLink() {
        return await browser.asControl(this.addToShoppingCartLinkSelector).getActive();
    }

    async getVisibleAddToShoppingCartLink() {
        return await browser.asControl(this.addToShoppingCartLinkSelector).getVisible();
    }

    async pressAddToShoppingCartLink() {
        await browser.asControl(this.addToShoppingCartLinkSelector).firePress();
    }
    open() {
        return super.open('index.html');
    }
}

module.exports = new ShoppingCartPage();
