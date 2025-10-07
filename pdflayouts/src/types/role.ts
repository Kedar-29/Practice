// Define proper types for role datae xport 
export interface Role {
  id: number;
  name: string;
  desc: string;
}

export interface CreateRoleDto {
  name: string;
  desc: string;
}

export interface UpdateRoleDto {
  name?: string;
  desc?: string;
}
