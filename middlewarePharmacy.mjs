// export const classifyPharmacy = JSON.parse(
//   fs.readFileSync("settingsDrugs.json", "utf8")
// );

export const classifyPharmacy = {
  "magic pill": {
    mutable: false,
  },
  doliprane: {
    mutable: "decreasing",
    benefitAfterExpired: true,
    beforeExpired: (days) => 1,
    afterExpired: 2,
  },
  "herbal tea": {
    mutable: "increasing",
    benefitAfterExpired: true,
    beforeExpired: (days) => 1,
    afterExpired: 2,
  },
  fervex: {
    mutable: "increasing",
    benefitAfterExpired: false,
    beforeExpired: (days) => {
      if (days <= 10) {
        return 2;
      }
      if (days <= 5) {
        return 3;
      }
      return 1;
    },
    afterExpired: 0,
  },
  dafalgan: {
    mutable: "decreasing",
    benefitAfterExpired: true,
    beforeExpired: (days) => 2,
    afterExpired: 4,
  },
};

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
      drug.benefit = drug.benefit - settings.beforeExpired(drug.expiresIn);
    } else {
      if (settings.benefitAfterExpired) {
        drug.benefit = drug.benefit - settings.afterExpired;
      } else {
        drug.benefit = 0;
      }
    }
  }
  return drug.benefit > 0 ? drug.benefit : 0;
}

export function increasingBenefit(drug, settings) {
  if (checkBenefitValue(drug.benefit)) {
    // console.log("increasing benefit", drug.name);

    if (drug.expiresIn > 0) {
      drug.benefit = drug.benefit + settings.beforeExpired(drug.expiresIn);
    } else {
      if (settings.benefitAfterExpired) {
        drug.benefit = drug.benefit + settings.afterExpired;
      } else {
        drug.benefit = 0;
      }
    }
  }
  return drug.benefit < 50 ? drug.benefit : 50;
}
