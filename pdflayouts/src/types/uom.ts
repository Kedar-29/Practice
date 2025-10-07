export interface Uom {
  id: number;
  code: string;
  name: string;
  createdAt: string;
  // Add more fields as needed
}

export interface CreateUomDto {
  code: string;
  name: string;
}

export interface UpdateUomDto {
  name?: string;
  code?: string;
}
