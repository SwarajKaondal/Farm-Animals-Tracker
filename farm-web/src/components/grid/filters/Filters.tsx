import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, Typography } from "@mui/material";
import React from "react";

export const Filters = (props: any) => {
  const { filters, handleFilterValueChange } = props;
  return (
    <Stack direction="row" spacing={2} style={{ justifyContent: "center", paddingBottom: "17px" }}>
      {Object.keys(filters).map((filterName) => {
        const filter = filters[filterName];
        return (
          <Paper
            key={filterName}
            elevation={filter.active ? 5 : 3}
            style={{
              paddingBottom: 16,
              paddingLeft: 16,
              paddingRight: 16,
              background: filter.active ? "rgba(243, 172, 18, 0.2)" : undefined,
              border: filter.active ? "2px solid rgba(243, 172, 18, 0.7)" : undefined,
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="Card-drop-down">{filter.label}</InputLabel>
                  <Select
                    value={filter.selectedValue}
                    onChange={(e) => handleFilterValueChange(filter, e.target.value)}
                    style={{ fontSize: "0.9rem" }}
                    MenuProps={{ style: { fontSize: "0.9rem" } }}
                  >
                    {filter.options.map((option: string) => (
                      <MenuItem key={filterName} value={option}>
                        {option !== "" ? option : <em>None</em>}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ marginTop: 10 }}>
                  {filter.total}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Stack>
  );
};
