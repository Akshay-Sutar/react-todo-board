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
    case BOARD_CONSTANTS.FETCH_BOARDS:
      let boards = payload.map((board) => {
        return createNewBoard(board.boardName, board.boardId, board.tasksCount);
      });
      newState = { selectedBoard, boards: boards };
      return newState;

    case BOARD_CONSTANTS.CREATE_BOARD:
      const newBoard = createNewBoard(payload.boardName, payload.boardId);
      newState.boards = [...newState.boards, newBoard];

      return newState;

    case BOARD_CONSTANTS.CREATE_TASK:
      const { boardId, task } = payload;
      board = state.boards.find((board) => board.boardId === boardId);
      board.tasks = [...board.tasks, createNewTask(task)];
      board.tasksCount = board.tasksCount + 1;

      newState = { ...state, selectedBoard: { ...board } };
      return newState;

    case BOARD_CONSTANTS.UPDATE_TASK_STATUS:
      const { taskId, status } = payload;
      board = state.boards.find((board) => board.boardId === payload.boardId);
      selectedTask = board.tasks.find((task) => task.taskId === taskId);
      selectedTask.done = status;

      newState = { ...state, selectedBoard: { ...board } };

      return newState;

    case BOARD_CONSTANTS.DELETE_TASK:
      board = state.boards.find((board) => board.boardId === payload.boardId);
      board.tasks = board.tasks.filter(
        (task) => task.taskId !== payload.taskId
      );
      board.tasksCount = board.tasksCount - 1;

      newState = { ...state, selectedBoard: { ...board } };

      return newState;

    case BOARD_CONSTANTS.FETCH_TASKS:
      selectedBoard = state.boards.find(
        (board) => board.boardId === payload.boardId
      );
      selectedBoard.tasks = payload.tasks.map((task) => createNewTask(task));
      newState = { ...state, selectedBoard };
      return newState;

    default:
      return state;
  }
};
