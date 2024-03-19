import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import { LinearProgress } from "@mui/material";
import { GraddienList } from "../Ui_Layout/Visual.style";

type IChooseColor =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | string;

const Linears: FC<IChooseColor> = ({ color }: IChooseColor) => {
  console.log("WEWEWEW", color);
  return (
    <>
      <GraddienList>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <LinearProgress
            color={color}
            sx={{ color: "#be13b4", background: "#dffdff" }}
          />
          <LinearProgress
            color={color}
            sx={{ color: "#be13b4", background: "#dffdff" }}
          />
        </Stack>
      </GraddienList>
    </>
  );
};

export default Linears;
