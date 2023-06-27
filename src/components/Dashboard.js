import { Container, Typography, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BoardList } from "./BoardList";
import { Board } from "./Board";
import { fetchBoards, setLoaderStatus } from "../store/actions/BoardActions";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.board.loading || false);
  const boards = useSelector((state) => state.board.boards);
  const selectedBoard = useSelector((state) => state.board.selectedBoard);

  const [expanded, setExpanded] = useState("board-panel");

  const handleAccordianChange = (panel) => {
    setExpanded(panel);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(setLoaderStatus(true));
    dispatch(fetchBoards());
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        {loading && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="primary" />
          </Backdrop>
        )}
        <Stack sx={{ bgcolor: "#FFFFFF", height: "100vh" }}>
          <Stack>
            <Typography variant="h5" color="primary.main" sx={{ padding: 2 }}>
              Task Meister
            </Typography>
          </Stack>

          <Accordion
            expanded={expanded === "board-panel"}
            onChange={handleChange("board-panel")}
          >
            <AccordionSummary
              aria-controls="board-panelbh-content"
              id="board-panelbh-header"
            ></AccordionSummary>
            <AccordionDetails>
              <BoardList
                boards={boards}
                handleAccordianChange={handleAccordianChange}
              />
            </AccordionDetails>
          </Accordion>

          {selectedBoard && (
            <Stack sx={{ flexGrow: 1 }}>
              <Accordion
                expanded={expanded === "tasks-panel"}
                onChange={handleChange("tasks-panel")}
              >
                <AccordionSummary
                  aria-controls="tasks-panelbh-content"
                  id="tasks-panelbh-header"
                ></AccordionSummary>
                <AccordionDetails>
                  {selectedBoard && (
                    <Board
                      handleAccordianChange={handleAccordianChange}
                      board={selectedBoard}
                    />
                  )}
                </AccordionDetails>
              </Accordion>
            </Stack>
          )}
        </Stack>
      </Container>
    </>
  );
};
