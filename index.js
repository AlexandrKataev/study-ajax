const resultBlock = document.querySelector("#result");

const cliclkButton = document.querySelector("#click");

cliclkButton.addEventListener("click", makeRequest);

function makeRequest() {
  $.ajax("https://opentdb.com/api.php?amount=1", {
    success: function (data) {
      data.results.forEach((el) => {
        console.log(el);
        document.getElementById("question").innerHTML = el.question;
        document.getElementById("answer").innerHTML = el.correct_answer;
      });
    },
  });
}
