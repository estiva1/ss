import "./App.css";

import Box from "@mui/material/Box";

import Navbar from "./components/navbar/navbar.component";
import SidebarComponent from "./components/sidebar/sidebar.component";
import Guide from "./components/guide/guide.component";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <div style={{display: "flex", flexDirection: "row"}}>
        <SidebarComponent />
        <Guide />
      </div>
    </Box>
  );
}

export default App;
