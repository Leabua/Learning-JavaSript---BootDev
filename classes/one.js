class Message {
  static allMessages = [];
  // "constructor" object is called when a new instance of a class (object) is created.
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    // "this" refers to the specific object being made
    // We push it into the Class's static array
    Message.allMessages.push(this);
  }
}

// const myMessage = new Message(recipient, sender, body);

new Message("555-0000", "555-9999", "Hello there!");
new Message("555-1111", "555-2222", "General Kenobi!");
new Message("555-111", "555-222", "Hey!");

new Message("555-333", "555-444", "Yo!");
console.table(Message.allMessages);
// don't touch below this line
//

export { Message };
