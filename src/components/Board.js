import React, { useState } from "react";
import { Stack, Typography, TextField, Button } from "@mui/material";
import { NewTask } from "./NewTask";
import { TaskList } from "./TaskList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { setLoaderStatus, updateBoard } from "../store/actions/BoardActions";

export const Board = ({ board, handleAccordianChange }) => {
  const { boardId, tasks, boardName } = board;
  const [editBoard, setEditBoard] = useState(false);
  const [error, setError] = useState(false);
  const [newBoardName, setNewBoardName] = useState(boardName);

  const dispatch = useDispatch();

  const onBackClick = () => {
    handleAccordianChange("board-panel");
  };

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setError(false);
    }
    setNewBoardName(e.target.value);
  };

  const updateBoardName = (e) => {
    if (newBoardName.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
    setEditBoard(false);
    dispatch(setLoaderStatus(true));
    dispatch(updateBoard(newBoardName, boardId));
  };

  return (
    <Stack
      alignItems="stretch"
      flexGrow={1}
      sx={{
        padding: 2,
        background: "#FBFBFD",
      }}
      spacing={2}
    >
      <Stack
        direction="row"
        flexGrow={1}
        alignItems="center"
        spacing={1}
        sx={{ width: "100%", justifyContent: "center", position: "relative" }}
      >
        <ArrowBackIcon
          sx={{ position: "absolute", left: 0 }}
          onClick={onBackClick}
        />
        {!editBoard && (
          <>
            <Typography variant="h6" color="primary.dark">
              {boardName}
            </Typography>
            <EditIcon
              color="primary.dark"
              fontSize="small"
              sx={{ width: "0.8em" }}
              onClick={(e) => setEditBoard(true)}
            />
          </>
        )}
        {editBoard && (
          <Stack direction="row" spacing={1}>
            <TextField
              className={
                error
                  ? "animate__animated animate__shakeX"
                  : "animate__animated "
              }
              value={newBoardName}
              onChange={handleChange}
              error={error}
              placeholder="Board Name"
            />
            <Button variant="contained" onClick={updateBoardName}>
              Update
            </Button>
          </Stack>
        )}
      </Stack>
      <NewTask boardId={boardId} />
      <TaskList boardId={boardId} tasks={tasks} />
    </Stack>
  );
};
