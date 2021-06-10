import React from "react";

import Categories from "./Categories";

import { Grid, GridRow } from "semantic-ui-react";
import EmployerList from "../pages/EmployerList";
import JobSeeker from "../pages/JobSeekerList";
import { Route } from "react-router";
import JobSeekerDetail from "../pages/JobSeekerDetail";
import CartDetail from "../pages/CartDetail";


export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <Grid.Column width={4}>
              <Categories/>
          
          </Grid.Column>
          <Grid.Column width={12}>
          <Route exact path ="/" component={JobSeeker}/>
          <Route exact path ="/jobSeeker" component={JobSeeker}/>
          <Route exact path ="/jobSeeker/:id" component={JobSeekerDetail}/>
          <Route exact path="/cart" component={CartDetail} />
          
          </Grid.Column>
        </GridRow>
      </Grid>
     
     
    </div>
  );
}
