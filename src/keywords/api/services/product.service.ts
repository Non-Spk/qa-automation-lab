import type { ProductResponse } from "../../../resources/interfaces/api/product.interface";
import { ProductClient } from "../clients/product.client";

export class ProductService {
  constructor(private readonly productClient: ProductClient) {}

  async getAllProducts(): Promise<ProductResponse> {
    const response = await this.productClient.getAllProducts();

    if (!response.ok()) {
      throw new Error(`Failed to get products: HTTP ${response.status()}`);
    }

    return (await response.json()) as ProductResponse;
  }
}
