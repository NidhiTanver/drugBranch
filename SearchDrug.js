import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import RadioField from './RadioField';
import RadioField22 from './RadioField22';
import TableContent from './TableContent';
import './App.scss';

class SearchDrug extends React.Component {
  constructor(){
    super();
    this.state={
      selectedOption: 'generic_name',
      showComponent : false,
      drug_list: [],
      query: '',
    };
  }
  handleOptionChange(ev) {
    this.setState({
      selectedOption: ev.target.value
    }, () => {
      if (this.state.selectedOption === 'generic_name') {
        this.cancelCourse();
        this.setState({
          showComponent: false
        });
      } else if(this.state.selectedOption === 'brand_name') {
        this.cancelCourse();
        this.setState({
          showComponent: false
        });
      } else {
        console.log('nothing is selected')
      }
    });
  }
  search(item) {
    if (this.state.selectedOption === 'generic_name') {
      const searches = 'generic_name';
      axios.get(`https://api.fda.gov/drug/label.json?search=openfda.${searches}:${item}`)
        .then((response) => {
          this.setState({
            drug_list: response.data.results,
          });
        });
    } else if (this.state.selectedOption === 'brand_name') {
      axios.get(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${item}`)
        .then((response) => {
          this.setState({
            drug_list: response.data.results,
          });
        });
    } else {
      console.log('nothing is selected');
    }
  }
  changeName(e) {
    const { value } = e.target;
    this.setState({
      query: value,
    });
    this.search(value);
  }

buttonClick(e){
    e.preventDefault();
    if (this.state.query === '') {
      this.setState({
        showComponent: false,
      })
    } else {
      this.setState({
        showComponent: true,
      })
    }
  }
  cancelCourse() { 
    this.setState({
      query: '',
      drug_list: ''
    });
  }
  render() {
    return(
        <div>
          <form id="create-course-form">
            <div className="radio">
            <label>
              <input
                type="radio"
                className="form-radio"
                value="generic_name" 
                checked={this.state.selectedOption === 'generic_name'} 
                onChange={(ev) => this.handleOptionChange(ev)}
              />
              <label className="genBrLabel">Generic Name</label>
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                className="form-radio"
                value="brand_name" 
                checked={this.state.selectedOption === 'brand_name'} 
                onChange={(ev) => this.handleOptionChange(ev)}
              />
              <label className="genBrLabel">Brand Name</label>
            </label>
          </div>
          <div className="leftDiv">
            <h2 className="heading">Search Drugs:</h2>
            <input
              type="text"
              id="searchField"
              placeholder="Search with Generic Name or Brand Name.."
              value={this.state.query}
              onChange={(e,item2) => this.changeName(e,item2)}
            /><br />
            <button className="submitBtn" onClick={this.buttonClick.bind(this)}> Submit </button>
          </div>
          </form>
          {this.state.query ? this.state.showComponent && <TableContent data={this.state} data2={this.props}/> : ''}
        </div>  
    )
  }
}
export default SearchDrug;