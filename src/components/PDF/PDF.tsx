import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { pdfjs, Document, Page } from "react-pdf";
import pdfFile from "./tumrly.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const PDF = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const handlePreviousPage = () => {
    setIsLoading(true);
    setPageNumber((prev) => Math.max(prev - 1, 1));
    setIsLoading(false);
  };

  const handleNextPage = () => {
    setIsLoading(true);
    setPageNumber((prev) => Math.min(prev + 1, numPages || Infinity));
    setIsLoading(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: "#f5f5f5",
        maxWidth: "100%",
        mx: "auto",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => {
            console.error("Error loading PDF:", error);
            setIsLoading(false);
          }}
        >
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 300, // reduced height for loading indicator
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Page
              key={pageNumber} // force re-render when pageNumber changes
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              scale={0.7} // reduced scale for smaller size
              sx={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)", mb: 2 }}
            />
          )}
        </Document>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Page {pageNumber} of {numPages}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIos />}
            onClick={handlePreviousPage}
            disabled={pageNumber <= 1 || isLoading}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIos />}
            onClick={handleNextPage}
            disabled={pageNumber >= numPages || isLoading}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default PDF;
