export interface Type {
  id: number;
  code: string;
  name: string;
  desc?: string;
  isActive: boolean;
  createdAt: string;
  // Add more fields as needed
}

export interface CreateTypeDto {
  code: string;
  name: string;
  desc?: string;
}

export interface UpdateTypeDto {
  name?: string;
  desc?: string;
  isActive?: boolean;
}
