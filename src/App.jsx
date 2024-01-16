import { Stack, CssBaseline, ThemeProvider } from "@mui/material";
import InviteModal from "./components/InviteModal";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack height="100vh" alignItems="center" justifyContent="center">
        <InviteModal />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
