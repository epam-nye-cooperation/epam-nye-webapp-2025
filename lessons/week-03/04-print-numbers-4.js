const printNumber = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Your number:", num);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });

const countToThree = async () => {
  await printNumber(1);
  await printNumber(2);
  await printNumber(3);
};

countToThree();
