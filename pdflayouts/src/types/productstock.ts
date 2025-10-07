import { InventoryLocation } from "./inventory-location";
import { Product } from "./product";



export type ProductStock = {
  id: number;
  productId: number;
  quantity: number;
  qtyInNos?: number;
  qtyInKg?: number;
  qtyInLitre?: number;
  availableQty?: number;
  minStock?: number;
  maxStock?: number;
  currentStock?: number;
  averagePrice?: number;
  averageStock?: number;
  totalOutward?: number;
  locationId?: string;
  product?: Product;
  location?: InventoryLocation | null;
};

export type CreateProductStockDto = {
  productId: number;
  quantity: number;
  qtyInNos?: number;
  qtyInKg?: number;
  qtyInLitre?: number;
  locationId?: string;
};

export type UpdateProductStockDto = Partial<CreateProductStockDto>;

export type BulkCreateProductStockDto = {
  items: CreateProductStockDto[];
};
