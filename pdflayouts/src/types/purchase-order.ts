import { Product } from "./product";
import { Vendor } from "./vendor";

export interface PurchaseOrder {
  id: number;
  poNumber: string;
  vendorId: number;
  type: POType;
  status: POStatus;
  organizationId?: string;
  createdById: string;
  createdAt: string;
  updatedAt: string;
  items: PurchaseOrderItem[];
  vendor?: Vendor;
  consignee?: Vendor;
  supplier?: Vendor;
  voucherNo?: string;
  referenceNo?: string;
  dispatchedThrough?: string;
  date?: string;
  paymentTerms?: string;
  otherReference?: string;
  destination?: string;
  deliveryTerms?: string;
}

export interface PurchaseOrderItem {
  id: number;
  purchaseOrderId: number;
  productId: number;
  product?: Product;
  quantity: number;
  rate?: number;         // optional if you want
  per?: string;          // e.g., "kg", "pcs", "litre"
  discount?: number;     // percentage or amount
  dueDate?: string;  
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePurchaseOrderDto {
  poNumber: string;
  vendorId: number;
  type: POType;
  status?: POStatus;
  organizationId?: string;
  items: CreatePurchaseOrderItemDto[];
}

export interface UpdatePurchaseOrderDto {
  poNumber?: string;
  vendorId?: number;
  type?: POType;
  status?: POStatus;
  organizationId?: string;
  items?: CreatePurchaseOrderItemDto[];
}

export interface CreatePurchaseOrderItemDto {
  productId: number;
  quantity: number;
}

export enum POType {
  STANDARD = "STANDARD",
  BROUGHT_DOWN = "BROUGHT_DOWN",
}

export enum POStatus {
  PENDING = "PENDING",
  PARTIAL = "PARTIAL",
  RECEIVED = "RECEIVED",
  CANCELLED = "CANCELLED",
  RETURNED = "RETURNED",
}
