const campaign = {
  name: "Welcome Campaign",
  maxMessages: 33,
  sentMessages: 30,
  sendMessage() {
    if (this.maxMessages > this.sentMessages) {
      this.sentMessages++;
      return `${this.maxMessages - this.sentMessages} messages remaining `;
    }
    return "Out of messages";
  },
};

console.log(campaign);
campaign.sendMessage();
console.log(campaign.sentMessages);
campaign.sendMessage();
console.log(campaign.sentMessages);
campaign.sendMessage();
console.log(campaign.sentMessages);
campaign.sendMessage();
console.log(campaign.sentMessages);
campaign.sendMessage();
console.log(campaign.sentMessages);
// don't touch below this line

export { campaign };
