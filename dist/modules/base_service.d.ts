/// <reference path="../../typings/index.d.ts" />
import * as fetch from "node-fetch";
export declare class BaseService {
    private shopDomain;
    private accessToken;
    private resource;
    constructor(shopDomain: string, accessToken: string, resource: string);
    static buildDefaultHeaders(): fetch.IHeaders;
    setCredentials(shopDomain: string, accessToken: string): void;
    createRequest<T>(method: "GET" | "POST" | "PUT" | "DELETE", path: string, rootElement?: string, payload?: Object): Promise<T>;
}
export interface FieldOptions {
    /**
     * Restricts the result to only the fields specified.
     */
    fields?: string[];
}
export interface ListOptions extends FieldOptions {
    /**
     * Restricts results to those created after the given id.
     */
    since_id?: number;
}