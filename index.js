const resultBlock = document.querySelector("#result");
const questionAmount = document.querySelector("#question-amount");
const clickButton = document.querySelector("#click");
const getTasksClickButton = document.querySelector("#get-tasks");

updateTask("Обновленное задание", 5);

clickButton.addEventListener("click", () => {
  const promise = getQuestions(questionAmount.value);
  promise.then(onQuestionsReceived);
});

getTasksClickButton.addEventListener("click", () => {
  const promise = getTasks();
  promise.then(onTaskReceived);
});

// createTask("Закончить курс AJAX").then((data) => {
//   console.log(data);
// });

function onTaskReceived(tasks) {
  console.log(tasks);
  document.querySelector("#tasks").innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = task.title;

    document.querySelector("#tasks").appendChild(li);
  });
}

function onQuestionsReceived(data) {
  data.results.forEach((el) => {
    const div = document.createElement("div");
    div.innerHTML = el.question + "(" + el.correct_answer + ")";
    document.querySelector("body").appendChild(div);
  });
}
