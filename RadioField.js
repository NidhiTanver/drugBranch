import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
// import TableContent from './TableContent';
import './App.scss';

class RadioField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      selectedOption: '',
		}
	}
  render() {
  	return (
  		<div>
  		  GENERIC_NAME
  		  <form>
			    <input
            type="text"
            id="autocomplete"
            placeholder="Search for generic_name..."
            value="input field"
            onChange={(e) => this.changeName(e)}
          />
			  </form>
  		</div>
  	);
  }
}
export default RadioField;
