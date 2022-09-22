const correctAnswerS = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnwers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  userAnwers.forEach((answer, index) => {
    if (answer === correctAnswerS[index]) {
      score += 25;
    }
  });

  //console.log(score);
  scrollTo(0, 0);
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

const users = [
  { name: "fozan", premium: true },
  { name: "ali", premium: false },
];
const premium = users.filter((user) => {
  return user.premium;
});
console.log(premium);

let numbers = [1, 3, 5, 8, 45, 67, 11, 22];
numbers.reverse();
console.log(numbers);
numbers.sort();
console.log(numbers);
numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);

const products = [
  { name: "fozan", price: 30 },
  { name: "soban", price: 40 },
  { name: "afan", price: 60 },
  { name: "zeeshan", price: 70 },
  { name: "ali", price: 70 },
];

const sales = products.filter((product) => {
  return product.price > 40;
});
