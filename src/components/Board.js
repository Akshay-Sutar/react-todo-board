import React from "react";
import { Stack, Typography } from "@mui/material";
import { NewTask } from "./NewTask";
import { TaskList } from "./TaskList";

export const Board = ({ board }) => {
  const { id, tasks, name } = board;
  return (
    <Stack
      alignItems="center"
      flexGrow={1}
      sx={{
        padding: 2,
        background: "#FBFBFD",
      }}
      spacing={2}
    >
      <Typography variant="f3">{name}</Typography>
      <NewTask boardId={id} />
      <TaskList boardId={id} tasks={tasks} />
    </Stack>
  );
};
