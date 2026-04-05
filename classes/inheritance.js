// Sender is the base class
class Sender {
  constructor(recipient) {
    this.recipient = recipient;
  }
  sendMessage(message) {
    throw new Error("sendMessage method must be implemented by subclasses");
  }
}

// don't touch above this line

// SMSSender is the subclass
class SMSSender extends Sender {
  sendMessage(message) {
    console.log(`Sending SMS to ${this.recipient}: ${message}`);
  }
}

// EmailSender is the subclass

class EmailSender extends Sender {
  sendMessage(message) {
    console.log(`Sending email to ${this.recipient}: ${message}`);
  }
}

const testSMS = new SMSSender("Leabua Khomari");
const testEmail = new EmailSender("Patrice Evra");

testSMS.sendMessage("Good day Mr Leabua.");
testEmail.sendMessage("Hi Patrice Evra.");

console.log(testSMS, ",", testEmail);

// don't touch below this line

export { Sender, SMSSender, EmailSender };
