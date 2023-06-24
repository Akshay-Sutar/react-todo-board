import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { createTask } from "../store/actions/BoardActions";
import { useDispatch } from "react-redux";

export const NewTask = ({ boardId }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskName(e.target.value);

    if (e.target.value.length > 0) {
      setShowDescription(true);
    } else {
      setShowDescription(false);
    }
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const createTaskHandler = () => {
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
          <TextField
            label=""
            variant="outlined"
            value={taskName}
            onChange={handleChange}
            placeholder="What you want to do today?"
            sx={{ width: "100%" }}
          />
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
          <Button
            variant="contained"
            sx={{ width: 250 }}
            onClick={createTaskHandler}
          >
            Create Task
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};
