import * as React from "react";
import "@babel/polyfill";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AboutPage} from "./pages/about";
import {DefaultPage} from "./pages/default";
import {ListPage} from "./pages/list";
import {Layout} from "./controls/layout";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/' exact component={DefaultPage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/list' component={ListPage}/>
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'));
