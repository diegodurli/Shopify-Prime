/// <reference path="./../typings/index.d.ts" />
"use strict";
const infrastructure_1 = require("../infrastructure");
/**
 * A service for manipulating Shopify shops.
 */
class Shops extends infrastructure_1.BaseService {
    constructor(shopDomain, accessToken) {
        super(shopDomain, accessToken, "");
    }
    /**
     * Returns shop data for the shop.
     * @param options Options for filtering the result.
     */
    get(options) {
        return this.createRequest("GET", "shop.json", "shop", options);
    }
    /**
     * Forces the shop to uninstall your Shopify app. Uninstalling an application is an irreversible operation. Be entirely sure that you no longer need to make API calls for the shop in which the application has been installed.
     */
    forceUninstallApp() {
        return this.createRequest("DELETE", "api_permissions/current.json");
    }
}
exports.Shops = Shops;
