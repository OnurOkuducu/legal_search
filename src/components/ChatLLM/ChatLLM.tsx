import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const ChatLLM: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    setInputText("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now(),
        text: "This is a bot response.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          mt: 2,
        }}
      >
        <List
          sx={{ flexGrow: 1, overflowY: "auto", p: 2 }}
          ref={messagesEndRef}
        >
          {messages.map((message) => (
            <ListItem
              key={message.id}
              sx={{
                justifyContent:
                  message.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: 1,
                  backgroundColor:
                    message.sender === "user"
                      ? "primary.light"
                      : "secondary.light",
                  maxWidth: "70%",
                }}
              >
                <Typography variant="body1">{message.text}</Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, backgroundColor: "background.default" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="primary" onClick={sendMessage} edge="end">
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default ChatLLM;
