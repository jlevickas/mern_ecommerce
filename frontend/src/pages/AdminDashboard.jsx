import React from "react";
import { Paper, Grid, Typography, Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <div className="sidebar">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper>
              <Typography variant="h4">Admin Dashboard</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Button variant="contained" component={Link} to="products">
                Admin Products
              </Button>
              <Button variant="contained" component={Link} to="users">
                Admin Users
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
export default AdminDashboard;
