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
import CvUpdate from "../pages/CvUpdate";
import CvAdd from "../pages/CvAdd";
import EmployeeInfoUpdate from "../pages/EmployeeInfoUpdate";

import EmployerUpdate from "../pages/EmployerUpdate";

import EmployerList from "../pages/EmployerList";
import FavoriteAdList from "../pages/FavoriteAdList";
import EmployeeList from "../pages/EmployeeList";
import PhotoUpdate from "../pages/PhotoUpdate";
import CvList from "../pages/CvList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/employeeList" component={EmployeeList} />
            <Route exact path="/photoUpdate" component={PhotoUpdate} />
            <Route exact path="/favoriteList" component={FavoriteAdList} />
            <Route exact path="/employerList" component={EmployerList} />
            <Route
              exact
              path={"/employeeUpdate"}
              component={EmployeeInfoUpdate} />
            <Route exact path={"/advertisement"}component={JobAdvertisementList} />
            <Route exact path={"/employerUpdate"} component={EmployerUpdate} />
            <Route exact path={"/emp"} component={EmployeeInfoUpdate} />
            <Route exact path={"/cvAdd"} component={CvAdd} />
            <Route exact path={"/cvlist"} component={CvList} />
            <Route exact path={"/cvUpdate"} component={CvUpdate} />
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
