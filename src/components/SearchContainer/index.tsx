import * as React from "react";
import { lazy, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { Box, Container } from "@mui/material";
import {
  StyledGrid,
  StyledCard,
  StyledTypography,
  DescriptionTypography,
} from "./styles"; // Importing the styled components
//const Container = lazy(() => import("../../common/Container"));
import { styled } from "@mui/system";

const SpacedSpan = styled("span")`
  margin-left: 0.5rem;
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
  const [summary, setSummary] = React.useState(true);

  //const splitArray = ozet.split("##");

  const handleContainerClick = () => {
    setSummary(!summary);
  };
  return (
    <Container sx={{ padding: 1.5 }} onClick={handleContainerClick}>
      <StyledGrid item xs={12} md={6}>
        <CardActionArea component="a">
          <StyledCard sx={{ display: "flex" }}>
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
          </StyledCard>
        </CardActionArea>
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
