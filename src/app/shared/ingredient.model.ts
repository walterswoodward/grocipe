// export class Ingredient {
//   public name: string;
//   public amount: number;

//   constructor(name: string, amount: number) {
//     this.name = name;
//     this.amount = amount;
//   }
// }

export class Ingredient {
  // Prepending an accessor ("public") is valid shorthand (in TypeScript) for the above
  constructor(public name: string, public amount: number) {}
}
