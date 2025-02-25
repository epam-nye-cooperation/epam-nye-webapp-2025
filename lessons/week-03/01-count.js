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
    return [];
};

console.log(count(input));
console.log(count(null));