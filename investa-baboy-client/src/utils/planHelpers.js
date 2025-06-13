import planSettings from '../config/planConfig';


const planRoiRates = {
  Starter: 0.5,
  Grower: 0.55,
  Premium: 0.6,
  Pro: 0.6,
  Elite: 0.6,
  Diamond: 0.6,
};

export const getActivePlanTotals = (plans) => {
  const { pigletPrice, otherCosts, fixedWeight, pricePerKilo } = planSettings;

  let pigs = 0;
  let totalCost = 0;
  let totalProfit = 0;

  plans.forEach(plan => {
    const planKey = plan.planName?.split(' ')[0] || 'Starter'; // fallback for dummy data
    const roiRate = planRoiRates[planKey] || 0.5;
    const pigCount = plan.pigs;

    const cost = (pigletPrice + otherCosts) * pigCount;
    const revenue = fixedWeight * pricePerKilo * pigCount;
    const netProfit = revenue - cost;

    pigs += pigCount;
    totalCost += cost;
    totalProfit += netProfit * roiRate;
  });

  return {
    pigs,
    totalCost,
    totalProfit,
  };
};
