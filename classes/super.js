class Sender {
  static allObjects = [];
  constructor(recipient) {
    this.recipient = recipient;
  }

  formatMessage(message) {
    return `To: ${this.recipient}, Message: ${message}`;
  }
}

// don't touch above this line

class SMSSender extends Sender {
  formatMessage(message) {
    return `${super.formatMessage(message)} [SMS]`;
  }
}

class EmailSender extends Sender {
  formatMessage(message) {
    return `${super.formatMessage(message)} [Email]`;
  }
}

const testOriginal = new Sender("Leabua");
const testSMS = new SMSSender("Daniel");
const testEmail = new EmailSender("Eliza");

console.log(testOriginal, ",", testSMS, ",", testEmail);

console.log(testOriginal.formatMessage("I need to talk to you."));
console.log(testSMS.formatMessage("I need to text you."));
console.log(testEmail.formatMessage("I need to email you."));

// don't touch below this line

export { Sender, SMSSender, EmailSender };
