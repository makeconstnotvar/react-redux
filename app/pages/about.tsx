import * as React from "react";
import {actions} from '../actions/actions';
import {Testik} from "../controls/testik";

class AboutPage extends React.Component<any,any> {

  handleName(event) {
    actions.changeName(event.target.value)
  }

  render() {
    let {name} = this.state.base;
    return (
      <div>
        <h2>About</h2>
        <div>
          <label htmlFor="введите текст:"/>
          <input className="form-control mb-10" type="text" name="name" value={name} onChange={this.handleName}/>
          <div>Введенный текст: "<Testik text={name}/>"</div>
        </div>
      </div>
    );
  }
}

export {AboutPage}