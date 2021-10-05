import { Drug, Pharmacy } from "../pharmacy.mjs";
import { expect } from "chai";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    let value1 = new Pharmacy([
      new Drug("Doliprane", 2, 3),
    ]).updateBenefitValue();
    let value2 = [new Drug("Doliprane", 1, 2)];
    expect(value1).to.deep.include.members(value2);
  });

  it("should increase the benefit and expiresIn", () => {
    let value1 = new Pharmacy([
      new Drug("Herbal Tea", 2, 3),
    ]).updateBenefitValue();
    let value2 = [new Drug("Herbal Tea", 1, 4)];
    expect(value1).to.deep.include.members(value2);
  });
});
