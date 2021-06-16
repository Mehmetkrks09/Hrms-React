import React from "react";

import Categories from "./Categories";

import { Grid, GridRow } from "semantic-ui-react";

import JobSeeker from "../pages/JobSeekerList";
import { Route } from "react-router";
import JobSeekerDetail from "../pages/JobSeekerDetail";
import CartDetail from "../pages/CartDetail";

import JobList from "../pages/JobList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobAd from "../pages/JobAd";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route
              exact
              path={"/jobAdvertisementList"}
              component={JobAdvertisementList}
            />
            <Route exact path={"/jobList"} component={JobList} />
            <Route exact path={"/jobAdd"} component={JobAd} />
            <Route exact path="/" component={JobSeeker} />
            <Route exact path="/jobSeeker" component={JobSeeker} />
            <Route exact path="/jobSeeker/:id" component={JobSeekerDetail} />
            <Route exact path="/cart" component={CartDetail} />
          </Grid.Column>
        </GridRow>
      </Grid>
    </div>
  );
}
