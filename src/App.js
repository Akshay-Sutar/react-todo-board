import "./App.css";
import "animate.css";
import { Dashboard } from "./components/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeObj } from "./utils/theme";
import ErrorBoundary from "./components/ErrorBoundary";

const theme = createTheme(themeObj);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ErrorBoundary>
          <Dashboard />
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  );
}

export default App;
