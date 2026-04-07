const test = {
  method: "notify",
  recipient: "john@example.com",
  message: "Scheduled maintenance at midnight.",
};

const notification = {
  notify(recipient, message) {
    return `Notification for ${recipient}: ${message}`;
  },
};

const systemNotification = Object.create(notification);

systemNotification.broadcast = function (message) {
  return `Broadcast to all users: ${message}`;
};

// don't touch below this line

export { notification, systemNotification };
