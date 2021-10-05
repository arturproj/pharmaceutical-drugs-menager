import {
  classifyPharmacy,
  decreasingExpiresIN,
  decreasingBenefit,
  increasingBenefit,
} from "./middlewarePharmacy.mjs";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {

    this.drugs = this.drugs.map((drug) => {
      drug.expiresIn = decreasingExpiresIN(drug.expiresIn);

      // drug verification enabled for benefit recalculation
      switch (classifyPharmacy[drug.name.toLowerCase()].mutable) {
        case "increasing":
          drug.benefit = increasingBenefit(
            drug,
            classifyPharmacy[drug.name.toLowerCase()]
          );
          break;

        case "decreasing":
          drug.benefit = decreasingBenefit(
            drug,
            classifyPharmacy[drug.name.toLowerCase()]
          );
          break;

        case false:
          // console.log("not mutable");
          break;
      }

      return drug;
    });

    return this.drugs;
  }
}
