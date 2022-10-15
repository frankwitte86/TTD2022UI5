/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const { wdi5 } = require('wdio-ui5-service');
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    * 
    */




    open(path) {
        return browser.url(`https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/${path}`)
    }


}
