import { test as base } from "@playwright/test";
import { ProductClient } from "../../keywords/api/clients/product.client";
import { ProductService } from "../../keywords/api/services/product.service";

type ApiFixtures = {
  productClient: ProductClient;
  productService: ProductService;
};

export const test = base.extend<ApiFixtures>({
  productClient: async ({ request }, use) => {
    await use(new ProductClient(request));
  },

  productService: async ({ productClient }, use) => {
    await use(new ProductService(productClient));
  },
});

export { expect } from "@playwright/test";
