import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import TableContent from './TableContent';
import './App.scss';

const tr = { fontSize: '20px' };
class DrugDetails extends React.Component {
  constructor(){
    super();
    this.state={
      selectedOption: 'option1'
    };
  }
  handleChange(e, arg) {
    console.log('arg handlechange', arg)
    this.setState({
      selectedOption: e.target.value
    }, () => console.log('selectedOption', this.state.selectedOption));
  }
  handleFormSubmit(e) {
    e.preventDefault();
    console.log('You have selected:', this.state.selectedOption);
  }
  render() {
    return(
        <div>
          <form onSubmit={(e) => this.handleFormSubmit(e)}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={this.state.selectedOption === 'option1'}
                  onChange={(e,arg) => this.handleChange(e,arg)}
                />
                Option 1
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={this.state.selectedOption === 'option2'}
                  onChange={(e,arg) => this.handleChange(e,arg)}
                />
                Option 2
              </label>
            </div>
          </form>
        </div>  
    )
  }
}
export default DrugDetails;
