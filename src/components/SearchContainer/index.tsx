import * as React from "react";
import { lazy, useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { Box, Container, IconButton } from "@mui/material";
import {
  StyledGrid,
  StyledCard,
  StyledTypography,
  DescriptionTypography,
} from "./styles"; // Importing the styled components
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
//const Container = lazy(() => import("../../common/Container"));
import { styled } from "@mui/system";

const SpacedSpan = styled("span")`
  margin-left: 0.5rem;
  user-select: text;
`;
// Define the props type
interface SearchContainerProps {
  key: number;
  daire: string;
  esasNo: string;
  karar: string;
  kararNo: string;
  html: string;
}

const SearchContainer: React.FC<SearchContainerProps> = ({
  key,
  daire,
  esasNo,
  karar,
  kararNo,
  html,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [expandedHeight, setExpandedHeight] = useState(0);

  const handleCardClick = () => {
    if (cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const scrollOffset =
        window.pageYOffset || document.documentElement.scrollTop;
      const cardTop = cardRect.top + scrollOffset;
      const viewportHeight = window.innerHeight;

      if (isExpanded) {
        const scrollToY = cardTop - (viewportHeight / 2 - 100); // Adjust based on your layout
        window.scrollTo({
          top: scrollToY,
          behavior: "smooth",
        });
      }

      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Container sx={{ padding: 1.5 }}>
      <StyledGrid item xs={12} md={6}>
        <Box component="a">
          <StyledCard
            ref={cardRef}
            sx={{
              display: "flex",
              height: isExpanded ? "100%" : "200px",
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Grid container spacing={0.5} sx={{ mb: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <Typography component="p">
                      <span>Daire:</span>
                      <SpacedSpan>{daire}</SpacedSpan>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <Typography component="p">
                      <span>Esas No:</span>
                      <SpacedSpan>{esasNo}</SpacedSpan>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <Typography component="p">
                      <span>Karar No:</span>
                      <SpacedSpan>{kararNo}</SpacedSpan>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              {
                <DescriptionTypography>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </DescriptionTypography>
              }
            </CardContent>
            <Box
              display="flex"
              justifyContent="center"
              mt={2}
              sx={{ backgroundColor: "#B6BBC4", mt: 0 }}
              onClick={handleCardClick}
            >
              {isExpanded ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center" /* Center horizontally */,
                    alignItems: "center" /* Center vertically */,
                    backgroundColor: "transparent",
                    color: "black",
                    height:
                      "100%" /* Ensure the Box takes up the full height of its container */,
                  }}
                >
                  <ExpandLessIcon />
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center" /* Center horizontally */,
                    alignItems: "center" /* Center vertically */,
                    backgroundColor: "transparent",
                    color: "black",
                    height:
                      "100%" /* Ensure the Box takes up the full height of its container */,
                  }}
                >
                  <ExpandMoreIcon />
                </Box>
              )}
            </Box>
          </StyledCard>
        </Box>
      </StyledGrid>
    </Container>
  );
};
export default SearchContainer;
/*

  {summary ? (
                splitArray ? (
                  splitArray.map((result: string, index: number) => (
                    <DescriptionTypography>{result}</DescriptionTypography>
                  ))
                ) : (
                  <DescriptionTypography>
                    No summary available.
                  </DescriptionTypography>
                )
              ) : (
                //<DescriptionTypography>{karar}</DescriptionTypography>
                <DescriptionTypography>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </DescriptionTypography>
              )}
  */
