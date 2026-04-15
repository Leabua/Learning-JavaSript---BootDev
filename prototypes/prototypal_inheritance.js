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

console.log(systemNotification);

systemNotification.broadcast = function (message) {
  return `Broadcast to all users: ${message}`;
};

console.log(systemNotification);

const result = systemNotification.notify(test.recipient, test.message);
console.log(result);
// don't touch below this line

export { notification, systemNotification };
