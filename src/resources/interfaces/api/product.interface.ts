export interface ProductCategory {
  usertype: {
    usertype: string;
  };
  category: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  category: ProductCategory;
}

export interface ProductResponse {
  responseCode: number;
  products: Product[];
}
