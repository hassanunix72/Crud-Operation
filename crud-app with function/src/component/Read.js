import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteAPI, getAPI } from "../config/axiosAPI";
const Read = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const getData = () => {
    getAPI(setApiData);
  };
  // Update Function
  const editButton = (data) => {
    navigate("/update", { state: { data } });
    console.log(data);
  };
  //Delete Function
  const deleteButton = (id) => {
    deleteAPI(id, getData);
  };
  const navigateToAddData = () => {
    navigate("/");
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6">Data Collection</Typography>
      {apiData.map((data, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            <Grid
              container
              maxWidth={"lg"}
              alignContent="center"
              sx={{
                margin: "5px",
                padding: "5px",
                borderRadius: "5px",
                boxShadow: 3,
              }}>
              <Grid item lg={1} sx={{ marginLeft: "15px" }}>
                <Typography variant="h6">{index + 1} : </Typography>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6">Name: {data.name}</Typography>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6">Age: {data.age}</Typography>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6">
                  Married: {data.isMarried ? "Yes" : "No"}
                </Typography>
              </Grid>
              <IconButton
                sx={{ margin: "0 5px" }}
                onClick={() => editButton(data)}>
                <EditIcon color="primary" />
              </IconButton>
              <IconButton
                sx={{ margin: "0 5px" }}
                onClick={() => deleteButton(data.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </Grid>
          </Box>
        );
      })}
      <Button
        onClick={navigateToAddData}
        variant="contained"
        color="secondary"
        sx={{ margin: "10px", width: "62%" }}>
        Add Data
      </Button>
    </Box>
  );
};

export default Read;
