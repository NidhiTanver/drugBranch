import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-autocomplete';
import JSONPretty from 'react-json-pretty';
import './App.scss';
import medicines from '/home/kav/Downloads/drugjson.json'; //drugdata.json

const tr = { fontSize: '20px' };
class DrugNewCopy extends React.Component {
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
        }, () => console.log('drug_list11', this.state.drug_list));
  }
  getItem(item) {
    this.setState({ value: item })
    axios.get(`https://api.fda.gov/drug/label.json?search=generic_name:${item}`)
      .then((res) => {
        console.log('drug_list response', res.data.results)
        this.setState({ drug_list2: res.data.results })
      })
  }  
  shouldItem(state,value) {
    if (state && (state.openfda.generic_name || state.openfda.brand_name)) {
      if(state.openfda.generic_name[0].toLowerCase().indexOf(value.toLowerCase()) > -1 || state.openfda.brand_name[0].toLowerCase().indexOf(value.toLowerCase()) > -1) {
        return state.openfda.generic_name[0].toLowerCase().indexOf(value.toLowerCase()) > -1 || state.openfda.brand_name[0].toLowerCase().indexOf(value.toLowerCase()) > -1
      }
    }
  }
  getty(item) {
    return item.openfda.generic_name[0] || item.openfda.brand_name[0] || item.adverse_reactions;
  }
  render() {
    const { drug_list, drug_list2 } = this.state;
    console.log('render', drug_list2.map((each) => each.openfda))
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
              <div
                className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                key={item.id}
                style={{ fontSize: '20px' }}
              >
                {item.openfda.generic_name} {item.openfda.brand_name}
              </div>
            )}
          />
        </div>
        <div className="rightDiv">
          <h2>Drugs Details:</h2>
          <table border="1" id="tab" className="table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody>
              {
                drug_list2.map((each,indexx) => {
                  return Object.entries(each).map(([key1,value])=> {
                    return (
                      <tr  key={indexx.id}>
                        <td>{key1}</td>
                        <td>
                          {
                            typeof value === 'object' ?
                              <div>
                                {
                                  key1 ? drug_list2.map((eachh,index) => {
                                    return Object.entries(eachh).map(([key,value1])=> {
                                      return key1 === key ?
                                        Object.entries(value1).map(([key2,value2])=> {
                                          return typeof value2 === 'object' ?
                                            Object.entries(value2).map(([key3,value3])=> {
                                              return <div key={eachh.id}>{key2} :: {value3.toString()}</div>
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
export default DrugNewCopy;