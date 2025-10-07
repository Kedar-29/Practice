import { Product } from "./product";
import { ProductStock } from "./productstock";
import { Uom } from "./uom";
import { User } from "./user";

export type TransactionType = 'IN' | 'OUT' | 'MOVE' | 'ADJUST' | 'BROUGHT_DOWN' | 'VERIFY';

export type StockAdjustmentLog = {
  id: number;
  productId: number;
  quantity: number;
  adjustmentType: TransactionType;
  reason?: string;
  batchCode?: string;
  referenceNo?: string;
  reverted?: boolean;
  revertedAt?: Date;
  revertedById?: string;
  createdById: string;
  uomId?: number;
  product?: Product;
  createdBy?: User;
  uom?: Uom;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateStockAdjustmentLogDto = {
  productId: number;
  quantity: number;
  adjustmentType: TransactionType;
  reason?: string;
  batchCode?: string;
  referenceNo?: string;
  uomId?: number;
  locationId?: number;
  createdById?: string;
};
export type UpdateStockAdjustmentLogDto = Partial<CreateStockAdjustmentLogDto>;

export type StockVerificationDto = {
  productId: number;
  quantity: number;
  adjustmentType: TransactionType;
  reason: string;
  batchCode?: string;
  referenceNo?: string;
  locationId?: number;
};

export type BulkStockVerificationDto = {
  adjustments: StockVerificationDto[];
  batchCode: string;
};

// Bulk operation types
export type BulkCreateStockAdjustmentLogDto = {
  items: CreateStockAdjustmentLogDto[];
  batchCode: string;
};

export type BulkRevertStockAdjustmentDto = {
  batchCode: string;
  reason: string;
  revertedById?: string;
};

export type BulkUpdateStockAdjustmentLogDto = {
  adjustmentType?: TransactionType;
  reason?: string;
  referenceNo?: string;
};

export type StockAdjustmentResult = {
  success: boolean;
  data: StockAdjustmentLog;
  previousStock?: ProductStock;
  currentStock?: ProductStock;
};

export type StockAdjustmentError = {
  productId?: number;
  adjustmentId?: number;
  error: string;
};

export type BulkOperationResponse = {
  success: boolean;
  results: StockAdjustmentResult[];
  errors?: StockAdjustmentError[];
};