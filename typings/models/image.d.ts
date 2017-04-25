import { ShopifyObject } from "./base";

export interface Image extends ShopifyObject {
  id?: number;
  position?: number;
  product_id?: number;
  // @TODO: variant_ids
  src?: string;
  created_at?: string;
  updated_at?: string;
}
