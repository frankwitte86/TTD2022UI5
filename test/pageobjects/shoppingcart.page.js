
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
        const proceedButtonSelector = {
            selector: {
                id: "container-cart---cartView--proceedButton",
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
        return proceedButtonSelector
    }

    get enlargeArrowIconSelector() {
        const enlargeArrowIconSelector = {
            selector: {
                id: "container-cart---app--layout-midBack-img"
            }
        }
        return enlargeArrowIconSelector
    }

    get titleShoppingCartSelector() {
        const titleShoppingCartSelector = {
            selector: {
                id: "container-cart---cartView--page-title"
            }
        }
        return titleShoppingCartSelector
    }

    get titleItemsInShoppingCartSelector() {
        const titleItemsInShoppingCartSelector = {
            selector: {
                controlType: "sap.m.Title",
                viewId: "container-cart---cartView",
                i18NText: {
                    propertyName: "text",
                    key: "Cart_contentLabel"
                }
            }
        }
        return titleItemsInShoppingCartSelector
    }

    get portableDVDInShoppingCartSelector() {
        const portableDVDInShoppingCartSelector = {
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
        return portableDVDInShoppingCartSelector
    }

    get statusPortableDVDShoppingCartSelector() {
        const statusPortableDVDShoppingCartSelector = {
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
        return statusPortableDVDShoppingCartSelector
    }

    get totalPriceShoppingCartSelector() {
        const totalPriceShoppingCartSelector = {
            selector: {
                id: "container-cart---cartView--totalPriceText"
            }
        }
        return totalPriceShoppingCartSelector
    }

    get saveForLaterLinkSelector() {
        const saveForLaterLinkSelector = {
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
        return saveForLaterLinkSelector
    }

    get itemsSavedForLaterContentSelector() {
        const itemsSavedForLaterContentSelector = {
            selector: {
                id: "container-cart---cartView--saveForLaterList",
                interaction: {
                    idSuffix: "nodata-text"
                }
            }
        }
        return itemsSavedForLaterContentSelector
    }

    get addToShoppingCartLinkSelector() {
        const addToShoppingCartSelector = {
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
        return addToShoppingCartSelector
    }

    async pressProceedButtonShoppingCart() {
        await browser.asControl(this.proceedButtonSelector).firePress();
    }

    async pressEnlargeArrowIconSelector() {
        await browser.asControl(this.enlargeArrowIconSelector).press();
    }

    async getTextTitleShoppingCart() {
        const textTitleShoppingCart = await browser.asControl(this.titleShoppingCartSelector).getText();
        return await textTitleShoppingCart;
    }

    async getTextTitleItemsInShoppingCart() {
        const textTitleItemsInShoppingCart = await browser.asControl(this.titleItemsInShoppingCartSelector).getText();
        return await textTitleItemsInShoppingCart;
    }

    async getTitlePortableDVDInShoppingCart() {
        const titleportableDVDInShoppingCart = await browser.asControl(this.portableDVDInShoppingCartSelector).getTitle();
        return await titleportableDVDInShoppingCart;
    }

    async getNumberPortableDVDInShoppingCart() {
        const numberPortableDVDInShoppingCart = await browser.asControl(this.portableDVDInShoppingCartSelector).getNumber();
        return await numberPortableDVDInShoppingCart;
    }

    async getNumberUnitPortableDVDInShoppingCart() {
        const numberUnitPortableDVDInShoppingCart = await browser.asControl(this.portableDVDInShoppingCartSelector).getNumberUnit();
        return await numberUnitPortableDVDInShoppingCart;
    }

    async getIntroPortableDVDInShoppingCart() {
        const introPortableDVDInShoppingCart = await browser.asControl(this.portableDVDInShoppingCartSelector).getIntro();
        return await introPortableDVDInShoppingCart;
    }

    async getIconPortableDVDInShoppingCart() {
        const iconPortableDVDInShoppingCart = await browser.asControl(this.portableDVDInShoppingCartSelector).getIcon();
        return await iconPortableDVDInShoppingCart;
    }

    async getTextStatusPortableDVDInShoppingCart() {
        const textStatusPortableDVDShoppingCart = await browser.asControl(this.statusPortableDVDShoppingCartSelector).getText();
        return await textStatusPortableDVDShoppingCart;
    }

    async getStateStatusPortableDVDInShoppingCart() {
        const stateStatusPortableDVDShoppingCart = await browser.asControl(this.statusPortableDVDShoppingCartSelector).getState();
        return await stateStatusPortableDVDShoppingCart;
    }

    async getTextTotalPriceShoppingCart() {
        const textTotalPriceShoppingCart = await browser.asControl(this.totalPriceShoppingCartSelector).getText();
        return await textTotalPriceShoppingCart;
    }

    async getTextSaveForLaterLink() {
        const textsaveForLaterLink = await browser.asControl(this.saveForLaterLinkSelector).getText();
        return await textsaveForLaterLink;
    }

    async getActiveSaveForLaterLink() {
        const activeSaveForLaterLink = await browser.asControl(this.saveForLaterLinkSelector).getActive();
        return await activeSaveForLaterLink;
    }

    async getVisibleSaveForLaterLink() {
        const visibleSaveForLaterLink = await browser.asControl(this.saveForLaterLinkSelector).getVisible();
        return await visibleSaveForLaterLink;
    }

    async getBlockedSaveForLaterLink() {
        const blockedSaveForLaterLink = await browser.asControl(this.saveForLaterLinkSelector).getBlocked();
        return await blockedSaveForLaterLink;
    }

    async pressSaveForLaterLink() {
        await browser.asControl(this.saveForLaterLinkSelector).firePress();
    }

    async getNoDataTextItemsSavedForLater() {
        const noDataTextItemsSavedForLater = await browser.asControl(this.itemsSavedForLaterContentSelector).getNoDataText();
        return await noDataTextItemsSavedForLater
    }

    async getShowNoDataItemsSavedForLater() {
        const showNoDataTextItemsSavedForLater = await browser.asControl(this.itemsSavedForLaterContentSelector).getShowNoData();
        return await showNoDataTextItemsSavedForLater
    }

    async getTextAddToShoppingCartLink() {
        const textAddToShoppingCartLink = await browser.asControl(this.addToShoppingCartLinkSelector).getText();
        return await textAddToShoppingCartLink
    }

    async getActiveAddToShoppingCartLink() {
        const activeAddToShoppingCartLink = await browser.asControl(this.addToShoppingCartLinkSelector).getActive();
        return await activeAddToShoppingCartLink
    }

    async getVisibleAddToShoppingCartLink() {
        const visibleAddToShoppingCartLink = await browser.asControl(this.addToShoppingCartLinkSelector).getVisible();
        return await visibleAddToShoppingCartLink
    }

    async pressAddToShoppingCartLink() {
        await browser.asControl(this.addToShoppingCartLinkSelector).firePress();
    }



    open() {
        return super.open('index.html');
    }
}

module.exports = new ShoppingCartPage();
