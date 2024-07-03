import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  Container,
  CircularProgress,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { pdfjs, Document, Page } from "react-pdf";
import ChatLLM from "../../components/ChatLLM/ChatLLM";
import PDF from "../../components/PDF/PDF";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function MyPDF() {
  return (
    <Grid
      container
      style={{
        height: "90%",
        marginBottom: 20,
        marginTop: 20,
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={1}
        style={{ backgroundColor: "#1E0342", marginRight: 10 }}
      />
      <Grid item xs={6}>
        <PDF />
      </Grid>
      <Grid item xs={3} style={{ backgroundColor: "#1E0342", marginLeft: 10 }}>
        <ChatLLM />
      </Grid>
    </Grid>
  );
}
