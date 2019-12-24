import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import DrugSearchField from './DrugSearchField';
import DrugSearchField2 from './DrugSearchField2';
import './App.scss';
class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'generic_name',
      showComponent: false,
      showComponents: false,
    }
  }
  handleOptionChange(ev) {
    this.setState({
      selectedOption: ev.target.value
    }, () => {
      if (this.state.selectedOption === 'generic_name') {
        console.log('generic_name is selected')
        this.setState({
          showComponent: true,
        })
      } else if (this.state.selectedOption === 'brand_name') {
        this.setState({
          showComponents: true,
        })
      } else {
        console.log('nothing is selected')
      }
    });
  }
  render() {
    return (
      <div>
        <form>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="generic_name"
                checked={this.state.selectedOption === 'generic_name'}
                onChange={(ev) => this.handleOptionChange(ev)}
              />
              <label className="genBrLabel">Generic_Name</label>
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="brand_name"
                checked={this.state.selectedOption === 'brand_name'}
                onChange={(ev) => this.handleOptionChange(ev)}
              />
              <label className="genBrLabel">Brand_Name</label>
            </label>
          </div>
        </form>
        {
          this.state.selectedOption === 'generic_name' ?
            this.state.showComponent && <DrugSearchField data={this.state.selectedOption}/> :
            this.state.showComponents && <DrugSearchField2 data={this.state.selectedOption}/>
        }
      </div>
    );
  }
}
export default Radio;