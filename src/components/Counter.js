import React, { Component } from 'react';

export default class Counter extends Component {
  /* ... */

  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement(evt) {
    console.log('Increment button was clicked!', evt); // работает
    console.log('this.props: ', this.props); // Error: cannot read props of undefined
    this.step++;
  }

  handleDecrement(evt) {
    // ...
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
