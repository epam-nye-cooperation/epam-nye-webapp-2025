/**
 * 1. feladat
 * Adott egy számokat tartalmazó tömb.
 * Térjünk vissza egy tömbbel, aminek első eleme a pozitív elemek számát adja, míg második eleme a negatív számok összegét vissza.
 * A 0 sem negatív, sem pozitív.
 * Ha a bemenet üres tömb, vagy null, térjünk vissza egy üres tömbbel.
 * A példa elvárt kimenet: [10, -65];
 */
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]; // => [10, -65]
const input2 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]; // [8, -50]

const count = (arr) => {
  if (!arr?.length) {
    return [];
  }
  return [
    arr.filter(isPositive).length,
    sum(arr.filter(isNegative)),
  ];
};

const isPositive = (item) => item > 0;
const isNegative = (item) => item < 0;
const sum = (arr) => arr.reduce((total, item) => total + item, 0);

console.log(count(input));
console.log(count(null));