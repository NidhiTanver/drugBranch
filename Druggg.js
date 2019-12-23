import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-autocomplete';
import JSONPretty from 'react-json-pretty';
import './App.scss';
import medicines from '/home/kav/Downloads/drugFinal.json';
const tr = { fontSize: '20px' };
class Druggg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      value:'',
      drug_list2: [],
    };
    this.getItem = this.getItem.bind(this);
  }
  componentDidMount() {
    console.log('medicines list', medicines.results);
     this.setState({
          drug_list: medicines.results.map((each) => each),
        });
  }
  getItem(item) {
    this.setState({ value: item }, () => console.log('select', this.state.value))
    axios.get(`https://api.fda.gov/drug/label.json?search=generic_name:${item}`)
      .then((res) => {
        this.setState({
          drug_list2: res.data.results,
        }, () => console.log('druggs', this.state.drug_list2));
      })
  }
  getty(item) {
    console.log('getty', item.adverse_reactions);
    return item.adverse_reactions[0]
  }
  shouldItem(state,value) {
    if (state && (state.adverse_reactions)) {
      if(state.adverse_reactions[0]) {
        return state.adverse_reactions[0];
      }
    }
  }
  render() {
    const { drug_list, drug_list2 } = this.state;
    return (
      <div className="final">
        <div className="leftDiv">
          <h2 className="heading">Search Drug:</h2>
          <Autocomplete
            value={this.state.value}
            inputProps={{ id: 'autocomplete', placeholder: '  please type here' }}
            items={drug_list}
            getItemValue={(item) =>  this.getty(item)}
            onChange={(event, value) => this.setState({ value })}
            onSelect={ value => this.getItem(value)}
            shouldItemRender={(state,value) => this.shouldItem(state,value)}
            renderItem={(item, isHighlighted) => (
              <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                {item.adverse_reactions[0]}
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}
export default Druggg;