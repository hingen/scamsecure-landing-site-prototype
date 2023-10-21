import logo from "../assets/logo.png";
import { Call, DarkMode, Language, LightMode } from "@mui/icons-material";
import { Box, IconButton, Typography, useColorScheme } from "@mui/joy";
import React from "react";

const Header: React.FC = () => {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        padding: "0.5rem 1rem",
        borderBottom: "1px solid",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
          width: "100%",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            gap: "0.5rem",
          }}
        >
          <Box component="img" src={logo} height="1.5rem" />
          <Typography level="title-lg">
            <Typography color="primary">Scam</Typography>
            Secure
          </Typography>
        </Box>
        <IconButton variant="outlined">
          <Call />
        </IconButton>
        <ThemeModeButton />
        <IconButton variant="outlined">
          <Language />
        </IconButton>
      </Box>
    </Box>
  );
};

const ThemeModeButton: React.FC = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      variant="outlined"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default Header;
