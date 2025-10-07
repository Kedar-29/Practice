import { Template } from "./template";
import { Type } from "./type";

export interface Category {
  id: number;
  code: string;
  name: string;
  desc?: string;
  typeId: number;
  isActive: boolean;
  createdAt: string;
  type?: Partial<Type>;
  Template? : Template[];
  // Add more fields as needed
}

export interface CreateCategoryDto {
  code: string;
  name: string;
  desc?: string;
  typeId: number;
  Template?: Template[];
}

export interface UpdateCategoryDto {
  name?: string;
  desc?: string;
}
