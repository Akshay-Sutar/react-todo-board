import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
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
