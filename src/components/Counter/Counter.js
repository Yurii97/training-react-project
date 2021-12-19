import React from 'react';
import Controls from './Controls';

export default class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
      </div>
    );
  }
}
