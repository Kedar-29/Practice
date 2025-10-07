import { Category } from "./category";
import { Product } from "./product";

export interface TemplateField {
  id?: number;
  fieldName: string;
  label: string;
  dataType: string;
  unit?: string;
  defaultValue?: string;
  isRequired?: boolean;
  order?: number;
  createdAt?: string;
}

export interface TemplateCalculatedField {
  id?: number;
  fieldName: string;
  label: string;
  formula: string;
  dataType: string;
  order?: number;
  createdAt?: string;
}

export interface Template {
  id: number;
  categoryId: number;
  name: string;
  desc?: string;
  createdAt: string;
  fields: TemplateField[];
  calculatedFields: TemplateCalculatedField[];
  product?: Product[];
  category?: Category;
}

export interface CreateTemplateFieldDto {
  fieldName: string;
  label: string;
  dataType: string;
  unit?: string;
  defaultValue?: string;
  isRequired?: boolean;
  order?: number;
}

export interface CreateTemplateCalculatedFieldDto {
  fieldName: string;
  label: string;
  formula: string;
  dataType: string;
  order?: number;
}

export interface CreateTemplateDto {
  categoryId: number;
  name: string;
  desc?: string;
  fields: CreateTemplateFieldDto[];
  calculatedFields: CreateTemplateCalculatedFieldDto[];
}

export type UpdateTemplateDto = Partial<CreateTemplateDto>;
