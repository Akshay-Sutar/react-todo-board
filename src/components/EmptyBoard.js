import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createBoard } from "../store/actions/BoardActions";

export const EmptyBoard = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(createBoard());
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Grid
        sx={{ flexGrow: 1 }}
        container
        spacing={2}
        justifyContent="center"
        flexDirection="column"
      >
        <Grid item xs={12}>
          <Typography variant="h3">Your board is empty</Typography>
          <Button variant="contained" onClick={handleOnClick}>
            Add new Board
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
