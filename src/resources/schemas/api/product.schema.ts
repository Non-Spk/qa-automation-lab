import type { JSONSchemaType } from "ajv";
import { ProductResponse } from "../../interfaces/api/product.interface";

export const productResponseSchema: JSONSchemaType<ProductResponse> = {
  type: "object",
  properties: {
    responseCode: {
      type: "integer",
    },
    products: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",
          },
          name: {
            type: "string",
          },
          price: {
            type: "string",
          },
          brand: {
            type: "string",
          },
          category: {
            type: "object",
            properties: {
              usertype: {
                type: "object",
                properties: {
                  usertype: {
                    type: "string",
                  },
                },
                required: ["usertype"],
                additionalProperties: false,
              },
              category: {
                type: "string",
              },
            },
            required: ["usertype", "category"],
            additionalProperties: false,
          },
        },
        required: ["id", "name", "price", "brand", "category"],
        additionalProperties: false,
      },
    },
  },
  required: ["responseCode", "products"],
  additionalProperties: false,
};
