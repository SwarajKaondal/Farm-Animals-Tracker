import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Table } from "./grid/Table";
import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Header } from "./header/Header";
import { GridApi } from "ag-grid-community";
import { Graph } from "./graph/Graph";
import { MapComponent } from "./map/Map";
import { getMovements } from "../reducers/movementReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IRootReducer } from "../reducers/rootReducer";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const Home = (props: { email: String; loggedIn: Boolean; setLoggedIn: any }) => {
  const [value, setValue] = React.useState(0);
  const [gridApi, setGridApi] = useState<GridApi | undefined>(undefined);
  const loginObj = useSelector((state: IRootReducer) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovements());
  }, []);

  useEffect(() => {
    if (!loginObj.loggedIn) {
      navigate("/login");
    }
  }, [loginObj.loggedIn, navigate]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOnSearch: FormEventHandler<HTMLDivElement> = (event: FormEvent<HTMLDivElement>) => {
    //@ts-ignore
    gridApi?.setQuickFilter(event.target.value);
  };

  return (
    <div>
      <Header onSearch={handleOnSearch} />
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", height: "100%" }}>
        <Tabs orientation="vertical" value={value} onChange={handleChange} sx={{ borderRight: 1, borderColor: "divider" }}>
          <Tab label="Table View" />
          <Tab label="Graph View" />
          <Tab label="Map View" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Table gridApi={gridApi} setGridApi={setGridApi} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Graph />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MapComponent />
        </TabPanel>
      </Box>
    </div>
  );
};
