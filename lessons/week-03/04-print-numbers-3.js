const printNumber = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Your number:", num);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });

const countToThree = () => {
  printNumber(1)
    .then(() => printNumber(2))
    .then(() => printNumber(3));
};

countToThree();
