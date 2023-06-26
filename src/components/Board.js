import React from "react";
import { Stack, Typography } from "@mui/material";
import { NewTask } from "./NewTask";
import { TaskList } from "./TaskList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Board = ({ board, handleAccordianChange }) => {
  const { boardId, tasks, boardName } = board;

  const onBackClick = () => {
    handleAccordianChange("board-panel");
  };

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
      <Stack
        direction="row"
        sx={{ width: "100%", justifyContent: "center", position: "relative" }}
      >
        <ArrowBackIcon
          sx={{ position: "absolute", left: 0 }}
          onClick={onBackClick}
        />
        <Typography variant="f3">{boardName}</Typography>
      </Stack>
      <NewTask boardId={boardId} />
      <TaskList boardId={boardId} tasks={tasks} />
    </Stack>
  );
};
