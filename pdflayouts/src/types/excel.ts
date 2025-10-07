/**
 * Excel template generation request
 */
export interface GenerateExcelTemplateRequest {
  categoryId: number;
}

/**
 * Excel upload request 
 */
export interface UploadExcelRequest {
  categoryId: number;
  file: File;
  batchCode?: string;
}

/**
 * Excel upload result
 */
export interface ExcelUploadResult {
  success: boolean;
  message: string;
  totalRows: number;
  processedRows: number;
  failedRows: number;
  batchCode: string;
  batchId?: string;
  errors?: Array<{
    row: number;
    message: string;
  }>;
}

/**
 * Import status response
 */
export interface ImportStatusResponse {
  batchCode: string;
  totalProducts: number;
  timestamp: string;
  items: Array<{
    id: number;
    productId: number;
    quantity: number;
    adjustmentType: string;
    reason: string;
    batchCode: string;
    referenceNo: string;
    createdAt: string;
    product: {
      id: number;
      name: string;
      productCode: string | null;
    };
    createdBy: {
      id: string;
      name: string;
    };
  }>;
}