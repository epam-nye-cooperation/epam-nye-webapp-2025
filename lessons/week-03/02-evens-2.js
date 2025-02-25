/**
 * Bemenetként adott egy számokat tartalmazó tömb és egy N szám
 * Adjuk vissza a tömb páros elemeinek utolsó N elemét, változatlan sorrendben.
 * Feltételezhetjük, hogy legalább N elem megfelel ennek a feltételnek.
 */
const inputs = [
  { array: [1, 2, 3, 4, 5, 6, 7, 8, 9], size: 3 }, // => [4, 6, 8]
  { array: [-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], size: 2 }, // => [-8, 26]
  { array: [6, -25, 3, 7, 5, 5, 7, -3, 23], size: 1 }, // => [6]
];

const evenLimiter = (input, size) => {
  return input
    .filter((item) => item % 2 === 0)
    .splice(-size);
};

inputs.forEach(({ array, size }) => {
  console.log(evenLimiter(array, size));
});
