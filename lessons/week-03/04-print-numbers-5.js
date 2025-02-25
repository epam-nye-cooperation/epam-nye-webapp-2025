const printNumber = (num) =>
  new Promise((resolve, reject) => {
    const wait = Math.floor(Math.random() * 100) + 1;
    setTimeout(() => {
      console.log("Your number:", num);
      resolve({num, wait});
    }, wait);
  }
);

const count = () => {
  return Promise.all([
    printNumber(1),
    printNumber(2),
    printNumber(3),
  ]);
};

(async () => {
  try {
    const [number1, number2, number3] = await count();
    console.log(
      "all done",
      { number1, number2, number3 }
    );
  } catch (error) {
    console.error("error", error);
  }
})();
