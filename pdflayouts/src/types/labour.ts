import { Product } from "./product";
import { Uom } from "./uom";

export interface LabourType {
  id: number;
  code: string;
  name: string;
  ratePerHour?: number;
  desc?: string;
  isActive: boolean;
  createdAt: string;
  Labour?: Labour[];
}

export interface CreateLabourTypeDto {
  code: string;
  name: string;
  ratePerHour?: number;
  desc?: string;
  isActive?: boolean;
}

export interface UpdateLabourTypeDto {
  code?: string;
  name?: string;
  ratePerHour?: number;
  desc?: string;
  isActive?: boolean;
}

export interface Labour {
  id: number;
  labourCode: string;
  name: string;
  phone?: string;
  labourTypeId: number;
  teamId?: number;
  joinedAt?: string;
  isActive: boolean;
  createdAt: string;
  labourType?: LabourType;
  team?: LabourTeam;
  LabourConsumption?: LabourConsumption[];
}

export interface CreateLabourDto {
  labourCode: string;
  name: string;
  phone?: string;
  labourTypeId: number;
  teamId?: number;
  joinedAt?: string;
  isActive?: boolean;
}

export interface UpdateLabourDto {
  labourCode?: string;
  name?: string;
  phone?: string;
  labourTypeId?: number;
  teamId?: number;
  joinedAt?: string;
  isActive?: boolean;
}

export interface BulkCreateLabourDto {
  items: CreateLabourDto[];
}

export interface LabourTeam {
  id: number;
  name: string;
  leaderId?: number;
  desc?: string;
  isActive: boolean;
  createdAt: string;
  leader?: Labour;
  members?: Labour[];
}

export interface CreateLabourTeamDto {
  name: string;
  leaderId?: number;
  desc?: string;
  isActive?: boolean;
}

export interface UpdateLabourTeamDto {
  name?: string;
  leaderId?: number;
  desc?: string;
  isActive?: boolean;
}

export interface LabourConsumption {
  id: number;
  labourId: number;
  productId: number;
  quantity: number;
  uomId?: number;
  consumedAt: string;
  taskId?: number;
  projectCode?: string;
  referenceNo?: string;
  issuedById?: string;
  remarks?: string;
  labour?: Labour;
  product?: Product
  uom?: Uom;
  task?: {
    id: number;
    name: string;
  };
}

export interface CreateLabourConsumptionDto {
  labourId: number;
  productId: number;
  quantity: number;
  uomId?: number;
  consumedAt?: string;
  taskId?: number;
  projectCode?: string;
  referenceNo?: string;
  issuedById?: string;
  remarks?: string;
}

export interface UpdateLabourConsumptionDto {
  labourId?: number;
  productId?: number;
  quantity?: number;
  uomId?: number;
  consumedAt?: string;
  taskId?: number;
  projectCode?: string;
  referenceNo?: string;
  issuedById?: string;
  remarks?: string;
}

export interface CreateBarcodeConsumptionDto {
  labourCode: string;
  products: BulkProductItem[];
  consumedAt?: string;
  taskId?: number;
  projectCode?: string;
  referenceNo?: string;
  issuedById?: string;
  remarks?: string;
}

export interface BulkProductItem {
  productBarcode: string;
  quantity: number;
  uomId?: number;
}