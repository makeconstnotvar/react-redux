import * as React from 'react'
import {renderToString} from 'react-dom/server';
import {AboutPage} from "./pages/about";
import {DefaultPage} from "./pages/default";
import {Layout} from "./controls/layout";
import {StaticRouter, Route, Switch} from "react-router-dom";

function render(url, initialState) {

  let html = renderToString(
    <StaticRouter location={url}>
      <Layout>
        <Switch>
          <Route path='/' exact component={DefaultPage}/>
          <Route path='/about' component={AboutPage}/>
        </Switch>
      </Layout>
    </StaticRouter>
  );
  return html;

}

function getHtml(url) {


  let html = `
  <!DOCTYPE html>
  <html lang="ru">
  <head>
      <base href="/">
      <title>React Flux boilerplate</title>
      <meta charset="UTF-8">
      <link rel="icon" href="/favicon/apple-icon.png">
      <link rel="stylesheet" href="/styles/bootstrap-typo.css">
      <link rel="stylesheet" href="/styles/common.css">
  </head>
  <body>
  <div id="root">${render(url,{})}</div>
  <script src="app.js"></script>
  </body>
  </html>
  `;

  return html;
}


export default getHtml;