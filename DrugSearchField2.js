import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import TableContent from './TableContent';
import './App.scss';

const tr = { fontSize: '20px' };
class DrugSearchField2 extends React.Component {
  constructor(){
    super();
    this.state={
      showComponent : false,
      drug_list: [],
      query: '',
    };
  }
  componentDidMount() {
    const { data } = this.props;
    console.log('DID MOUNT', data);
  }
  search(item) {
    console.log('item', item);
    const searches = 'brand_name';
    axios.get(`https://api.fda.gov/drug/label.json?search=openfda.${searches}:${item}`)
      .then((response) => {
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  changeName(e,item2) {
    const { value } = e.target;
    this.setState({
      query: value,
    });
    this.search(value);
  }

  buttonClick(e){
    e.preventDefault();
    this.setState({
      showComponent: true,
    })
  }
  render() {
    return(
        <div>
          <div className="leftDiv">
            <h2 className="heading">Search Drugs:</h2>
            <form>
              <input
                type="text"
                id="searchField"
                placeholder="Search with Generic_name.or Brand_name.."
                value={this.state.query}
                onChange={(e,item2) => this.changeName(e,item2)}
              /><br />
              <button className="submitBtn" onClick={this.buttonClick.bind(this)}> Submit </button>
            </form>
          </div>
          {this.state.showComponent && <TableContent data={this.state} data2={this.props} />}
        </div>  
    )
  }
}
export default DrugSearchField2;
