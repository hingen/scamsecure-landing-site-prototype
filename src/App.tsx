import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { CssVarsProvider } from "@mui/joy";
import { CssBaseline } from "@mui/joy";

const App: React.FC = () => {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Header />
      <Main />
    </CssVarsProvider>
  );
};

export default App;
