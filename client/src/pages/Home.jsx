import {
  Button,
  Stack,
  TextField,
  Typography,
  Box,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import Lottie from "lottie-react";
import { useState } from "react";
import animation from "../assets/loading.json";
import err from "../assets/error.json";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (prompt.length > 0) {
      setError(false);
      setLoading(true);
      await axios
        .post("http://localhost:5000/chat", { prompt })
        .then((res) => {
          setResult(res.data);
          setLoading(false);
        })
        .catch((error) => {
          if (error.response) {
            setLoading(false);
            setError(true);
            setResult(error.response.data.error.message);
          }
        });
    }
  }

  return (
    <div>
      <Stack
        sx={{ minHeight: "100vh", alignItems: "center", paddingTop: "16px" }}
      >
        <Stack
          sx={{
            width: "80%",
            gap: "8px",
            flexDirection: { xs: "column", md: "column" },
            alignItems: "flex-end",
          }}
        >
          <TextField
            variant="outlined"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            sx={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
            placeholder="Drop your Query"
            multiline
          />
          <Button
            sx={{
              width: { xs: "100%", md: "180px" },
              backgroundColor: "#19C37D",
              borderRadius: "8px",
            }}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
        </Stack>
        {result.length > 5 && (
          <Box
            sx={{
              width: "80%",
              marginTop: "16px",
              backgroundColor: "#444654",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            <Typography sx={{ color: "white" }}>{result}</Typography>
          </Box>
        )}
        <Backdrop
          sx={{ color: "#fff", zIndex: 1, marginTop: "16px" }}
          open={loading}
        >
          <Box width="50%">
            <Lottie animationData={animation} loop={true} />
          </Box>
        </Backdrop>
        {error && (
          <Box>
            <Lottie animationData={err} />
          </Box>
        )}
      </Stack>
    </div>
  );
}
