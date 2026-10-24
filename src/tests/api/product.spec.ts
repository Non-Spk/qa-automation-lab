import Ajv from "ajv";
import { test, expect } from "../../fixtures/api/api.fixture";
import { productResponseSchema } from "../../resources/schemas/api/product.schema";

const ajv = new Ajv();

test("API 1: Get All Products List", async ({ productService }) => {
  const productsResponse = await productService.getAllProducts();
  const validateProductResponse = ajv.compile(productResponseSchema);
  const isValid = validateProductResponse(productsResponse);
  expect(
    isValid,
    `Schema validation failed:\n${JSON.stringify(
      validateProductResponse.errors,
      null,
      2,
    )}`,
  ).toBe(true);
  expect(productsResponse.responseCode).toBe(200);
  expect(productsResponse.products.length).toBeGreaterThan(0);
});
