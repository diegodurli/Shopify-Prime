import { Product } from "../typings/models/product";
import BaseService from "../infrastructure/base_service";

export default class Products extends BaseService {
    constructor(shopDomain: string, accessToken: string) {
        super(shopDomain, accessToken, "products");
    }

    /**
     * Gets a count of all of the shop's products.
     * @param options Options for filtering the results.
     */
    public count(options) {
        return this.createRequest<number>("GET", "count.json", "count", options);
    }

    /**
     * Gets a list of up to 250 of the shop's products.
     * @param options Options for filtering the results.
     */
    public list(options) {
        return this.createRequest<Product[]>("GET", ".json", "products", options);
    }
}
