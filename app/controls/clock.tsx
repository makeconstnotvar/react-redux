import * as React from "react";

class Clock extends React.Component<any, any> {

  state = {
    date: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let date = new Date();
    this.setState({date});
  }

  render() {
    return (
      <div>Время {this.state.date.toLocaleTimeString()}</div>
    );
  }
}

export {Clock}