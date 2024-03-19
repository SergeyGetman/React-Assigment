import styled from "styled-components";
import { Box } from "@mui/system";
import Logo from "./../../images/logo.jpg";
import { palette } from "../../theme/palette";
import theme from "../../theme/theme";

export const MuiBaseInputViewContentContainer = styled(Box)(({}) => ({
  display: "flex",
  margin: "0 auto",
  height: "300px",
  backgroundImage: `url(${Logo})`,
  backgroundRepeat: "no-repeat",



}));

export const DefaultBackgroundTheme = styled(Box)(() => ({
  backgroundColor: palette.case.neutral.n700,
  animation: "$move 5s infinite",

  "@keyframes move": {
    from: {
      transform: "scale(.8)",
      opacity: 1,
    },
    to: {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const DefaultBackgroundHome = styled(Box)(() => ({
  backgroundColor:  palette.case.neutral.n900,
  height: "100%"
}));


export const MakeStylesAnimation = styled(Box)(() => ({
  animatedItem: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
  },
  animatedItemExiting: {
    animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
    transform: "translateY(-200%)"
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 1,
      transform: "translateY(0)"
    },
    "100%": {
      opacity: 0,
      transform: "translateY(-200%)"
    }
  }
}));


export const  LoadingSpiner = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
}));

export const  WrapperMuiSelect = styled(Box)(() => ({
  width: "60%",
  backgroundColor: palette.case.cyan.c400,
  position: "relative",
  margin: "20px auto",
}));