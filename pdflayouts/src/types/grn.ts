import { Product } from "./product";
import { PurchaseOrder } from "./purchase-order";
import { Uom } from "./uom";

export enum GRNStatus {
  PENDING = 'PENDING',
  PARTIAL = 'PARTIAL',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface GRNItem {
  id?: number;
  grnId?: number;
  productId: number;
  poQty: number;
  receivedQty: number;
  shortQty: number;
  excessQty: number;
  rejectedQty: number;
  acceptedQty: number;
  rate: number;
  discount: number;
  total: number;
  uomId: number;
  remarks?: string;
  product?: Product;
  uom?: Uom;
}

export interface GRN {
  id: number;
  grnNumber: string;
  poId: number;
  receivedDate?: string;
  bilno?: string;
  billnoDate?: string;
  lrno?: string;
  transporter?: string;
  vehicalNo?: string;
  authorised?: boolean;
  inspectionrequired?: boolean;
  status: GRNStatus;
  remarks?: string;
  locationId?: string;
  createdAt: string;
  createdById: string;
  items: GRNItem[];
  po?: PurchaseOrder
}

export type CreateGRNItemDto = Omit<GRNItem, 'id' | 'grnId'>;
export interface CreateGRNDto extends Omit<GRN, 'id' | 'createdAt' | 'createdById' | 'items'> {
  items: CreateGRNItemDto[];
}
export interface UpdateGRNDto extends Partial<CreateGRNDto> {
  id?: number;
}
