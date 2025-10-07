import { ProductStock } from "./productstock";

export enum InventoryLocationType {
  YARD = 'YARD',
  BLOCK = 'BLOCK',
  RACK = 'RACK',
  SHELF = 'SHELF',
  STATION = 'STATION',
  PROJECT_AREA = 'PROJECT_AREA',
  GENERAL = 'GENERAL',
}

export interface InventoryLocation {
  id: string;
  code: string;
  name: string;
  type: InventoryLocationType;
  description?: string;
  isActive: boolean;
  isStorable: boolean;
  parentId?: string;
  parent?: Partial<InventoryLocation>;
  children?: InventoryLocation[];
  siteId?: string;
  site?: object; // Assuming locations type, define if needed

  latitude?: number;
  longitude?: number;
  qrCode?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  productStock?: ProductStock[]; // Define if needed
}

export interface CreateInventoryLocationDto {
  code: string;
  name: string;
  type: InventoryLocationType;
  description?: string;
  parentId?: string;
  // capacityKg?: number;
  // capacityNos?: number;
  latitude?: number;
  longitude?: number;
  qrCode?: string;
  metadata?: Record<string, unknown>;
  siteId?: string;
  isActive?: boolean;
}

export interface UpdateInventoryLocationDto {
  name?: string;
  type?: InventoryLocationType;
  description?: string;
  parentId?: string;
  // capacityKg?: number;
  // capacityNos?: number;
  latitude?: number;
  longitude?: number;
  qrCode?: string;
  metadata?: Record<string, unknown>;
  siteId?: string;
  isActive?: boolean;
}