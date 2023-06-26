import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#6e91aa",
      main: "#0d4771",
      dark: "#082b44",
      contrastText: "#fff",
    },
    secondary: {
      light: "#eda2c2",
      main: "#e88bb3",
      dark: "#ba6f8f",
      contrastText: "#000",
    },
    text: {
      primary: "#333",
      secondary: "#666",
    },
  },
  typography: {
    fontFamily: "DM Sans",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
