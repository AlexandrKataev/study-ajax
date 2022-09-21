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
    `https://632a05584c626ff832cfe7bb.mockapi.io/todo`,
    {
      title: title,
      done: false,
    }
  );
  return promise.then((data) => {
    return data.data;
  });
}

function updateTask(title, id) {
  const promise = axios.put(
    `https://632a05584c626ff832cfe7bb.mockapi.io/todo/${id}`,
    {
      title: title,
      done: true,
    }
  );
  return promise.then((data) => {
    return data.data;
  });
}

function deleteTask(id) {
  const promise = axios.delete(
    `https://632a05584c626ff832cfe7bb.mockapi.io/todo/${id}`
  );
  return promise.then((data) => {
    return data.data;
  });
}
