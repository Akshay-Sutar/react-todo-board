import React from "react";
import { Button, Grid, Icon, Paper, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { createBoard, fetchTasks } from "../store/actions/BoardActions";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

export const BoardList = ({ boards }) => {
  const dispatch = useDispatch();
  const addNewBoard = () => {
    dispatch(createBoard(boards.length + 1));
  };

  const showBoardTasks = (boardId) => {
    dispatch(fetchTasks(boardId));
  };

  return (
    <Stack>
      <Typography>Your Boards</Typography>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{
          // background: "#caf0f8",
          padding: 2,
        }}
      >
        {boards.map((board, index) => (
          <Stack key={index} item>
            <Paper
              sx={{
                height: 120,
                width: 120,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              onClick={(e) => showBoardTasks(board.boardId)}
            >
              <Stack
                direction="column"
                sx={{
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography variant="h6">{board.boardName}</Typography>
                <Typography variant="p">{board.tasksCount} Tasks</Typography>
              </Stack>
            </Paper>
          </Stack>
        ))}
        <Stack key={boards.length} item>
          <Paper
            sx={{
              height: 120,
              width: 120,
              backgroundColor: "#0d4771",
              color: "#fff",
            }}
            onClick={addNewBoard}
          >
            <Stack
              direction="column"
              sx={{
                height: "100%",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Icon>
                <LibraryAddIcon />
              </Icon>
              <Typography variant="p">Create new Board</Typography>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </Stack>
  );
};
