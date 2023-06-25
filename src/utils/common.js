export const generateRandomString = () => {
  return Math.floor(Math.random() * Date.now()).toString(36);
};

export const createNewBoard = (boardName, boardId, tasksCount) => {
  return {
    id: boardId,
    name: boardName,
    tasks: [],
    tasksCount,
  };
};

export const createNewTask = (task) => {
  return {
    id: task.id,
    done: task.done,
    taskName: task.name,
    taskDescription: task.description,
  };
};
