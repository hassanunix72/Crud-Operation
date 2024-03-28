import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Create = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    isMarried: false,
  });

  const getData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const naviagation = () => {
    navigate("/read");
  };

  const updateData = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://66015d8587c91a11641aaeb4.mockapi.io/users/${formData.id}`,
        formData
      )
      .then(() => {
        alert("Data has been updated");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to send data. Please try again later.");
      });
  };

  useEffect(() => {
    setFormData(location.state.data);
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
      <form onSubmit={updateData}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6">Update Info</Typography>
          <TextField
            label="Enter Name"
            name="name"
            onChange={getData}
            value={formData.name}
            fullWidth
            required
            sx={{ margin: "10px 0" }}
          />
          <TextField
            label="Enter Age"
            type="number"
            name="age"
            value={formData.age}
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
            color="success"
            sx={{ margin: "10px 0", padding: " 5px 35px", width: "120px" }}>
            Update
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
