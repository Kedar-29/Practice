import { InventoryLocation } from "./inventory-location";
import { Product } from "./product";
import { User } from "./user";

export enum StockVerificationStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  DRAFT = "DRAFT",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export enum VerificationFrequency {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
  YEARLY = "YEARLY",
}

export interface StockVerification {
  id: number;
  productId: number;
  product: {
    id: number;
    name: string;
    sku?: string;
    productCode?: string;
  };
  locationId?: string;
  location?: InventoryLocation;
  verifiedQuantity: number;
  systemQuantity: number;
  variance: number;
  batchCode?: string;
  verifiedById: string;
  verifiedBy: User;
  verifiedAt: string;
  status: StockVerificationStatus;
  notes?: string;
  transactionId?: number;
  transaction?: object; // Transaction type if needed
  createdAt: string;
  updatedAt: string;
}

export interface StockVerificationSchedule {
  id: number;
  productId?: number;
  product?: Product;
  locationId?: string;
  location?: InventoryLocation;
  frequency: VerificationFrequency;
  lastVerified?: string;
  nextDue: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateStockVerificationDto {
  productId: number;
  locationId?: string;
  verifiedQuantity: number;
  systemQuantity: number;
  batchCode?: string;
  verifiedById: string;
  status?: StockVerificationStatus;
  notes?: string;
}

export interface BulkCreateStockVerificationDto {
  items: CreateStockVerificationDto[];
  batchCode?: string;
  createTransaction?: boolean;
}

export interface UpdateStockVerificationDto {
  verifiedQuantity?: number;
  systemQuantity?: number;
  status?: StockVerificationStatus;
  notes?: string;
}

export interface BulkUpdateStockVerificationDto {
  ids: number[];
  data: UpdateStockVerificationDto;
}

export interface RevertStockVerificationDto {
  id: number;
  reason?: string;
}

export interface BulkRevertStockVerificationDto {
  ids: number[];
  reason?: string;
}

export interface StockVerificationFilterDto {
  productId?: number;
  locationId?: string;
  verifiedById?: string;
  batchCode?: string;
  status?: StockVerificationStatus;
  startDate?: string;
  endDate?: string;
}

export interface StockVerificationScheduleDto {
  productId?: number;
  locationId?: string;
  frequency: VerificationFrequency;
  isActive?: boolean;
}

export interface StockVerificationStatistics {
  totalVerifications: number;
  totalVariance: number;
  averageVariance: number;
  varianceByProduct: Array<{
    productId: number;
    productName: string;
    totalVariance: number;
    verificationCount: number;
  }>;
  varianceByLocation: Array<{
    locationId: string;
    locationName: string;
    totalVariance: number;
    verificationCount: number;
  }>;
  statusBreakdown: Record<StockVerificationStatus, number>;
  recentActivity: StockVerification[];
}

export interface PaginatedStockVerificationResponse {
  items: StockVerification[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
