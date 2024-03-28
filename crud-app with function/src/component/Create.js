import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { postAPI } from "../config/axiosAPI";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: null,
    isMarried: false,
  });
  const navigate = useNavigate();

  const getData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendData = (e) => {
    e.preventDefault();

    postAPI(formData, "Data Has Been Sent >");
    e.target.reset();
  };
  const naviagation = () => {
    navigate("/read");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
      <form onSubmit={sendData}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6">Enter Info</Typography>
          <TextField
            label="Enter Name"
            name="name"
            onChange={getData}
            fullWidth
            required
            sx={{ margin: "10px 0" }}
          />
          <TextField
            label="Enter Age"
            name="age"
            type="number"
            onChange={getData}
            fullWidth
            required
            sx={{ margin: "10px 0" }}
          />
          <FormControl fullWidth sx={{ margin: "10px 0" }}>
            <InputLabel>Married ?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Married"
              name="isMarried"
              value={formData.isMarried}
              onChange={getData}>
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Button
            variant="contained"
            type="submit"
            sx={{ margin: "10px 0", padding: " 5px 35px", width: "120px" }}>
            Add
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            onClick={naviagation}
            sx={{ margin: "10px 5px", padding: " 5px 35px", width: "120px" }}>
            Data
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Create;
