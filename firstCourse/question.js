// process.stdin
// process.stdout

// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n");

const questions = ["what is your name? ", "prefered color? ", "ontani?"];

const ask = (i = 0) => {
  process.stdout.write(questions[i]);
  process.stdout.write(` > `);
};

ask()
var answer = [];
process.stdin.on("data", (data) => {
  answer.push(data.toString().trim());

  if (answer.length < questions.length) {
    ask(answer.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
    const [name, activity, lang] = answer

    console.log(`

    thanks ${name} ${activity} forste ${lang}

    `)
})
