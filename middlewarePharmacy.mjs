export const classifyPharmacy = {
  // clasification only for not mutable benefit
  notMutable: ["Magic Pill"],

  // clasification only for decreasing benefit
  mutableDecreasing: [],

  // clasification only for increasing benefit
  mutableIncreasing: ["Herbal Tea"],
};



export function decreasingExpiresIN(days = 0) {
  return days - 1;
}

export function decreasingBenefitWithExpires(
  benefit = 0,
  days = 0,
  decreasing = 1
) {
  if (days > 0) {
    benefit = benefit - decreasing;
  } else {
    decreasing = decreasing * 2;
    benefit = benefit - decreasing;
  }

  return benefit > 0 ? benefit : 0;
}

export function icreasingBenefitWithExpires(
  benefit = 0,
  days = 0,
  increasing = 1
) {
  if (days > 0) {
    benefit = benefit + 1;
  } else {
    increasing = increasing * 2;
    benefit = benefit + increasing;
  }

  return benefit < 50 ? benefit : 50;
}
