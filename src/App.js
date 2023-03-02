import { ColorModeContext, useMode } from "./theem";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

import Topbar from "./scenes/global/Topbar";
import SidebarMenu from "./scenes/global/Sidebar";

import Dashboard from "./scenes/dashboard/Dashboard";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ProSidebarProvider>
            <SidebarMenu />
          </ProSidebarProvider>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              {/* <Route path="/team" element={<Dashboard />}></Route> */}
              {/* <Route path="/contacts" element={<Dashboard />}></Route> */}
              {/* <Route path="/invoices" element={<Dashboard />}></Route> */}
              {/* <Route path="/form" element={<Dashboard />}></Route> */}
              {/* <Route path="/calendar" element={<Dashboard />}></Route> */}
              {/* <Route path="/faq" element={<Dashboard />}></Route> */}
              {/* <Route path="/pie" element={<Dashboard />}></Route> */}
              {/* <Route path="/bar" element={<Dashboard />}></Route> */}
              {/* <Route path="/line" element={<Dashboard />}></Route> */}
              {/* <Route path="/geography" element={<Dashboard />}></Route> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
