import type { APIRequestContext, APIResponse } from "@playwright/test";
import { apiConfig } from "../../../resources/configs/api.config";

export class ProductClient {
  constructor(private readonly request: APIRequestContext) {}

  async getAllProducts(): Promise<APIResponse> {
    return this.request.get(
      `${apiConfig.baseURL}${apiConfig.endpoints.allProductList}`,
    );
  }
}
