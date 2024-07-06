import React, { useState, useEffect } from "react";
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
import { Circle } from "@mui/icons-material"; // Or any other icons you prefer

import { CaptchaVerification } from "../../crud/functions";
import ReCAPTCHA from "react-google-recaptcha";
import FilterListIcon from "@mui/icons-material/FilterList"; // Import the filter icon

const backend_domain = process.env.REACT_APP_BACKEND_DOMAIN || "default";
const captcha_key = process.env.REACT_APP_CAPTCHA_KEY || "default";

const SearchBar = ({
  onSearch,
}: {
  onSearch: (query: string, keyword: string[], captcha: string | null) => void;
}) => {
  const [query, setQuery] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [open, setOpen] = useState(false);
  const [keywords, setKeywords] = useState([""]);

  useEffect(() => {
    const requestCountString = localStorage.getItem("requestCount") || "0";
    const requestCount = parseInt(requestCountString, 10); // Convert string to number
    if (requestCount === 0 || requestCount % 6 === 0) {
      setShowCaptcha(true);
    }
  }, []);

  const getColor = () => {
    if (query.length < 20) {
      return "red";
    } else if (query.length < 40) {
      return "yellow";
    } else {
      return "green";
    }
  };

  const onCaptchaChange = async (token: string | null) => {
    setCaptchaToken(token);
    const result = await CaptchaVerification(token);
    setShowCaptcha(false);
  };

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
    handleClose();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const requestCount = parseInt(
      localStorage.getItem("requestCount") || "0",
      10,
    );

    if (requestCount === 0 || requestCount % 10 === 0) {
      setShowCaptcha(true);
      if (!captchaToken) {
        alert("Please complete the CAPTCHA");
        return;
      }
    } else {
      setShowCaptcha(false);
    }

    // Increment and store the request count
    localStorage.setItem("requestCount", (requestCount + 1).toString());

    const keywordList = keywords.filter((keyword) => keyword.trim() !== "");
    setIsSubmitting(true);
    onSearch(query, keywordList, captchaToken);
    setIsSubmitting(false);
  };

  const handleDialogClose = (
    event: React.MouseEvent,
    reason: "backdropClick" | "escapeKeyDown",
  ) => {
    if (reason !== "backdropClick") {
      setShowCaptcha(false);
    }
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
        <Dialog open={showCaptcha} onClose={handleDialogClose}>
          <DialogContent>
            <ReCAPTCHA sitekey={captcha_key} onChange={onCaptchaChange} />
          </DialogContent>
        </Dialog>
        <Button onClick={handleSearch} disabled={isSubmitting}>
          Emsal Karar Ara
        </Button>
        <IconButton style={{ padding: 0, margin: 0 }}>
          <Circle style={{ color: getColor(), fontSize: "3.5rem" }} />
        </IconButton>
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
