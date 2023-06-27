import { Stack, Typography } from "@mui/material";
import React from "react";
import { Task } from "./Task";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";

export const TaskList = ({ tasks, boardId }) => {
  return (
    <Stack sx={{ width: 550 }}>
      {tasks.length > 0 && (
        <Typography
          variant="h5"
          color="primary.dark"
          textAlign="center"
          marginBottom={2}
        >
          Your Tasks
        </Typography>
      )}
      {tasks.length === 0 && (
        <Typography variant="h6" color="primary.dark" textAlign="left">
          No Tasks !! Start typing tasks here
          <PanToolAltIcon />
        </Typography>
      )}
      <Stack
        spacing={2}
        direction="column"
        sx={{ width: 550, minHeight: 350 }}
        alignItems="center"
      >
        {tasks.map((task) => (
          <Task task={task} boardId={boardId} />
        ))}
      </Stack>
    </Stack>
  );
};
