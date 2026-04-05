class Message {
  #createdAt;
  static myMessage = [];
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    this.#createdAt = new Date();
    Message.myMessage.push(this);
  }
  getTimestamp() {
    return this.#createdAt;
  }
}

// don't touch below this line

const message = new Message("555-1234", "555-5678", "Hi there!");
new Message("555-0000", "555-9999", "Hello there!");
new Message("555-1111", "555-2222", "General Kenobi!");
new Message("555-111", "555-222", "Hey!");

console.log("Attempting to access the property createdAt...");
console.log("createdAt: " + message.getTimestamp());

const messageClass = Message.toString();
console.log("has private createdAt: " + messageClass.includes("#createdAt"));

console.table(Message.myMessage);
