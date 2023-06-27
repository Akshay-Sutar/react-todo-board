import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { createTask } from "../store/actions/BoardActions";
import { useDispatch } from "react-redux";

export const NewTask = ({ boardId }) => {
  const [error, setError] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskName(e.target.value);

    if (e.target.value.length > 0) {
      setError(false);
      setShowDescription(true);
    } else {
      setShowDescription(false);
    }
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const createTaskHandler = () => {
    if (taskName.length === 0) {
      setError(true);
      return false;
    }

    setTaskName("");
    setTaskDescription("");
    setShowDescription(false);
    dispatch(
      createTask(boardId, {
        taskName,
        taskDescription,
      })
    );
  };

  return (
    <Stack direction="row" justifyContent="center">
      <Box
        sx={{
          width: 550,
        }}
      >
        <Stack direction="column" spacing={2} alignItems="center">
          <Stack direction="row" sx={{ width: "100%" }} spacing={1}>
            <TextField
              className={
                error
                  ? "animate__animated animate__shakeX"
                  : "animate__animated "
              }
              label=""
              variant="outlined"
              value={taskName}
              onChange={handleChange}
              placeholder="What you want to do today?"
              error={error}
              //helperText={error ? "Enter a task first !!" : ""}
              sx={{
                flexGrow: 1,
              }}
            />
            <Button variant="contained" onClick={createTaskHandler}>
              Create Task
            </Button>
          </Stack>

          {showDescription && (
            <TextField
              label=""
              variant="outlined"
              value={taskDescription}
              onChange={handleDescriptionChange}
              multiline
              rows={1}
              placeholder="A description perhaps to add context "
              sx={{ width: "100%" }}
            />
          )}
        </Stack>
      </Box>
    </Stack>
  );
};
