const campaignMetrics = {
  sent: 1000,
  opened: 700,
  clicked: 450,
  unOpened() {
    return this.sent - this.opened;
  },
};

const calculateCampaignMetrics = (sent, opened, clicked, unOpened) => {
  const openRate = opened / sent;
  const clickRate = clicked / sent;
  const conversionRate = clicked / opened;
  const unOpenRate = unOpened / sent;
  return { openRate, clickRate, conversionRate, unOpenRate };
};

const result = calculateCampaignMetrics(
  campaignMetrics.sent,
  campaignMetrics.opened,
  campaignMetrics.clicked,
  campaignMetrics.unOpened(),
);

console.log(`Open rate: ${result.openRate}`);
console.log(`Click rate: ${result.clickRate}`);
console.log(`Conversion rate ${result.conversionRate}`);
console.log(`Un-opened rate: ${result.unOpenRate}`);

// don't touch below this line

export { calculateCampaignMetrics };
