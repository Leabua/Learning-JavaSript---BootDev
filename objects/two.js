const campaign = {
  campaignName: "Spring",
  senderName: "Hans",
  messageCount: 420,
};

function addID(campaign) {
  return (campaign.id = campaign.campaignName + "-" + campaign.senderName);
}

const result = addID(campaign);
console.log(result);

// don't touch below this line

export { addID };
