function seo(numbers) {
  let b = numbers.filter((el) => typeof el === "number");
  let c = b.reduce((sum, curr) => (sum + curr) / b.length);
  return c;
}
console.log(seo([4, 16, "25", "Bob"]));

function doMath(x, znak, y) {
  if (znak == "+") {
    console.log(x + y);
  } else if (znak == "-") {
    console.log(x - y);
  } else if (znak == "*") {
    console.log(x * y);
  } else if (znak == "/") {
    console.log(x / y);
  } else if (znak == "%") {
    console.log(x % y);
  } else if (znak == "^") {
    console.log(x ** y);
  }
}

const x = Number(prompt("Введіть перше число"));
const y = Number(prompt("Введіть друге число"));
const znak = prompt(
  "Введіть математичну операцію: +, -, *, /, %, ^ (ступінь )"
);

doMath(x, znak, y);

const oneArray = prompt("Введіть довжину першого масивів");
const twoArray = prompt("Введіть довжину другого масивів");
const threeArray = [];
function newArray(oneArray, twoArray) {
  for (let i = 0; i < oneArray; i++) {
    const oneNumArray = [];
    for (let j = 0; j < twoArray; j++) {
      const inputArray = prompt(`Введіть значенн внутрішніх масивів ${j}`);
      oneNumArray.push(inputArray);
    }
    threeArray.push(oneNumArray);
  }
  return threeArray;
}
console.log(newArray(oneArray, twoArray));

function delet(str, arr) {
  let ars = str.split("");
  ars.forEach(function (item, index) {
    ars = ars.filter((item) => {
      return item !== arr[index];
    });
  });

  return ars.join("");
}
console.log(delet("hello world", ["l", "d"]));
