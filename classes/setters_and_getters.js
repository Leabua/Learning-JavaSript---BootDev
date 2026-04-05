class Contact {
  static allContacts = [];

  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    Contact.allContacts.push(this);
  }

  set phoneNumber(value) {
    // throw new Error("Invalid phone number.");
    if (value.length !== 10) {
      this._phoneNumber = "Invalid phone number.";
      return;
    }
    this._phoneNumber = value;
  }
}

new Contact("Leabua", "0810765950");
new Contact("Leabua", "083567");

console.table(Contact.allContacts);
// don't touch below this line

export { Contact };
