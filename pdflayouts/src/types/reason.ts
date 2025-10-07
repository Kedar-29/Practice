export enum TransactionType {
  IN = "IN",
  OUT = "OUT",
  MOVE = "MOVE",
  ADJUST = "ADJUST",
  VERIFY = "VERIFY",
  BROUGHT_DOWN = "BROUGHT_DOWN"
}

export interface Reason {
  id: number;
  code: string;
  name: string;
  description?: string;
  type: TransactionType;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateReasonDto {
  code: string;
  name: string;
  description?: string;
  type: TransactionType;
  isActive?: boolean;
}

export interface UpdateReasonDto {
  code?: string;
  name?: string;
  description?: string;
  type?: TransactionType;
  isActive?: boolean;
}