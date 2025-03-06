"use service";
import { PrismaClient } from "@prisma/client";
import { objectToJS } from "@/lib/utils";
import { LATEST_PRODUCTS_COUNT } from "../constants";

// get latest products
export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: LATEST_PRODUCTS_COUNT,
  });

  return objectToJS(data);
}
