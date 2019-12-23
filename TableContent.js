import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './App.scss';

class TableContent extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      drug_list: [],
    }
  }
  componentDidMount() {
    const { data } = this.props;
    console.log('Did Mount of table', data);
    this.setState({
      drug_list: data.drug_list
    }, () => console.log('data in table content', this.state.drug_list));
  }
  render() {
    let drug_list;
    if (this.state && this.state.drug_list) {
      drug_list = this.state.drug_list;
      console.log('Drugs list RENDER', this.state.drug_list);
    }
    return (
      <div>
        <div className="rightDiv">
          <h2>Drugs Details:</h2>
          <table border="1" id="tab" className="table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody id="tbody">
              {
                drug_list.map((each,indexx) => {
                  return Object.entries(each).map(([key1,value]) => {
                    return (
                      <tr key={indexx.id}>
                        <td>{key1}</td>
                        <td>
                          {
                            typeof value === 'object' ?
                              <div>
                                {
                                  key1 ?
                                    drug_list.map((eachh, index) => {
                                      return Object.entries(eachh).map(([key,value1]) => {
                                        return key1 === key ?
                                          Object.entries(value1).map(([key2,value2]) => {
                                            console.log('After Key2', key2)
                                            return typeof value2 === 'object' ?
                                              Object.entries(value2).map(([key3,value3]) => {
                                                console.log('Key22', key2)
                                                return <div key={index.id}>{key2} :: {value3.toString()}</div>
                                              })
                                              : value2
                                          }) 
                                          : ''
                                      })
                                    })
                                    : ''
                                }
                              </div>
                              : value.toString()
                          }
                        </td>
                      </tr>
                    );
                  })
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default TableContent;