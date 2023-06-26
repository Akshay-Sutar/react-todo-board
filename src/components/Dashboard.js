import { Container, Typography, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BoardList } from "./BoardList";
import { Board } from "./Board";
import { fetchBoards } from "../store/actions/BoardActions";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.boards);
  const selectedBoard = useSelector((state) => state.board.selectedBoard);

  useEffect(() => {
    dispatch(fetchBoards());
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Stack sx={{ bgcolor: "#FFFFFF", height: "100vh" }}>
          <Stack sx={{}}>
            <Typography variant="h4" sx={{ color: "#0d4771", padding: 2 }}>
              Task Meister
            </Typography>
          </Stack>
          <BoardList boards={boards} />
          {selectedBoard && <Board board={selectedBoard} />}
        </Stack>
      </Container>
    </>
  );
};
