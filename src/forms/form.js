import React from 'react';
import FormInput from './forminput.js'
export default class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      alert('Beeg Beeq Yoshi: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
              <FormInput label='Debt:'/>
              <FormInput label='Salary:'/>
          </form>
        </div>
    );
    
  }
}