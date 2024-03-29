import React from "react";
import { useQuery } from "react-query";
import MultipleSelect from "../../components/MultipleSelect";
import { fetchAPI } from "../../services/API";
import { filterUniqueById } from "../../services/helper";
import VisualForm from "../../components/Ui_Layout/VisualForm";
import {
  DefaultBackgroundTheme,
  LoadingSpiner,
  MakeStylesAnimation,
  WrapperMuiSelect,
} from "../../components/Ui_Layout/Visual.style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CircularProgress, Typography } from "@mui/material";
import { MOCKDATA } from "../../store";

const Home = () => {
  const { data, isLoading, isError } = useQuery("apiData", fetchAPI);

  if (isLoading) {
    return (
      <LoadingSpiner>
        <CircularProgress color="primary" />
      </LoadingSpiner>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  const filteredData = filterUniqueById(data);

  return (
    <div>
      <DefaultBackgroundTheme>
        <VisualForm />

        <WrapperMuiSelect>
          <AccountCircleIcon />
          <MultipleSelect data={filteredData} />
        </WrapperMuiSelect>

        <MakeStylesAnimation>
          <p>{MOCKDATA.nickname} </p>
        </MakeStylesAnimation>
      </DefaultBackgroundTheme>
    </div>
  );
};

export default Home;
