import { InventoryLocation } from "./inventory-location";
import { Vendor } from "./vendor";

export type AssetStatus = 'ACTIVE' | 'UNDER_MAINTENANCE' | 'RETIRED' | 'LOST';

export interface Asset {
  id: number;
  assetTag: string;
  name: string;
  desc?: string;
  categorycode?: string;
  serialNumber?: string;
  vendorId?: number;
  purchaseDate?: string;
  status: AssetStatus;
  createdAt?: string;
  stockLocationId?: string;
  // Optionally add related objects if needed:
  // category?: Category;
  vendor?: Vendor;
  stockLocation?: InventoryLocation;
}

export interface CreateAssetDto {
  assetTag: string;
  name: string;
  desc?: string;
  categorycode?: string;
  serialNumber?: string;
  vendorId?: number;
  purchaseDate?: string;
  status?: AssetStatus;
  stockLocationId?: string;
}

export interface UpdateAssetDto {
  assetTag?: string;
  name?: string;
  desc?: string;
  categorycode?: string;
  serialNumber?: string;
  vendorId?: number;
  purchaseDate?: string;
  status?: AssetStatus;
  stockLocationId?: string;
}
