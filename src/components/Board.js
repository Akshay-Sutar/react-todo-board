import React from "react";
import { Stack, Typography } from "@mui/material";
import { NewTask } from "./NewTask";
import { TaskList } from "./TaskList";

export const Board = ({ board }) => {
  const { id, tasks, name } = board;
  return (
    <Stack
      alignItems="center"
      sx={{
        margin: 2,
        padding: 2,
        background: "lightblue",
      }}
    >
      <Typography variant="f3">{name}</Typography>
      <NewTask boardId={id} />
      <TaskList boardId={id} tasks={tasks} />
    </Stack>
  );
};
