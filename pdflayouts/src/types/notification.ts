// Interfaces for notification payloads
export interface NotificationBase {
  title: string;
  body: string;
  data?: Record<string, string>;
}

export interface UserNotification extends NotificationBase {
  userId: number;
}

export interface MultipleUsersNotification extends NotificationBase {
  userIds: string[];
}

export interface RoleNotification extends NotificationBase {
  roleId: number;
}

// Response interfaces
export interface NotificationResult {
  success: number;
  failure: number;
  usersCount?: number;
}

// Notification template interfaces
export interface NotificationTemplateData {
  link?: string;
  type: string;
  [key: string]: string | undefined;
}

export interface NotificationTemplate {
  id: string;
  title: string;
  body: string;
  icon?: React.ReactNode;
  data: NotificationTemplateData;
}

export interface EmptyTemplate {
  title: string;
  body: string;
  data: Record<string, never>;
}

// Notification stats interfaces
export interface NotificationStats {
  totalNotifications: number;
  sentCount: number;
  failedCount: number;
  pendingCount: number;
  deliveryRate: number;
}


// New interface for user notification history item
export interface UserNotificationHistoryItem {
  id: number;
  title: string;
  body: string;
  data: Record<string, unknown> | null;
  targetType: 'USER' | 'MULTIPLE_USERS' | 'ROLE';
  sentAt: string;
  createdAt: string;
  sentBy: {
    id: number;
    name: string;
    email: string;
  } | null;
  deliveryStatus: 'PENDING' | 'SENT' | 'FAILED' | 'UNKNOWN';
  deliveredAt: string | null;
  errorInfo?: {
    message: string;
  };
}

// Interface for user notification pagination metadata
export interface UserNotificationPaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Interface for user notification response
export interface UserNotificationResponse {
  data: UserNotificationHistoryItem[];
  meta: UserNotificationPaginationMeta;
}

// Interface for fetch user notification history parameters
export interface FetchUserNotificationParams {
  userId?: string; // Optional: if not provided, will use current user's ID
  page?: number;
  limit?: number;
  targetType?: string;
}
