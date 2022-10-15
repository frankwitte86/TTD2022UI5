
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
        const productHeaderTitleSelector = {
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
        return productHeaderTitleSelector
    }

    get productDetailsPortableDVDSelector() {
        const productDetailsPortableDVDSelector = {
            selector: {
                controlType: "sap.m.ObjectHeader",
                viewId: "container-cart---product",
                bindingPath: {
                    path: "/Products('HT-2001')",
                    propertyPath: "Name"
                }
            }
        }
        return productDetailsPortableDVDSelector
    }

    get productDetailPortableDVDStatusSelector() {
        const productDetailPortableDVDStatusSelector = {
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
        return productDetailPortableDVDStatusSelector
    }

    get productSupplierPortableDVDSelector() {
        const productSupplierPortableDVDSelector = {
            selector: {
                controlType: "sap.m.ObjectAttribute",
                viewId: "container-cart---product",
                i18NText: {
                    propertyName: "title",
                    key: "productSupplierAttributeText"
                }
            }
        }
        return productSupplierPortableDVDSelector
    }

    get productDescriptionPortableDVDSelector() {
        const productDescriptionPortableDVDSelector = {
            selector: {
                controlType: "sap.m.ObjectAttribute",
                viewId: "container-cart---product",
                i18NText: {
                    propertyName: "title",
                    key: "productDescriptionAttributeText"
                }
            }
        }
        return productDescriptionPortableDVDSelector
    }

    get productWeightPortableDVDSelector() {
        const productWeightPortableDVDSelector = {
            selector: {
                controlType: "sap.m.ObjectAttribute",
                viewId: "container-cart---product",
                i18NText: {
                    propertyName: "title",
                    key: "productWeightAttributeText"
                }
            }
        }
        return productWeightPortableDVDSelector
    }

    get productMeasuresPortableDVDSelector() {
        const productMeasuresPortableDVDSelector = {
            selector: {
                controlType: "sap.m.ObjectAttribute",
                viewId: "container-cart---product",
                i18NText: {
                    propertyName: "title",
                    key: "productMeasuresAttributeText"
                }
            }
        }
        return productMeasuresPortableDVDSelector
    }

    get productImageSelector() {
        const productImageSelector = {
            selector: {
                id: "container-cart---product--productImage",
                interaction: {
                    idSuffix: "inner"
                }
            }
        }
        return productImageSelector
    }

    get popUpCloseButtonSelector() {
        const popUpCloseButton = {
            selector: {
                id: "container-cart---product--lightBox-closeButton",
                searchOpenDialogs: true,
                interaction: {
                    idSuffix: "BDI-content"
                }
            }
        }
        return popUpCloseButton
    }

    get addToShoppingCartButtonSelector() {
        const addToShoppingCartButtonSelector = {
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
        return addToShoppingCartButtonSelector
    }

    get largePopUpImageSelector() {
        const largePopUpImageSelector = {
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
        return largePopUpImageSelector
    }

    get textTitleShoppingCartSelector() {
        const titleShoppingCartSelector = {
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
        return titleShoppingCartSelector
    }

    async getTextProductHeaderTitle() {
        const testProductHeaderTitle = await browser.asControl(this.productHeaderTitleSelector).getText();
        return await testProductHeaderTitle;
    }

    async getTitleProductDetailsPortableDVDSelector() {
        const productDetailsPortableDVDTitle = await browser.asControl(this.productDetailsPortableDVDSelector).getTitle();
        return await productDetailsPortableDVDTitle;
    }

    async getNumberProductDetailsPortableDVDSelector() {
        const productDetailsPortableDVDNumber = await browser.asControl(this.productDetailsPortableDVDSelector).getNumber();
        return await productDetailsPortableDVDNumber;
    }

    async getNumberUnitProductDetailsPortableDVDSelector() {
        const productDetailsPortableDVDNumberUnit = await browser.asControl(this.productDetailsPortableDVDSelector).getNumberUnit();
        return await productDetailsPortableDVDNumberUnit;
    }

    async getTextProductDetailPortableDVDStatusSelector() {
        const productDetailPortableDVDStatusSelector = await browser.asControl(this.productDetailPortableDVDStatusSelector).getText();
        return await productDetailPortableDVDStatusSelector;
    }

    async getStateProductDetailPortableDVDStatusSelector() {
        const productDetailPortableDVDStatusSelector = await browser.asControl(this.productDetailPortableDVDStatusSelector).getState();
        return await productDetailPortableDVDStatusSelector;
    }

    async getTitlePortableDVDSupplier() {
        const titlePortableDVDSupplier = await browser.asControl(this.productSupplierPortableDVDSelector).getTitle();
        return await titlePortableDVDSupplier;
    }

    async getTextPortableDVDSupplier() {
        const textPortableDVDSupplier = await browser.asControl(this.productSupplierPortableDVDSelector).getText();
        return await textPortableDVDSupplier;
    }

    async getTitlePortableDVDDescription() {
        const titlePortableDVDDescription = await browser.asControl(this.productDescriptionPortableDVDSelector).getTitle();
        return await titlePortableDVDDescription;
    }

    async getTextPortableDVDDescription() {
        const textPortableDVDDescription = await browser.asControl(this.productDescriptionPortableDVDSelector).getText();
        return await textPortableDVDDescription;
    }

    async getTitlePortableDVDWeight() {
        const titlePortableDVDWeight = await browser.asControl(this.productWeightPortableDVDSelector).getTitle();
        return await titlePortableDVDWeight;
    }

    async getTextPortableDVDWeight() {
        const textPortableDVDWeight = await browser.asControl(this.productWeightPortableDVDSelector).getText();
        return await textPortableDVDWeight;
    }

    async getTitlePortableDVDWMeasures() {
        const titlePortableDVDMeasures = await browser.asControl(this.productMeasuresPortableDVDSelector).getTitle();
        return await titlePortableDVDMeasures;
    }

    async getTextPortableDVDMeasures() {
        const textPortableDVDMeasures = await browser.asControl(this.productMeasuresPortableDVDSelector).getText();
        return await textPortableDVDMeasures;
    }

    async getSrcProductImage() {
        const srcProductImage = await browser.asControl(this.productImageSelector).getSrc();
        return await srcProductImage;
    }

    async pressProductImage() {
        await browser.asControl(this.productImageSelector).press();
    }

    async getImageSrcLargePopUpImage() {
        const imageSrcLargePopUpImage = await browser.asControl(this.largePopUpImageSelector).getImageSrc();
        return await imageSrcLargePopUpImage;
    }

    async getTitleLargePopUpImage() {
        const titleLargePopUpImage = await browser.asControl(this.largePopUpImageSelector).getTitle();
        return await titleLargePopUpImage;
    }

    async pressPopUpCloseButton() {
        await browser.asControl(this.popUpCloseButtonSelector).press();
    }

    async getTextAddToShoppingCartButton() {
        const textAddToShoppingCartButton = await browser.asControl(this.addToShoppingCartButtonSelector).getText();
        return await textAddToShoppingCartButton;
    }

    async getEnabledAddToShoppingCartButton() {
        const enabledAddToShoppingCartButton = await browser.asControl(this.addToShoppingCartButtonSelector).getEnabled();
        return await enabledAddToShoppingCartButton;
    }

    async getVisibleAddToShoppingCartButton() {
        const visibleAddToShoppingCartButton = await browser.asControl(this.addToShoppingCartButtonSelector).getVisible();
        return await visibleAddToShoppingCartButton;
    }

    async pressAddToShoppingCartButton() {
        await browser.asControl(this.addToShoppingCartButtonSelector).firePress();
    }

    async getTextTitleShoppingCart() {
        const textTitleShoppingCart = await browser.asControl(this.titleShoppingCartSelector).getText();
        return await textTitleShoppingCart;
    }
}

module.exports = new ProductPage();
