/**
 * Import batch types
 */

// Import batch statuses
export enum ImportBatchStatus {
  DRAFT = "DRAFT",
  VALIDATED = "VALIDATED", 
  PUBLISHED = "PUBLISHED",
  CANCELLED = "CANCELLED",
  ERROR = "ERROR"
}

// Import batch item statuses
export enum ImportBatchItemStatus {
  PENDING = "PENDING",
  VALID = "VALID",
  ERROR = "ERROR",
  PUBLISHED = "PUBLISHED"
}

// Import batch model
export interface ImportBatch {
  id: string;
  batchCode: string;
  categoryId: number;
  category: {
    id: number;
    name: string;
  };
  status: ImportBatchStatus;
  totalRows: number;
  validRows: number;
  errorRows: number;
  createdById: string;
  createdBy: {
    id: string;
    name: string;
  };
  publishedAt?: string;
  publishedById?: string;
  publishedBy?: {
    id: string;
    name: string;
  };
  fileName?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Import batch item model
export interface ImportBatchItem {
  id: number;
  batchId: string;
  batch?: ImportBatch;
  rowNumber: number; // Original row number from Excel
  status: ImportBatchItemStatus;
  errorMessage?: string;
  
  // Product data fields
  name: string;
  productCode?: string;
  barcode?: string;
  hsnCode?: string;
  desc?: string;
  uomId?: number;
  
  // Stock data
  quantity?: number;
  qtyInNos?: number;
  qtyInKg?: number;
  qtyInLitre?: number;
  minStock?: number;
  maxStock?: number;
  
  // Dynamic attributes stored as JSON
  attributes?: Record<string, unknown>;
  
  // Audit fields
  createdAt: string;
  updatedAt: string;
  modifiedById?: string;
  modifiedBy?: {
    id: string;
    name: string;
  };
  isModified: boolean;
  
  // Reference to created product (if published)
  productId?: number;
  product?: {
    id: number;
    name: string;
  };
}

// Response for paginated import batches
export interface ImportBatchesResponse {
  data: ImportBatch[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Response for paginated import batch items
export interface ImportBatchItemsResponse {
  data: ImportBatchItem[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Template download response
export interface TemplateDownloadResponse {
  base64Data: string;
  filename: string;
  contentType: string;
}

// Upload template request
export interface UploadTemplateRequest {
  categoryId: number;
  file: File;
}

// Validation response
export interface ValidationResponse {
  success: boolean;
  batchId: string;
  status: ImportBatchStatus;
  validRows: number;
  errorRows: number;
  totalRows: number;
  message: string;
}

// Publish response
export interface PublishResponse {
  success: boolean;
  batchId: string;
  status: ImportBatchStatus;
  publishedRows: number;
  totalRows: number;
  message: string;
}