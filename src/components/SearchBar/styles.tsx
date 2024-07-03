import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Align items in a column */
  align-items: center;
  justify-content: center; /* Center the input and button horizontally */
  margin-bottom: 1rem; /* Add some space below the search bar */
`;

export const Textarea = styled.textarea`
  width: 100%; /* Adjust the width as needed */
  max-width: 500px; /* Add a maximum width to prevent it from becoming too wide */
  padding: 2rem;
  border-radius: 20px; /* Increase border-radius for more rounded corners */
  border: 1px solid #ccc;
  resize: vertical; /* Allow vertical resizing */
  margin-bottom: 0.5rem; /* Add margin between input and button */

  &:focus {
    background-color: #f0f0f0;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 20px; /* Match the border-radius of the textarea field */
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #062743; /* Change to your desired hover color */
  }
`;
