import { createNewBoard, createNewTask } from "../../utils/common";
import { BOARD_CONSTANTS } from "../constants/BoardConstants";

const initState = {
  boards: [],
  selectedBoard: null,
};

export const BoardReducer = (state = initState, { type, payload }) => {
  let newState = { ...state };
  let selectedBoard = null;
  let board = null;
  let selectedTask = null;

  switch (type) {
    case BOARD_CONSTANTS.CREATE_BOARD:
      const newBoard = createNewBoard(newState.boards.length + 1);
      newState.boards = [...newState.boards, newBoard];

      return newState;

    case BOARD_CONSTANTS.SELECT_BOARD:
      selectedBoard = state.boards.find((board) => board.id === payload);

      newState = { ...state, selectedBoard };
      return newState;

    case BOARD_CONSTANTS.CREATE_TASK:
      const { boardId, task } = payload;
      board = state.boards.find((board) => board.id === boardId);
      board.tasks = [...board.tasks, createNewTask(task)];

      newState = { ...state, selectedBoard: { ...board } };
      return newState;
    case BOARD_CONSTANTS.UPDATE_TASK_STATUS:
      const { taskId, status } = payload;
      board = state.boards.find((board) => board.id === payload.boardId);
      selectedTask = board.tasks.find((task) => task.id === taskId);
      selectedTask.done = status;

      newState = { ...state, selectedBoard: board };

      return newState;
    default:
      return state;
  }
};
