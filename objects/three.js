const campaign = {
  name: "Welcome Campaign",
  messageCount: 100,
  creator: {
    firstName: "Tim",
    lastName: "Murphy",
    createdAt: "2023-10-01T09:00:00+00:00",
  },
  location: {
    region: "North America",
  },
};

function getRegion(campaign) {
  return (campaign.region = campaign.location?.region);
}
console.log(getCampaignCreator(campaign));

console.log(getRegion(campaign));
export { getRegion };
