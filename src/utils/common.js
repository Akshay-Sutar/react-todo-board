export const generateRandomString = () => {
  return Math.floor(Math.random() * Date.now()).toString(36);
};

export const createNewBoard = (boardName, boardId, tasksCount) => {
  return {
    boardId: boardId,
    boardName: boardName,
    tasks: [],
    tasksCount,
  };
};

export const createNewTask = (task) => {
  return {
    taskId: task.taskId,
    taskDone: task.taskDone,
    taskName: task.taskName,
    taskDescription: task.taskDescription,
  };
};
