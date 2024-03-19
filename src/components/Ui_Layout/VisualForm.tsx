import React from "react";
import {Avatar, Box, CircularProgress, LinearProgress} from "@mui/material";



import {
  DefaultBackgroundTheme,
  MuiBaseInputViewContentContainer,
} from "./Visual.style";

const VisualForm = () => {
  return (
    <>
      <MuiBaseInputViewContentContainer>
        <DefaultBackgroundTheme>Hi there</DefaultBackgroundTheme>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>

          <LinearProgress color="secondary"/>



        </Box>
      </MuiBaseInputViewContentContainer>
    </>
  );
};

export default VisualForm;
