import React from "react";
import { Icon, Paper, Stack, Typography, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { createBoard, fetchTasks } from "../store/actions/BoardActions";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { useTheme } from "@mui/material/styles";

export const BoardList = ({ boards, handleAccordianChange }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const addNewBoard = () => {
    dispatch(createBoard(boards.length + 1));
  };

  const showBoardTasks = (boardId) => {
    handleAccordianChange("tasks-panel");
    dispatch(fetchTasks(boardId));
  };

  return (
    <Stack flexDirection="column" spacing={2} sx={{ padding: 2 }}>
      <Typography variant="h4" color="primary.dark">
        Your Boards
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Paper
          elevation={3}
          className="my-card"
          sx={{
            height: 120,
            width: 120,
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            margin: 1,
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
        {boards.map((board, index) => (
          <Paper
            elevation={3}
            className="my-card"
            sx={{
              height: 120,
              width: 120,
              backgroundColor: "#fff",
              margin: 1,
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
        ))}
      </Grid>
    </Stack>
  );
};
