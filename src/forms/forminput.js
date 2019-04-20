import React from 'react';

export default class FormInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleChange2(event) {
        this.setState({value: event.target.value});
      }
  
    render() {
      return (
    
              <label>
                {this.props.label}
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>

      );
    }
  }