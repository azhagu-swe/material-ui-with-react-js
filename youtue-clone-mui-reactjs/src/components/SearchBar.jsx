import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "../assets/svg/search-status.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../src/index.css";
const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        display: "flex",
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <Paper sx={{ borderRadius: 20, display: "flex" }}>
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <img
            src={SearchIcon}
            alt="button"
            style={{
              fill: "#ccc",
            }}
          />
        </IconButton>
        <input
          className="search-bar"
          placeholder="Search....."
          value=""
          onChange={() => {}}
        />
      </Paper>
    </Paper>
  );
};

export default SearchBar;
