
// Define proper types for user data
export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  isVerified: boolean;
  isAdmin: boolean;
  phone?: string;
  createdAt: string;
  updatedAt: string;
  profileImageUrl?: string | null;
  role: string;
  gender: 'male' | 'female' | 'other';
}

export interface CreateUserDto {
  username: string;
  email: string;
  name: string;
  password: string;
  phone?: string;
  profileImageUrl?: string | null;
}

export interface UpdateUserDto {
  username?: string;
  email?: string;
  name?: string;
  password?: string;
  phone?: string;
  profileImageUrl?: string | null;
}
