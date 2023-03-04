import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

import { ColorModeContext, useMode } from "./theem";

import Topbar from "./scenes/global/Topbar";
import SidebarMenu from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ProSidebarProvider>
            <SidebarMenu />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/team" element={<Team />}></Route>
                <Route path="/contacts" element={<Contacts />}></Route>
                <Route path="/invoices" element={<Invoices />}></Route>
                <Route path="/form" element={<Form />}></Route>
                <Route path="/calendar" element={<Calendar />}></Route>
                {/* <Route path="/faq" element={<Dashboard />}></Route> */}
                {/* <Route path="/pie" element={<Dashboard />}></Route> */}
                {/* <Route path="/bar" element={<Dashboard />}></Route> */}
                {/* <Route path="/line" element={<Dashboard />}></Route> */}
                {/* <Route path="/geography" element={<Dashboard />}></Route> */}
              </Routes>
            </main>
          </ProSidebarProvider>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
