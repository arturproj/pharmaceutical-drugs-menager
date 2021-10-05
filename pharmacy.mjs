import {
  classifyPharmacy,
  decreasingExpiresIN,
  decreasingBenefitWithExpires,
  icreasingBenefitWithExpires
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
    // if (
    //   this.drugs[i].name != "Herbal Tea" &&
    //   this.drugs[i].name != "Fervex"
    // ) {
    //   if (this.drugs[i].benefit > 0) {
    //     if (this.drugs[i].name != "Magic Pill") {
    //       this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //     }
    //   }
    // } else {
    //   if (this.drugs[i].benefit < 50) {
    //     this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //     if (this.drugs[i].name == "Fervex") {
    //       if (this.drugs[i].expiresIn < 11) {
    //         if (this.drugs[i].benefit < 50) {
    //           this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //         }
    //       }
    //       if (this.drugs[i].expiresIn < 6) {
    //         if (this.drugs[i].benefit < 50) {
    //           this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //         }
    //       }
    //     }
    //   }
    // }
    // if (this.drugs[i].name != "Magic Pill") {
    //   this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
    // }
    // if (this.drugs[i].expiresIn < 0) {
    //   if (this.drugs[i].name != "Herbal Tea") {
    //     if (this.drugs[i].name != "Fervex") {
    //       if (this.drugs[i].benefit > 0) {
    //         if (this.drugs[i].name != "Magic Pill") {
    //           this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //         }
    //       }
    //     } else {
    //       this.drugs[i].benefit =
    //         this.drugs[i].benefit - this.drugs[i].benefit;
    //     }
    //   } else {
    //     if (this.drugs[i].benefit < 50) {
    //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //     }
    //   }
    // }

    this.drugs = this.drugs.map((drug) => {
      // console.log(drug, !classifyPharmacy.notMutable.includes(drug.name));
      drug.expiresIn = decreasingExpiresIN(drug.expiresIn);
      // drug verification enabled for benefit recalculation
      if (!classifyPharmacy.notMutable.includes(drug.name)) {

        if (classifyPharmacy.mutableDecreasing.includes(drug.name)) {
          drug.benefit = decreasingBenefitWithExpires(drug.benefit, drug.expiresIn);
        }
        if (classifyPharmacy.mutableIncreasing.includes(drug.name)) {
          drug.benefit = icreasingBenefitWithExpires(drug.benefit, drug.expiresIn);
        }
        
      }

      return drug;
    });

    // console.log(this.drugs);

    return this.drugs;
  }
}
