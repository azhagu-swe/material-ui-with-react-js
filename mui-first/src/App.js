import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Feed } from "./components/Feed";
import Navbar from "./components/Navbar";
import { RightBar } from "./components/RightBar";
import Sidbar from "./components/Sidbar";

function App() {
  return (
    <Box>
      {/* navbar */}
      <Navbar />
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Sidbar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;