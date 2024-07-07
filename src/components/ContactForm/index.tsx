import { Row, Col } from "antd";
import { lazy, useState, useEffect } from "react";

import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
//import { Button } from "../../common/Button";
//import Block from "../Block";
//import Input from "../../common/Input";
//import TextArea from "../../common/TextArea";
import { TextField, Button, Box, Typography } from "@mui/material";

import { ContactContainer, Span } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors } = useForm(validate);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between">
        <Col lg={12} md={11} sm={24} xs={24} style={{ paddingTop: 50 }}>
          <Slide direction="left" triggerOnce>
            <div style={{ color: "white", maxWidth: "700px" }}>
              <Typography variant="h2" component="h2" sx={{ color: "white" }}>
                {title}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                style={{ marginTop: "16px", color: "white" }}
              >
                {content}
              </Typography>
            </div>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Box sx={{ mt: 4 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Ad Soyad"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white", // Text color
                  },
                  "& .MuiInputLabel-root": {
                    color: "white", // Label color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Outline color
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // Hover outline color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // Focused outline color
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "white", // Placeholder color
                    opacity: 0.7,
                  },
                }}
              />
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white", // Text color
                  },
                  "& .MuiInputLabel-root": {
                    color: "white", // Label color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Outline color
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // Hover outline color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // Focused outline color
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "white", // Placeholder color
                    opacity: 0.7,
                  },
                }}
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Mesaj"
                name="message"
                multiline
                value={formData.message}
                onChange={handleChange}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "100px",
                    color: "white", // Text color
                  },
                  "& .MuiInputLabel-root": {
                    color: "white", // Label color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Outline color
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // Hover outline color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // Focused outline color
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "white", // Placeholder color
                    opacity: 0.7,
                  },
                }}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Send
              </Button>
            </form>
          </Box>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
