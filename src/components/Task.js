import React from "react";
import { Checkbox, Stack, Typography, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import {
  removeTask,
  setLoaderStatus,
  updateTaskStatus,
} from "../store/actions/BoardActions";
import { useDispatch } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useTheme } from "@mui/material/styles";

export const Task = ({ task, boardId }) => {
  const theme = useTheme();
  const { taskName, taskDescription, taskDone, taskId } = task;
  const dispatch = useDispatch();

  const handleTaskDone = () => {
    // dispatch(setLoaderStatus(true));
    dispatch(updateTaskStatus(boardId, taskId, !taskDone));
  };

  const handleRemoveTask = () => {
    // dispatch(setLoaderStatus(true));
    dispatch(removeTask(boardId, taskId));
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        border: "1px solid " + theme.palette.secondary.main,
        alignItems: "center",
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: "15px",
        width: "100%",
      }}
    >
      <Stack direction="row" flexGrow={3} sx={{ paddingLeft: 2 }}>
        <Accordion
          sx={{
            width: "100%",
            background: theme.palette.common.white,
            boxShadow: "none",
          }}
        >
          <AccordionSummary sx={{ padding: 0, textAlign: "left" }}>
            <Typography variant="p" color="primary.main">
              {taskName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left", padding: 0 }}>
            <Typography variant="p" color="text.primary">
              {taskDescription}
            </Typography>
          </AccordionDetails>
        </Accordion>
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
