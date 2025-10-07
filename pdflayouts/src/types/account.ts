import { User } from '@/types/user';

export interface UpdateProfileDto {
  name?: string;
  email?: string;
  profileImageUrl?: string;
  phone?: string;
}

export interface ChangePasswordDto {
  oldPassword: string;
  newPassword: string;
}

export interface AccountPageProps {
  user: User;
}
