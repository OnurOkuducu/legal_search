import { lazy, useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  Container,
  Pagination,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

import {
  handleNewSearch,
  handleNewLoadMore,
  SearchPageHandleNewSearh,
} from "../../crud/functions";
import { CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // You can replace this with your binocular icon
import axios from "axios";
import FilterListIcon from "@mui/icons-material/FilterList"; // Import the filter icon
import AddKeyword from "../../components/AddKeyword";
const SearchContainer = lazy(() => import("../../components/SearchContainer"));
const Search = lazy(() => import("../../components/SearchBar"));

const backend_domain = process.env.REACT_APP_BACKEND_DOMAIN || "default";
const captcha_key = process.env.REACT_APP_CAPTCHA_KEY || "default";

//const Container = lazy(() => import("../../common/Container"));
interface Payload {
  daire: string;
  esasNo: string;
  karar: string;
  kararNo: string;
  html: string;
}

interface Result {
  id: number;
  order_value: null | number;
  payload: Payload;
  score: number;
  vector: null | number[];
  version: number;
}

interface Results {
  _id: string;
  _index: string;
  score: number;
  _source: Payload;
}

interface LocationState {
  searchData: {
    query: string;
    results: Results[];
    keywords: string[];
  };
}

const SearchResults = () => {
  const location = useLocation();
  const history = useHistory();

  const state = location.state as LocationState;
  const prev_query = state.searchData.query;
  const searchData = state.searchData.results;

  const [currentResults, setCurrentResults] = useState(searchData);
  const [query, setQuery] = useState(prev_query);
  const [currentPage, setCurrentPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [keywords, setKeywords] = useState(state.searchData.keywords);
  const [loading, setLoading] = useState(false);

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSearch = async () => {
    setLoading(true);
    const deneme = await SearchPageHandleNewSearh(
      query,
      keywords,
      captchaToken,
    );
    setLoading(false);
    setCurrentResults(deneme);
    setCurrentPage(0);
    const requestCount = parseInt(
      localStorage.getItem("requestCount") || "0",
      10,
    );
    localStorage.setItem("requestCount", (requestCount + 1).toString());
  };
  useEffect(() => {
    const requestCountString = localStorage.getItem("requestCount") || "0";
    console.log(requestCountString);
    const requestCount = parseInt(requestCountString, 10); // Convert string to number
    if (requestCount === 0 || requestCount % 6 === 0) {
      setShowCaptcha(true);
    }

    if (loading) {
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 5000); // clear loading state after 2 seconds
    }
  }, [loading]);

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    setShowCaptcha(false);
  };

  const handleDialogClose = (
    event: React.MouseEvent,
    reason: "backdropClick" | "escapeKeyDown",
  ) => {
    if (reason !== "backdropClick") {
      setShowCaptcha(false);
    }
  };
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress
          size="10rem"
          style={{ marginTop: 200, marginBottom: 400 }}
        />
      </div>
    );
  }

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

  const handleLoadMore = async () => {
    const requestCount = parseInt(
      localStorage.getItem("requestCount") || "0",
      10,
    );

    const newPageNum = currentPage + 10;
    const results = await handleNewLoadMore(
      prev_query,
      state.searchData.keywords,
      captchaToken,
      newPageNum,
    );
    setCurrentPage(currentPage + 10);
    localStorage.setItem("requestCount", (requestCount + 1).toString());
    setCurrentResults((prevResults) => [...prevResults, ...results]);
  };

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setQuery(event.target.value);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 4,
          mb: 2,
        }}
      >
        <TextField
          fullWidth
          defaultValue={query}
          value={query}
          onChange={handleTextFieldChange}
          sx={{
            mr: 6,
            ml: 6,
            backgroundColor: "white",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Box display="flex" gap={1}>
                  <IconButton onClick={handleClickOpen}>
                    <FilterListIcon />
                  </IconButton>
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </Box>
              </InputAdornment>
            ),
          }}
        />
        <Dialog open={showCaptcha} onClose={handleDialogClose}>
          <DialogContent>
            <ReCAPTCHA sitekey={captcha_key} onChange={onCaptchaChange} />
          </DialogContent>
        </Dialog>
      </Box>
      {currentResults ? (
        currentResults.map((result: Results, index: number) => (
          <SearchContainer
            key={index}
            daire={result._source.daire}
            esasNo={result._source.esasNo}
            karar={result._source.karar}
            kararNo={result._source.kararNo}
            html={result._source.html}
          />
        ))
      ) : (
        <p>No search data available.</p>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          mb: 2,
        }}
      >
        <Button variant="contained" color="primary" onClick={handleLoadMore}>
          Load More
        </Button>
      </Box>
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

export default SearchResults;
