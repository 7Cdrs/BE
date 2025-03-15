class NotificationDTO {
  constructor(notification) {
    this.notification_id = notification.notification_id;
    this.task_id = notification.task_id;
    this.user_id = notification.user_id;
    this.message = notification.message;
    this.type = notification.type;
    this.sent_at = notification.sent_at;
    this.is_read = notification.is_read;
  }

  static fromDatabaseModel(notification) {
    return new NotificationDTO(notification);
  }
}

class CreateNotificationRequestDTO {
  constructor(task_id, user_id, message, type) {
    this.task_id = task_id;
    this.user_id = user_id;
    this.message = message;
    this.type = type;
  }
}

class UpdateNotificationRequestDTO {
  constructor(message, type, is_read) {
    this.message = message;
    this.type = type;
    this.is_read = is_read;
  }
}

class NotificationResponseDTO {
  constructor(notification) {
    this.notification = new NotificationDTO(notification);
  }
}

class DeleteNotificationResponseDTO {
  constructor(message) {
    this.message = message;
  }
}

export {
  NotificationDTO,
  CreateNotificationRequestDTO,
  UpdateNotificationRequestDTO,
  NotificationResponseDTO,
  DeleteNotificationResponseDTO,
};
