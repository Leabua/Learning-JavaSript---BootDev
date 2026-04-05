class Message {
  static allMessages = [];
  static totalMessages = 0;
  static allBodyLengths = 0;

  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;

    Message.totalMessages++;
    Message.allBodyLengths += body.length;
    Message.allMessages.push(this);
  }
}
new Message("555-0000", "555-9999", "Hello there!");
new Message("555-1111", "555-2222", "General Kenobi!");
new Message("555-111", "555-222", "Hey!");

console.table(Message.allMessages);
console.table(Message.allBodyLengths);
console.table(Message.totalMessages);

// don't touch below this line

export { Message };
