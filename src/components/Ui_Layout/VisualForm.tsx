import React from "react";
import { Avatar, Box, CircularProgress } from "@mui/material";

import LinearProgress from "@mui/material/LinearProgress";

import {
  DefaultBackgroundTheme,
  GraddienList,
  MuiBaseInputViewContentContainer,
} from "./Visual.style";
import Stack from "@mui/material/Stack";
import Linears from "../Linears/Linears";

const VisualForm = () => {
  return (
    <>
      <MuiBaseInputViewContentContainer>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
        </Stack>

        <Linears color={"secondary"} />
      </MuiBaseInputViewContentContainer>
    </>
  );
};

export default VisualForm;
