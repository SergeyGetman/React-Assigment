import styled from "styled-components";
import { Box } from "@mui/system";
import Logo from "./../../images/logo.jpg";
import { palette } from "../../theme/palette";
import theme from "../../theme/theme";

export const MuiBaseInputViewContentContainer = styled(Box)(({}) => ({
  height: "20vh",
}));

export const DefaultBackgroundTheme = styled(Box)(() => ({
  backgroundImage: `url(${Logo})`,
  backgroundRepeat: "no-repeat",
  backgroundColor: palette.case.backdrop.dark,
  backgroundPosition: "bottom",
  padding: "0",
  margin: "0",
  animation: "slideDown 5s ease-in-out forwards",

  "@keyframes slideDown": {
    "0%": {
      opacity: 0,
      transform: "translateY(-1000px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

export const DefaultBackgroundHome = styled(Box)(() => ({
  backgroundColor: palette.case.neutral.n900,
  height: "12vh",
}));

export const MakeStylesAnimation = styled(Box)(() => ({
  height: "20px",
  top: "0",
  color: "#ede8ec",
  animation: "$myEffectExit",
  fontSize: "35px",
  fontWeight: "700",
  textAlign: "center",
  fontFamily: "math",
  position: "fixed",
  margin: "5px",

  // animatedItem: {
  //   animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
  // },
  // animatedItemExiting: {
  //   animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
  //   opacity: 0,
  //   transform: "translateY(-200%)",
  // },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 1,
      transform: "translateY(0)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
  },
}));

export const LoadingSpiner = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "10vh",
}));

export const WrapperMuiSelect = styled(Box)(() => ({
  width: "60%",
  position: "sticky",
  margin: "120px auto",
  top: 0,

  border: "3px solid 'palette.case.cyan.c400'",

  "& > img ": {
    background: palette.case.contrast.black,
    height: "150px",
  },
}));

export const GraddienList = styled(Box)(() => ({
  position: "absolute",
  bottom: "50%",

  "&: > ": {
    background: palette.case.contrast.black,
    height: "50px",
  },
}));
