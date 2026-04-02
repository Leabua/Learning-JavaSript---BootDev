const campaign = {
  name: "Jurassic Campaign",
  messageCount: 100,
  creator: {
    firstName: "Ian",
    lastName: "Malcolm",
    createdAt: "2023-10-01T09:00:00+00:00",
  },
};

function getCampaignCreator(campaign) {
  return campaign.creator.firstName;
}
console.log(getCampaignCreator(campaign));

campaign.creator.firstName = "Leabua";
console.log(getCampaignCreator(campaign));

export { getCampaignCreator };
