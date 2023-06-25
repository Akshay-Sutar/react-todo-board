import React from "react";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { createBoard, selectBoard } from "../store/actions/BoardActions";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

export const BoardList = ({ boards }) => {
  const dispatch = useDispatch();
  const addNewBoard = () => {
    dispatch(createBoard());
  };

  const showBoardTasks = (id) => {
    dispatch(selectBoard(id));
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{
          background: "#caf0f8",
          padding: 2,
        }}
      >
        {boards.map((board, index) => (
          <Grid key={index} item>
            <Paper
              sx={{
                height: 100,
                width: 100,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              onClick={(e) => showBoardTasks(board.id)}
            >
              <Typography variant="h6">{board.name}</Typography>
              <Typography variant="subtitle2">
                {board.tasks.length} Tasks
              </Typography>
            </Paper>
          </Grid>
        ))}
        <Grid key={boards.length} item>
          <Paper
            sx={{
              height: 100,
              width: 100,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            onClick={addNewBoard}
          >
            <Button>
              <LibraryAddIcon />
            </Button>
            <Typography>Create new Board</Typography>
          </Paper>
        </Grid>
      </Stack>
    </>
  );
};
