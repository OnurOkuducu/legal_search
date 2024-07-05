import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const StyledGrid = styled(Grid)`
  padding: 10px; /* Adding a 10px margin */
  user-select: text;
`;

export const StyledCard = styled(Card)`
  display: flex;
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  user-select: text;

  transition:
    transform 0.2s,
    box-shadow 0.2s,
    height 0.3s ease; /* Smooth transition for height */

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
  }
`;

export const StyledTypography = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem; /* Adjusted font size */
  color: #333; /* Darker text color */
  margin-bottom: 0.5rem; /* Spacing below the text */
  user-select: text;
`;
export const DescriptionTypography = styled(Typography)`
  font-size: 0.875rem; // Smaller size for descriptions
  color: #000;
  padding-bottom: 1rem; /* Spacing below the text */
  user-select: text;
`;
