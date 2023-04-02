const pollBtn = document.querySelector(".pollBtn");

const poll = {
  question: "What is your favorite programming language",
  options: ["0: JavaScript", "1:Ruby", "2: Rust", "3: Python"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const validInput = ["JavaScript", "Ruby", "Rust", "Python"];
    let poll = prompt(
      `What is your favorite programming language ? \n 
      0: JavaScript",
      1: Ruby",
      2: Rust",
      3: Python`
    );
    if (!validInput.includes(poll)) {
      return;
    }
    this.answers[validInput.indexOf(poll)] =
      this.answers[validInput.indexOf(poll)] + 1;
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type) {
    if (type === "string") {
      console.log(`Poll results is : ${this.answers.join(",")}`);
    }
    console.log(this.answers);
  },
};

pollBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));
