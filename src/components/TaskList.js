import { Stack, Typography } from "@mui/material";
import React from "react";
import { Task } from "./Task";

export const TaskList = ({ tasks, boardId }) => {
  return (
    <Stack sx={{ width: 550 }}>
      <Typography>Your Tasks</Typography>
      <Stack
        spacing={2}
        direction="column"
        sx={{ width: 550 }}
        alignItems="center"
      >
        {tasks.map((task) => (
          <Task task={task} boardId={boardId} />
        ))}
      </Stack>
    </Stack>
  );
};
