"use service";
import { objectToJS } from "@/lib/utils";
import { LATEST_PRODUCTS_COUNT } from "../constants";
import { PrismaClient } from "@prisma/client";

// get latest products
export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: LATEST_PRODUCTS_COUNT,
  });

  return objectToJS(data);
}

//get single prodict by its slug
export async function getProductBySlug(slug: string) {
  const prisma = new PrismaClient();

  const data = await prisma.product.findFirst({
    where: { slug },
  });

  return objectToJS(data);
}
