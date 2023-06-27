import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeObj } from "./utils/theme";

const theme = createTheme(themeObj);

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
