import { test, describe } from "node:test";
import assert from "node:assert";
import { notification, systemNotification } from "./prototypal_inheritance.js";

describe("Notification System", () => {
  test("notification.notify() returns correct string", () => {
    const result = notification.notify(
      "john@example.com",
      "Scheduled maintenance.",
    );
    assert.strictEqual(
      result,
      "Notification for john@example.com: Scheduled maintenance.",
    );
  });

  test("systemNotification inherits from notification", () => {
    const isPrototype = notification.isPrototypeOf(systemNotification);
    assert.strictEqual(isPrototype, true);
  });

  test("systemNotification can call inherited notify", () => {
    const result = systemNotification.notify(
      "jane@example.com",
      "Inheritance test.",
    );
    assert.strictEqual(
      result,
      "Notification for jane@example.com: Inheritance test.",
    );
  });
});
