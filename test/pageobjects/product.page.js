
const { wdi5 } = require('wdio-ui5-service');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    // /**

    get productHeaderTitleSelector() {
        return {
            selector: {
                controlType: "sap.m.Title",
                viewId: "container-cart---product",
                bindingPath: {
                    path: "/Products('HT-2001')",
                    propertyPath: "Name"
                },
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get productDetailsPortableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectHeader",
                viewId: "container-cart---product",
                bindingPath: {
                    path: "/Products('HT-2001')",
                    propertyPath: "Name"
                }
            }
        }
    }

    get productDetailPortableDVDStatusSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectStatus",
                viewId: "container-cart---product",
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

    get productSupplierPortableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectAttribute",
                viewId: "container-cart---product",
                i18NText: {
                    propertyName: "title",
                    key: "productSupplierAttributeText"
                }
            }
        }
    }

    get productDescriptionPortableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectAttribute",
                viewId: "container-cart---product",
                i18NText: {
                    propertyName: "title",
                    key: "productDescriptionAttributeText"
                }
            }
        }
    }

    get productWeightPortableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectAttribute",
                viewId: "container-cart---product",
                i18NText: {
                    propertyName: "title",
                    key: "productWeightAttributeText"
                }
            }
        }
    }

    get productMeasuresPortableDVDSelector() {
        return {
            selector: {
                controlType: "sap.m.ObjectAttribute",
                viewId: "container-cart---product",
                i18NText: {
                    propertyName: "title",
                    key: "productMeasuresAttributeText"
                }
            }
        }
    }

    get productImageSelector() {
        return {
            selector: {
                id: "container-cart---product--productImage",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    get popUpCloseButtonSelector() {
        return {
            selector: {
                id: "container-cart---product--lightBox-closeButton",
                searchOpenDialogs: true,
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    get addToShoppingCartButtonSelector() {
        return {
            selector: {
                controlType: "sap.m.Button",
                viewId: "container-cart---product",
                i18NText: {
                    propertyName: "text",
                    key: "addToCartShort"
                },
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
    }

    get largePopUpImageSelector() {
        return {
            selector: {
                controlType: "sap.m.LightBoxItem",
                viewId: "container-cart---product",
                bindingPath: {
                    path: "/Products('HT-2001')",
                    propertyPath: "PictureUrl"
                },
                searchOpenDialogs: true
            }
        }
    }

    get textTitleShoppingCartSelector() {
        return {
            selector: {
                controlType: "sap.m.Title",
                viewId: "container-cart---cartView",
                i18NText: {
                    propertyName: "text",
                    key: "Cart_contentLabel"
                },
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
    }

    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */

    async getTextProductHeaderTitle() {
        return await browser.asControl(this.productHeaderTitleSelector).getText();
    }

    async getTitleProductDetailsPortableDVDSelector() {
        return await browser.asControl(this.productDetailsPortableDVDSelector).getTitle();
    }

    async getNumberProductDetailsPortableDVDSelector() {
        return await browser.asControl(this.productDetailsPortableDVDSelector).getNumber();
    }

    async getNumberUnitProductDetailsPortableDVDSelector() {
        return await browser.asControl(this.productDetailsPortableDVDSelector).getNumberUnit();
    }

    async getTextProductDetailPortableDVDStatusSelector() {
        return await browser.asControl(this.productDetailPortableDVDStatusSelector).getText();
    }

    async getStateProductDetailPortableDVDStatusSelector() {
        return await browser.asControl(this.productDetailPortableDVDStatusSelector).getState();
    }

    async getTitlePortableDVDSupplier() {
        return await browser.asControl(this.productSupplierPortableDVDSelector).getTitle();
    }

    async getTextPortableDVDSupplier() {
        return await browser.asControl(this.productSupplierPortableDVDSelector).getText();
    }

    async getTitlePortableDVDDescription() {
        return await browser.asControl(this.productDescriptionPortableDVDSelector).getTitle();
    }

    async getTextPortableDVDDescription() {
        return await browser.asControl(this.productDescriptionPortableDVDSelector).getText();
    }

    async getTitlePortableDVDWeight() {
        return await browser.asControl(this.productWeightPortableDVDSelector).getTitle();
    }

    async getTextPortableDVDWeight() {
        return await browser.asControl(this.productWeightPortableDVDSelector).getText();
    }

    async getTitlePortableDVDWMeasures() {
        return await browser.asControl(this.productMeasuresPortableDVDSelector).getTitle();
    }

    async getTextPortableDVDMeasures() {
        return await browser.asControl(this.productMeasuresPortableDVDSelector).getText();
    }

    async getSrcProductImage() {
        return await browser.asControl(this.productImageSelector).getSrc();
    }

    async pressProductImage() {
        await browser.asControl(this.productImageSelector).press();
    }

    async getImageSrcLargePopUpImage() {
        return await browser.asControl(this.largePopUpImageSelector).getImageSrc();
    }

    async getTitleLargePopUpImage() {
        return await browser.asControl(this.largePopUpImageSelector).getTitle();
    }

    async pressPopUpCloseButton() {
        await browser.asControl(this.popUpCloseButtonSelector).press();
    }

    async getTextAddToShoppingCartButton() {
        return await browser.asControl(this.addToShoppingCartButtonSelector).getText();
    }

    async getEnabledAddToShoppingCartButton() {
        return await browser.asControl(this.addToShoppingCartButtonSelector).getEnabled();
    }

    async getVisibleAddToShoppingCartButton() {
        return await browser.asControl(this.addToShoppingCartButtonSelector).getVisible();
    }

    async pressAddToShoppingCartButton() {
        await browser.asControl(this.addToShoppingCartButtonSelector).firePress();
    }

    async getTextTitleShoppingCart() {
        return await browser.asControl(this.titleShoppingCartSelector).getText();
    }
}

module.exports = new ProductPage();
