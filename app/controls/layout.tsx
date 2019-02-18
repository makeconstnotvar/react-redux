import * as React from "react";
import {Link} from "react-router-dom";

const Layout = props => {
    return (
      <div className="container">
        <h1>Основной шаблон</h1>
        <nav>
          <Link className="dashed mr-6" to="/">Главная</Link>
          <Link className="dashed mr-6" to="/list">List</Link>
          <Link className="dashed" to="/about">About</Link>
        </nav>
        <hr/>
        {props.children}
      </div>
    );
};

export {Layout}