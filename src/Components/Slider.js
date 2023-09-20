// Slider.js

import React, { Component } from 'react';
import '../Styles/slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || 0,
    };
  }

  handleSliderChange = (event) => {
    const newValue = parseFloat(event.target.value);
    this.setState({ value: newValue });

    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  };

  render() {
    const { min, max, step } = this.props;
    const { value } = this.state;

    return (
      <div className="slider-container">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={this.handleSliderChange}
          className="slider"
        />
        <span className="slider-value">{value}</span>
      </div>
    );
  }
}

export default Slider;
