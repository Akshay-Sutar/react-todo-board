import React from "react";
import { Checkbox, Stack, Typography, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { removeTask, updateTaskStatus } from "../store/actions/BoardActions";
import { useDispatch } from "react-redux";

export const Task = ({ task, boardId }) => {
  const { taskName, taskDescription, taskDone, taskId } = task;
  const dispatch = useDispatch();

  const handleTaskDone = () => {
    dispatch(updateTaskStatus(boardId, taskId, !taskDone));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(boardId, taskId));
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        background: "#caf0f8",
        height: 40,
        alignItems: "center",
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: "15px",
        width: "100%",
      }}
    >
      <Stack direction="row" flexGrow={3} sx={{ paddingLeft: 2 }}>
        <Typography variant="p">{taskName}</Typography>
      </Stack>
      <Stack direction="row">
        <Checkbox checked={taskDone} onChange={handleTaskDone} />
        <Button onClick={handleRemoveTask}>
          <ClearIcon color="error" />
        </Button>
      </Stack>
    </Stack>
  );
};
