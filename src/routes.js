"use strict";

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/homePage';
import PlanPage from './components/planPage';
import Category from './components/category';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/plan" component={PlanPage} />
    <Route path="/category" component={Category} />
    <Route path="/category/:id" component={Category} />
  </Route>
);