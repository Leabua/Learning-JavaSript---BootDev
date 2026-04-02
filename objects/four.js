const campaign = {
  /* this is an object method and not a function. 
  just has the same structure as one*/
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
  getRemainingMessages() {
    return this.maxMessages - this.sentMessages;
  },
};

const test = function () {
  while (campaign.sentMessages < campaign.maxMessages) {
    campaign.sentMessages++;
    console.log(campaign.getRemainingMessages());
  }
  console.log("Out of messages!");
};

test();
export { campaign };
