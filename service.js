function getQuestions(questionAmount) {
  const promise = axios.get(
    `https://opentdb.com/api.php?amount=${questionAmount}`
  );
  return promise.then((data) => {
    return data.data;
  });
}

function getTasks() {
  const promise = axios.get(`https://632a05584c626ff832cfe7bb.mockapi.io/todo`);
  return promise.then((data) => {
    return data.data;
  });
}

function createTask(title) {
  const promise = axios.post(
    `https://632a05584c626ff832cfe7bb.mockapi.io/todo`
  );
  return promise.then((data) => {
    return data.data;
  });
}
