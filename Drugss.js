import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-autocomplete';
import JSONPretty from 'react-json-pretty';
import './App.scss';
import medicines from '/home/kav/Downloads/medicines.json';
const tr = { fontSize: '20px' };
class Drugs extends React.Component {
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
          drug_list: medicines.results,
        });
  }
  getItem(item) {
    this.setState({ value: item }, () => {
      axios.get(`https://api.fda.gov/drug/ndc.json?search=generic_name:${item}`)
        .then((res) => {
          this.setState({
            drug_list2: res.data.results,
          });
        })
    });
  }
  shouldItem(state,value) {
    console.log('state.genric_name', state.genric_name);
    if (state && state.generic_name) {
      if(state.generic_name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        return state.generic_name.toLowerCase().indexOf(value.toLowerCase()) > -1 || state.product_ndc.toLowerCase().indexOf(value.toLowerCase()) > -1
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
            shouldItemRender={(state,value) => this.shouldItem(state,value)}
            getItemValue={(item) =>  item.generic_name || item.product_ndc}
            onChange={(event, value) => this.setState({ value })}
            onSelect={ value => this.getItem(value)}
            renderItem={(item, isHighlighted) => (
              <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                {item.generic_name} {item.product_ndc}
              </div>
            )}
          />
        </div>
        <div className="rightDiv">
          <h2>Drugs Details:</h2>
          <table border="1" id="tab">
            <thead>
              <tr>
                <th>Key</th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody>
              {
                drug_list2.map((each, index) => {
                  return Object.entries(each).map(([key1,value])=> {
                    return (
                      <tr>
                        <td>{key1}</td>
                        <td>
                          {
                            typeof value === 'object' ?
                              <div>
                                {
                                  key1 ? drug_list2.map((eachh) => {
                                    return Object.entries(eachh).map(([key,value1])=> {
                                      return key1 === key ?
                                        Object.entries(value1).map(([key2,value2])=> {
                                          return typeof value2 === 'object' ?
                                            Object.entries(value2).map(([key3,value3])=> {
                                              return <div>{key3} :: {value3.toString()}</div>
                                            }) :
                                            value2
                                        }) :
                                        ''
                                    })
                                  }) : ''
                                }
                              </div>
                              : value.toString()
                          }
                        </td>
                    </tr>
                  );
                  });
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Drugs;
