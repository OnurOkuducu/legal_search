import React, { useState } from "react";
import AddKeyword from "../../components/AddKeyword";
import { Container, Textarea, Button } from "./styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList"; // Import the filter icon

const SearchBar = ({
  onSearch,
}: {
  onSearch: (query: string, keyword: string[]) => void;
}) => {
  const [query, setQuery] = useState("");

  const [open, setOpen] = useState(false);
  const [keywords, setKeywords] = useState([""]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleKeywordChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newKeywords = [...keywords];
    newKeywords[index] = event.target.value;
    setKeywords(newKeywords);
  };

  const handleAddKeyword = () => {
    setKeywords([...keywords, ""]);
  };

  const handleKeywordSearch = () => {
    // Implement your keyword search logic here
    console.log(
      "Keywords:",
      keywords.filter((keyword) => keyword.trim() !== ""),
    );
    handleClose();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const keywordList = keywords.filter((keyword) => keyword.trim() !== "");
    onSearch(query, keywordList);
  };

  return (
    <Container>
      <Textarea
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // Align items vertically centered
          gap: "100px",
        }}
      >
        <IconButton
          onClick={handleClickOpen}
          sx={{
            backgroundColor: "#F6F5F5",
            color: "black",
            "&:hover": { backgroundColor: "gray" },
            borderRadius: "50%", // Makes the IconButton circular
            width: 50, // Width of the IconButton
            height: 50, // Height of the IconButton
            padding: 0, // Remove default padding
          }}
          aria-label="Filter"
        >
          <FilterListIcon />
        </IconButton>
        <Button onClick={handleSearch}>Emsal Karar Ara</Button>
      </div>
      <AddKeyword
        open={open}
        handleClose={handleClose}
        keywords={keywords}
        handleKeywordChange={handleKeywordChange}
        handleAddKeyword={handleAddKeyword}
        handleKeywordSearch={handleKeywordSearch}
      />
    </Container>
  );
};

export default SearchBar;
