export const generateRandomString = () => {
  return Math.floor(Math.random() * Date.now()).toString(36);
};

export const createNewBoard = (number) => {
  return {
    id: generateRandomString(),
    name: `Board ${number}`,
    tasks: [],
  };
};

export const createNewTask = (task) => {
  return {
    id: generateRandomString(),
    done: false,
    ...task,
  };
};
