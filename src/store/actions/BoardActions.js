import { BOARD_CONSTANTS } from "../constants/BoardConstants";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const setLoaderStatus = (status) => {
  return async (dispatch) => {
    dispatch({
      type: BOARD_CONSTANTS.SET_LOADING,
      payload: status,
    });
  };
};

export const fetchBoards = () => {
  return async (dispatch) => {
    const res = await axios.get(`${SERVER_URL}/boards`);

    dispatch({
      type: BOARD_CONSTANTS.FETCH_BOARDS,
      payload: res.data,
    });
  };
};

export const createBoard = (no) => {
  return async (dispatch) => {
    const res = await axios.post(`${SERVER_URL}/board`, {
      boardName: `Board ${no}`,
    });
    const { boardName, boardId } = res.data;
    dispatch({
      type: BOARD_CONSTANTS.CREATE_BOARD,
      payload: { boardName, boardId },
    });
  };
};

export const updateBoard = (boardName, boardId) => {
  return async (dispatch) => {
    await axios.post(`${SERVER_URL}/update-board`, {
      boardName: boardName,
      boardId: boardId,
    });

    dispatch({
      type: BOARD_CONSTANTS.UPDATE_BOARD,
      payload: { boardId, boardName },
    });
  };
};

export const deleteBoard = (boardId) => {
  return async (dispatch) => {
    dispatch({ type: BOARD_CONSTANTS.CREATE_BOARD, payload: boardId });
  };
};

export const fetchTasks = (boardId) => {
  return async (dispatch) => {
    const res = await axios.get(`${SERVER_URL}/tasks/${boardId}`);

    dispatch({
      type: BOARD_CONSTANTS.FETCH_TASKS,
      payload: { boardId, tasks: res.data },
    });
  };
};

export const createTask = (boardId, { taskName, taskDescription }) => {
  return async (dispatch) => {
    const res = await axios.post(`${SERVER_URL}/task`, {
      boardId,
      taskName,
      taskDescription,
    });
    const { taskId } = res.data;
    const task = {
      taskId,
      taskName,
      taskDescription,
    };

    dispatch({ type: BOARD_CONSTANTS.CREATE_TASK, payload: { boardId, task } });
  };
};

export const updateTaskStatus = (boardId, taskId, status) => {
  return async (dispatch) => {
    await axios.post(`${SERVER_URL}/update-task`, {
      taskId,
      status,
    });

    dispatch({
      type: BOARD_CONSTANTS.UPDATE_TASK_STATUS,
      payload: { boardId, taskId, status },
    });
  };
};

export const removeTask = (boardId, taskId) => {
  return async (dispatch) => {
    const res = await axios.post(`${SERVER_URL}/remove-task`, {
      boardId,
      taskId,
    });

    if (res.data.success) {
      dispatch({
        type: BOARD_CONSTANTS.DELETE_TASK,
        payload: { boardId, taskId },
      });
    }
  };
};
