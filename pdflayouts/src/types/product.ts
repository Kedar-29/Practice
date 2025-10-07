export interface Product {
  id: number;
  sku: string;
  name: string;
  categoryId: number;
  barcode: string;
  productCode?: string;
  hsnCode?: string;
  desc?: string;
  uomId: number;
  attributes?: Record<string, unknown>;
  imageUrls?: string[];
  price?: number;
  organizationId?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface CreateProductDto {
  sku: string;
  name: string;
  categoryId: number;
  barcode: string;
  productCode?: string;
  hsnCode?: string;
  desc?: string;
  uomId: number;
  attributes?: Record<string, unknown>;
  imageUrls?: string[];
  organizationId?: string;
}

export interface UpdateProductDto {
  name?: string;
  desc?: string;
  categoryId?: number;
  uomId?: number;
  attributes?: Record<string, unknown>;
  imageUrls?: string[];
}
