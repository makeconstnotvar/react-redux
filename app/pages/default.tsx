import * as React from "react";
import {actions} from '../actions/actions';
import {Progress} from '../controls/progress'
import {Clock} from "../controls/clock";

class DefaultPage extends React.Component<any, any> {

  componentDidMount() {
    actions.loadTestData()
  }

  render() {
    let {progress, status = ''} = this.state.base;
    return (
      <div>
        <h2>Index <Progress progress={progress}/></h2>
        <div>
          test: {status}
        </div>
        <Clock/>
      </div>
    );
  }
}

export {DefaultPage}
