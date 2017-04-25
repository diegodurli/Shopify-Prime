import { ShopifyObject } from "./base";
import { Image } from "./image";

export interface Product extends ShopifyObject {
  body_html?: string;
  handle?: string;
  id?: number;
  images?: Image[];
  options?: string[];
  product_type?: string;
  published_scope?: string;
  tags?: string;
  template_suffix?: string;
  title?: string;
  metafields_global_title_tag?: string;
  metafields_global_description_tag?: string;
  // @TODO: variants
  vendor?: string;
  created_at?: string;
  published_at?: string;
  updated_at?: string;
}
