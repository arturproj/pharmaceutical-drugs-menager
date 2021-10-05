export function decreasingExpiresIN(days = 0) {
  return days - 1;
}

export function checkBenefitValue(benefit) {
  return 0 < benefit < 50;
}

export function decreasingBenefit(drug, settings) {
  if (checkBenefitValue(drug.benefit)) {
    // console.log("decreasing benefit", drug.name);
    if (drug.expiresIn > 0) {
      drug.benefit = drug.benefit - settings.beforeExpired;
    } else {
      drug.benefit = drug.benefit - settings.afterExpired;
    }
  }
  return drug.benefit > 0 ? drug.benefit : 0;
}

export function increasingBenefit(drug, settings) {
  if (checkBenefitValue(drug.benefit)) {
    // console.log("increasing benefit", drug.name);
    if (drug.expiresIn > 0) {
      drug.benefit = drug.benefit + settings.beforeExpired;
    } else {
      drug.benefit = drug.benefit + settings.afterExpired;
    }
  }
  return drug.benefit < 50 ? drug.benefit : 50;
}

export const classifyPharmacy = {
  "magic pill": {
    mutable: false,
  },
  doliprane: {
    mutable: "decreasing",
    mutableAfterExpired: true,
    beforeExpired: 1,
    afterExpired: 2,
  },
  "herbal tea": {
    mutable: "increasing",
    mutableAfterExpired: true,
    beforeExpired: 1,
    afterExpired: 2,
  },
  fervex: {
    mutable: "increasing",
    mutableAfterExpired: false,
    beforeExpired: 1,
    afterExpired: 0,
  },
  dafalgan: {
    mutable: "decreasing",
    mutableAfterExpired: true,
    beforeExpired: 2,
    afterExpired: 4,
  },
};
