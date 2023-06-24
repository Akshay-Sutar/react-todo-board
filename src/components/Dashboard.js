import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { BoardList } from "./BoardList";
import { Board } from "./Board";

export const Dashboard = () => {
  const boards = useSelector((state) => state.board.boards);
  const selectedBoard = useSelector((state) => state.board.selectedBoard);

  console.log(selectedBoard)

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#EEEEEE", height: "100vh" }}>
          <Typography variant="h4">Dashboard</Typography>
          <BoardList boards={boards} />
          {selectedBoard && <Board board={selectedBoard} />}
        </Box>
      </Container>
    </>
  );
};
