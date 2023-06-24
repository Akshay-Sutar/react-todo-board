import { BOARD_CONSTANTS } from "../constants/BoardConstants";

export const createBoard = () => {
  return async (dispatch) => {
    dispatch({ type: BOARD_CONSTANTS.CREATE_BOARD });
  };
};

export const deleteBoard = (id) => {
  return async (dispatch) => {
    dispatch({ type: BOARD_CONSTANTS.CREATE_BOARD, payload: id });
  };
};

export const selectBoard = (id) => {
  return async (dispatch) => {
    dispatch({ type: BOARD_CONSTANTS.SELECT_BOARD, payload: id });
  };
};

export const createTask = (boardId, task) => {
  return async (dispatch) => {
    dispatch({ type: BOARD_CONSTANTS.CREATE_TASK, payload: { boardId, task } });
  };
};

export const updateTaskStatus = (boardId, taskId, status) => {
  return async (dispatch) => {
    dispatch({
      type: BOARD_CONSTANTS.UPDATE_TASK_STATUS,
      payload: { boardId, taskId, status },
    });
  };
};
