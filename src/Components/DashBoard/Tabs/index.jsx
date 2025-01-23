import * as React from "react";
import { useState } from "react";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, List, ThemeProvider } from "@mui/material";
import Grid from "../Grid";
import ListComponent from "../ListComponent";
import "./style.css";


export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9", // Custom primary color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.map((item, i) => {
              return (
                <ListComponent coin={item} key={i}/>
              );
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
