import { XORShift } from 'random-seedable';

export class Randomizer {
  // See https://www.npmjs.com/package/random-seedable for usages.
  private readonly generator;

  constructor(seed?: number) {

    if (seed == undefined) {
      this.generator = new XORShift()
    } else {
      this.generator = new XORShift(seed);
    }
    console.log("Initialized");
  }

  next(inclusiveMax: number): number {
    return this.generator.randRange(0, inclusiveMax);
  }

  getRandomElementsFromArray<T>(array: T[], elementsToPick: number): T[]{
    const result: T[] = []

    while (array.length >= 1 && elementsToPick > 0) {
      const randomIndex = this.next(array.length - 1);
      result.push(array[randomIndex]);
      array.splice(randomIndex, 1);
      elementsToPick -= 1;
    }

    return result
  }
}
