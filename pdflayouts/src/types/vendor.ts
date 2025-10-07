export interface Vendor {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  gstNumber?: string;
  organizationId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateVendorDto {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  gstNumber?: string;
  organizationId?: string;
}

export interface UpdateVendorDto {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  gstNumber?: string;
  organizationId?: string;
}
