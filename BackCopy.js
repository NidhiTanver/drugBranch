import React, { component } from 'react';
import axios from 'axios';

class DrugDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('COMPONENT DID MOUNT FUNCTION');
    axios.get('https://api.fda.gov/drug/ndc.json?limit=100')
      .then((response) => {
        console.log('ReSPonse', response);
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  handleClick() {
    console.log('nidhi');
  }
  render() {
    let drug_list;
    if (this.state && this.state.drug_list) {
      drug_list = this.state.drug_list;
      console.log('Drugs list', this.state.drug_list);
    }
    return (
      <div>
        <ul>
          {
            drug_list.map((each) => {
              return (
                <li>{each.product_ndc} && {each.generic_name}</li>
              );
            })
          }
        </ul>
        <div className="search">
          <input type="text" className="search-box" />
          <input type="submit" value="" className="search-btn" />
        </div>
        <button onClick={this.handleClick}>BTN</button>
      </div>
    );
  }
}
export default DrugDetail;











//import React, { component } from 'react';
import axios from 'axios';

class DrugDetail extends React.Component {
  constructor(props) {
    super(props);
    this.items = ['david', 'nidhi', 'neha', 'nayra', 'sara', 'payal', 'pooja'];
    this.state = {
      drug_list: [],
      suggestions: [],
      text: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }
  componentDidMount() {
    console.log('COMPONENT DID MOUNT FUNCTION');
    axios.get('https://api.fda.gov/drug/ndc.json?limit=100')
      .then((response) => {
        console.log('ReSPonse', response);
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  handleClick(e) {
    console.log('nidhi');
  }
  onTextChange() {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = thus.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({
      suggestions,
      text: value,
    }))
    console.log('HandleChange');
  }
  suggestionSelected (value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }
  renderSuggestions() {
    const { suggestions } = this.state;
    if(suggesions.length === 0) {
      retun null;
    }
    return (
      <ul>
        {
          suggestions.map((item) => <li onClick={() => this.suggestionSelected(item) }>{item}</li>)
        }
      </ul>
    );
  }
  render() {
    let drug_list;
    let text;
    if (this.state && this.state.drug_list) {
      drug_list = this.state.drug_list;
      console.log('Drugs list', this.state.drug_list);
    }
    if (this.state && this.state.text) {
      text = this.state.text;
      console.log('TextText list', this.state.text);
    }
    return (
      <div>
        <ul>
          {
            drug_list.map((each) => {
              return (
                <li>{each.product_ndc} && {each.generic_name}</li>
              );
            })
          }
        </ul>
        <div className="search">
          <input type="text" className="search-box" />
          <input type="submit" value="" className="search-btn" />
        </div>
        <button>BTN</button>
        <div className="AutoCompletedText">
          <input type="text" value=text />
        </div>
      </div>
    );
  }
}
export default DrugDetail;

//Variable list
import React, { component } from 'react';
import axios from 'axios';
import Autocomplete from 'react-autocomplete';

class Drugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('COMPONENT DID MOUNT FUNCTION');
    axios.get('https://api.fda.gov/drug/ndc.json?limit=100')
      .then((response) => {
        console.log('ReSPonse', response);
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  handleClick() {
    console.log('nidhi');
  }
  render() {
    let drugs;
    if (this.state && this.state.drug_list) {
      drugs = this.state.drug_list.map((each) => {
        console.log('Drugs list', each.product_ndc);
        return (
          <li>{each.product_ndc} && {each.generic_name}</li>
        );
      })
    }
    return (
      <div>
        
        <ul>
          {drugs}
        </ul>
      </div>
    );
  }
}
export default Drugs;


//
value={this.state.value}
onChange={(e) => value = e.target.value}
onSelect={(val) => value = val}


// HArpreet coding
import React, { component } from 'react';
import axios from 'axios';
import Autocomplete from 'react-autocomplete';

class Drugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      value:'',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const drug = [];
    console.log('COMPONENT DID MOUNT FUNCTION');
    axios.get('https://api.fda.gov/drug/ndc.json?limit=15')
      .then((response) => {
        console.log('response', response.data.results);
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  handleClick() {
    console.log('nidhi');
  }
  render() {
    const { drug_list } = this.state;
    return (
      <div>
        <Autocomplete
          getItemValue={(item) => item.generic_name}
          items={drug_list}
          shouldItemrender={(item, value) => item.generic_name.toLowercase().indexOf(value.toLowercase()) > -1}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.generic_name}(..){item.product_ndc}
            </div>
          }
          value={this.state.value}
          onChange={(e) => value=e.target.value}
          onSelect={(val) => value = val}
        />
      </div>
    );
  }
}
export default Drugs;


<Autocomplete
  getItemValue={(item) => item.label}
  items={[
    { label: 'apple' },
    { label: 'banana' },
    { label: 'pear' }
  ]}
  renderItem={(item, isHighlighted) =>
    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
      {item.label}
    </div>
  }
  value={value}
  onChange={(e) => value = e.target.value}
  onSelect={(val) => value = val}
/>



//Two functions
 changeValue(e) {
    const userInput = e.currentTarget.value;
    console.log('Event of onChange', e);
    this.setState({
      value: e.target.value,
      userInput: e.currentTarget.value,
    }, () => console.log('Event', this.state.value));
  }
  selectValue(val) {
    console.log('selectValue', val);
    this.state.value = val;
    console.log('selectValue 2nd', this.state.value);
  }


  'Generic_Name:' + item.generic_name + 'Product_Ndc:' + item.product_ndc + '' + item.product_type


  //2 december 2019
  import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Autocomplete from 'react-autocomplete';
import DrugDetals from './DrugDetals'; 

class Drugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      value:'',
    };
    this.changeValue = this.changeValue.bind(this);
    this.selectValue = this.selectValue.bind(this);
  }
  componentDidMount() {
    const drug = [];
    console.log('COMPONENT DID MOUNT FUNCTION');
    axios.get('https://api.fda.gov/drug/ndc.json?limit=100')
      .then((response) => {
        console.log('response', response.data.results);
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  changeValue(e, item) {
    console.log('Item into onChange::', item);
    this.setState({
      value: e.target.value,
    }, () => console.log('OnChange', this.state.value));
  }
  selectValue(val) {
    this.setState({
      value: val,
    });
    console.log('selectValue::', val);
  }
  render() {
    const { drug_list } = this.state;
    return (
      <div>
        <Autocomplete
          getItemValue={(item) => {
            return '1..Generic_Name=' + item.generic_name + ' ' + '2..Product_Ndc=' + item.product_ndc + ' ' + '3..item.product_type=' + item.product_type;
          }
        }
          items={drug_list}
          shouldItemrender={(item, value) => item.generic_name.toLowercase().indexOf(value.toLowercase()) > -1}
          renderItem={(item, isHighlighted) => {
            return (
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.generic_name}(..){item.product_ndc}
              </div>
            )}
          }
          value={this.state.value}
          onChange={this.changeValue}
          onSelect={this.selectValue}
        />
        <h3>{this.state.value}</h3>
      </div>
    );
  }
}
export default Drugs;



//MY FINAL CODING
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Autocomplete from 'react-autocomplete';
import DrugDetals from './DrugDetals'; 

class Drugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      value:'',
    };
    this.changeValue = this.changeValue.bind(this);
    this.selectValue = this.selectValue.bind(this);
  }
  componentDidMount() {
    const drug = [];
    console.log('COMPONENT DID MOUNT FUNCTION');
    axios.get('https://api.fda.gov/drug/ndc.json?limit=100')
      .then((response) => {
        console.log('response', response.data.results);
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  changeValue(e, item) {
    console.log('Item into onChange::', item);
    this.setState({
      value: e.target.value,
    }, () => console.log('OnChange', this.state.value));
  }
  selectValue(val) {
    this.setState({
      value: val,
    });
    console.log('selectValue::', val);
  }
  render() {
    const { drug_list } = this.state;
    return (
      <div>
        <Autocomplete
          getItemValue={(item) => {
            return  '1..Generic_Name=' + item.generic_name + ' ' + '2..Product_Ndc=' + item.product_ndc + ' ' + '3..Product_TYPE=' + item.product_type;
          }}
          items={drug_list}
          shouldItemrender={(item, value) => {
            console.log('ShouldItemrende', item);
            return item.generic_name;
          }}
          renderItem={(item, isHighlighted) => {
            console.log('RenderItem', item);
            return (
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.generic_name}(..){item.product_ndc}
              </div>
            )}
          }
          value={this.state.value}
          onChange={this.changeValue}
          onSelect={this.selectValue}
        />
        <h3>{this.state.value}</h3>
      </div>
    );
  }
}
export default Drugs;



//..
export function getCountry() {
  return [
{name: 'Afghanistan', code: 'AF'},{name: 'Åland Islands', code: 'AX'},{name: 'Albania', code: 'AL'},{name: 'Algeria', code: 'DZ'},{name: 'American Samoa', code: 'AS'},{name: 'AndorrA', code: 'AD'},{name: 'Angola', code: 'AO'}, {name: 'Anguilla', code: 'AI'},{name: 'Antarctica', code: 'AQ'},{name: 'Antigua and Barbuda', code: 'AG'},{name: 'Argentina', code: 'AR'}, {name: 'Armenia', code: 'AM'},{name: 'Aruba', code: 'AW'}, {name: 'Australia', code: 'AU'},{name: 'Austria', code: 'AT'},{name: 'Azerbaijan', code: 'AZ'},{name: 'Bahamas', code: 'BS'}, {name: 'Bahrain', code: 'BH'},{name: 'Bangladesh', code: 'BD'}, {name: 'Barbados', code: 'BB'},{name: 'Belarus', code: 'BY'}, {name: 'Belgium', code: 'BE'}, {name: 'Belize', code: 'BZ'}, {name: 'Benin', code: 'BJ'}, {name: 'Bermuda', code: 'BM'},{name: 'Bhutan', code: 'BT'},{name: 'Bolivia', code: 'BO'},{name: 'Bosnia and Herzegovina', code: 'BA'},   {name: 'Botswana', code: 'BW'},   {name: 'Bouvet Island', code: 'BV'},   {name: 'Brazil', code: 'BR'},   {name: 'British Indian Ocean Territory', code: 'IO'},   {name: 'Brunei Darussalam', code: 'BN'},   {name: 'Bulgaria', code: 'BG'},   {name: 'Burkina Faso', code: 'BF'},   {name: 'Burundi', code: 'BI'},   {name: 'Cambodia', code: 'KH'},   {name: 'Cameroon', code: 'CM'},   {name: 'Canada', code: 'CA'},   {name: 'Cape Verde', code: 'CV'},{name: 'Cayman Islands', code: 'KY'},   {name: 'Central African Republic', code: 'CF'},   {name: 'Chad', code: 'TD'}]
}
 
export function matchCountry(state, value) {
  console.log(state);
  console.log(value);
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.code.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}



// change function into class
import React, { component } from 'react';
import axios from 'axios';

class Drugs extends React.Component {
  componentDidMount() {
    console.log('Did Mount Function');
  }
  render () {
    return (
      <div>
        <h1>GETCountry function component</h1>
      </div>
    );
  }
}
export default getCountry;




  
// night first
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Autocomplete from 'react-autocomplete';
import DrugDetails from './DrugDetails';
import { getCountry, matchCountry } from './dataService'; 

class Drugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      value:'',
      nalue: '',
    };
    this.changeValue = this.changeValue.bind(this);
    this.selectValue = this.selectValue.bind(this);
  }
  componentDidMount() {
    const drug = [];
    console.log('COMPONENT DID MOUNT FUNCTION');
    axios.get('https://api.fda.gov/drug/ndc.json?a')
      .then((response) => {
        console.log('response', response.data.results);
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  changeValue(e, item) {
    console.log('Item into onChange::', item);
    this.setState({
      value: e.target.value,
    }, () => console.log('OnChange', this.state.value));
  }
  selectValue(val) {
    this.setState({
      value: val,
    });
    console.log('selectValue::', val);
  }
  render() {
    const { drug_list } = this.state;
    return (
      <div className = "card col-sm-6" style = {{ marginTop: 40, marginLeft: 50 }}>
        <div class="card-header">
          Search :
        </div>
        <div class="card-body">
          <form>
            <div className="form-group">
              <Autocomplete
                getItemValue={(item) => {
                  return  '1..Generic_Name=' + item.generic_name + ' ' + '2..Product_Ndc=' + item.product_ndc + ' ' + '3..Product_TYPE=' + item.product_type;
                }}
                items={drug_list}
                shouldItemrender={(item, value) => {
                  console.log('ShouldItemrende', item);
                  return item.generic_name;
                }}
                renderItem={(item, isHighlighted) => {
                  console.log('RenderItem', item);
                  return (
                    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                      {item.generic_name}(..){item.product_ndc}
                    </div>
                  )}
                }
                value={this.state.value}
                onChange={this.changeValue}
                onSelect={this.selectValue}
              />
              
            </div>
          </form>
        </div>
        <div className = "card col-sm-6" style = {{ marginTop: 40, marginLeft: 50 }}>
          <div class="card-header">
            Country Name :
          </div>
          <div class="card-body">
            <form>
              <div className="form-group">
                <Autocomplete
                  value={ this.state.nalue }
                  inputProps={{ id: 'states-autocomplete' }}
                  wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                  items={ getCountry() }
                  getItemValue={ item => item.name }
                  shouldItemRender={ matchCountry }
                  onChange={(event, nalue) => this.setState({ nalue }) }
                  onSelect={ nalue => this.setState({ nalue }) }
                  renderMenu={ children => (
                    <div className = "menu">
                      { children }
                    </div>
                  )}
                  renderItem={ (item, isHighlighted) => (
                    <div
                      className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                      key={ item.abbr } >
                      { item.name }
                    </div>
                  )}
                />
              </div>
            </form>
            <ul>
                <li>{this.state.nalue}</li>
              </ul> 
          </div>
        </div>
      </div>
    );
  }
}
export default Drugs;


//DrugDetails morning
import React, { component } from 'react';
import Autocomplete from  'react-autocomplete';
import { getCountry, matchCountry } from './dataService';
 
class DrugDetails extends React.Component {
  constructor(props) {
    super (props);
    this.state = { value: '' };
  } 
 
  render() {
    return (
      <div className = "card col-sm-6" style = {{ marginTop: 40, marginLeft: 50 }}>
        <div class="card-header">
          Country Name :
        </div>
        <div class="card-body">
          <form>
            <div className="form-group">
              <Autocomplete
                value={ this.state.value }
                inputProps={{ id: 'states-autocomplete' }}
                wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                items={ getCountry() }
                getItemValue={ item => item.name }
                shouldItemRender={ matchCountry }
                onChange={(event, value) => this.setState({ value }) }
                onSelect={ value => this.setState({ value }) }
                renderMenu={ children => (
                  <div className = "menu">
                    { children }
                  </div>
                )}
                renderItem={ (item, isHighlighted) => (
                  <div
                    className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                    key={ item.abbr } >
                    { item.name }
                  </div>
                )}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
 

export default DrugDetails;


`https://api.fda.gov/drug/ndc.json?search=product_ndc:${item.product_ndc}`

//Tables in api
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Autocomplete from 'react-autocomplete';

class Drugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      value:'',
      getVal: '',
      drug_list2: [],
    };
    this.getItem = this.getItem.bind(this);
  }
  componentDidMount() {
    console.log('COMPONENT DID MOUNT FUNCTION');
    axios.get('https://api.fda.gov/drug/ndc.json?limit=100')
      .then((response) => {
        console.log('response', response.data.results);
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  getItem(item) {
    console.log('2nd Item:', item.product_ndc);
    axios.get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:${item.product_ndc}`)
      .then((res) => {
        console.log('2nd api', res);
        this.setState({
          drug_list2: res.data.results,
        });
      })
    return item.generic_name;
  }
  render() {
    const { drug_list, drug_list2 } = this.state;
    console.log('drug_list2', drug_list2);
    return (
      <div>
        <Autocomplete
          value={this.state.value}
          inputProps={{ id: 'autocomplete', placeholder: 'please type here' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block', width: '500px' }}
          items={drug_list}
          shouldItemRender={(item, value) => item.generic_name.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={(item) => this.getItem(item)}
          onChange={(event, value) => this.setState({ value }) }
          onSelect={ value => this.setState({ value }) }
          renderItem={(item, isHighlighted) => (
            <div>
              {item.generic_name}{item.product_ndc}
            </div>
          )}
        />
        <table className="table" border="1">
              <thead>
                <tr>
                  <th>generic_name</th>
                  <th>product_ndc</th>
                  <th>product_type</th>
                  <th>product_id</th>
                  <th>labeler_name</th>
                  <th>brand_name_base</th>
                </tr>
              </thead>
              <tbody>
                {
                  drug_list2.map((each) => {
                    return (
                      <tr>
                        <td>{each.generic_name}</td>
                        <td>{each.product_ndc}</td>
                        <td>{each.product_type}</td>
                        <td>{each.product_id}</td>
                        <td>{each.labeler_name}</td>
                        <td>{each.brand_name_base}</td>
                      </tr>
                    );
                  })
                }
            </tbody>
          </table>
        <ul>
          {
            drug_list2.map((each) => {
              return (
                <li>{each.generic_name}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
export default Drugs;



















// today complete with erroes

import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Autocomplete from 'react-autocomplete';

class Drugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      value:'',
      getVal: '',
      drug_list2: [],
    };
    this.getItem = this.getItem.bind(this);
  }
  componentDidMount() {
    console.log('COMPONENT DID MOUNT FUNCTION');
    axios.get('https://api.fda.gov/drug/ndc.json?limit=100')
      .then((response) => {
        console.log('response', response.data.results);
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  getItem(item) {
    console.log('2nd Item:', item.product_ndc);
    axios.get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:${item.product_ndc}`)
      .then((res) => {
        console.log('2nd api', res);
        this.setState({
          drug_list2: res.data.results,
        });
      })
    return item.product_ndc;
  }
  onChangeItem(event, value) {
    console.log('change item');
    this.setState({ value });
  }
  render() {
    const { drug_list, drug_list2 } = this.state;
    console.log('drug_list2', drug_list2);
    return (
      <div>
        <Autocomplete
          value={this.state.value}
          inputProps={{ id: 'autocomplete', placeholder: 'please type here' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block', width: '500px' }}
          items={drug_list}
          shouldItemRender={(item, value) => item.product_ndc.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={(item) => this.getItem(item)}
          onChange={(event, value) => this.onChangeItem() }
          onSelect={ value => this.setState({ value }) }
          renderItem={(item, isHighlighted) => (
            <div>
              {item.generic_name}{item.product_ndc}
            </div>
          )}
        />
        <table className="table" border="1">
              <thead>
                <tr>
                  <th>generic_name</th>
                  <th>product_ndc</th>
                  <th>product_type</th>
                  <th>product_id</th>
                  <th>labeler_name</th>
                  <th>brand_name_base</th>
                </tr>
              </thead>
              <tbody>
                {
                  drug_list2.map((each) => {
                    return (
                      <tr>
                        <td>{each.generic_name}</td>
                        <td>{each.product_ndc}</td>
                        <td>{each.product_type}</td>
                        <td>{each.product_id}</td>
                        <td>{each.labeler_name}</td>
                        <td>{each.brand_name_base}</td>
                      </tr>
                    );
                  })
                }
            </tbody>
          </table>
      </div>
    );
  }
}
export default Drugs;
        

//5-dec-2019
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
import Autocomplete from 'react-autocomplete';
import './App.scss';

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
    console.log('COMPONENT DID MOUNT FUNCTION');
    axios.get(`https://api.fda.gov/drug/ndc.json?limit=100`)
      .then((response) => {
        console.log('response', response.data.results);
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  getItem(item) {
    axios.get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:${item.product_ndc}`)
      .then((res) => {
        console.log('2nd Item:', res);
        this.setState({
          drug_list2: res.data.results,
        });
      })
    return item.product_ndc;
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
            shouldItemRender={(item, value) => item.product_ndc.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={(item) => this.getItem(item)}
            onChange={(event, value) => this.setState({ value }) }
            onSelect={ value => this.setState({ value }) }
            renderItem={(item, isHighlighted) => (
              <div  className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                {item.generic_name}{item.product_ndc}
              </div>
            )}
          />
        </div>
        <div className="rightDiv">
          <center><h2>Drugs Details:</h2></center>
          <table border="1" id="tab">
            <thead>
              <tr className="rows">
                <th style={tr}>generic_name</th>
                <th style={tr}>product_ndc</th>
                <th style={tr}>product_type</th>
                <th style={tr}>product_id</th>
                <th style={tr}>labeler_name</th>
                <th style={tr}>brand_name_base</th>
              </tr>
            </thead>
            <tbody>
              {
                drug_list2.map((each) => {
                  return (
                    <tr className="headRow">
                      <td>{each.generic_name}</td>
                      <td>{each.product_ndc}</td>
                      <td>{each.product_type}</td>
                      <td>{each.product_id}</td>
                      <td>{each.labeler_name}</td>
                      <td>{each.brand_name_base}</td>
                    </tr>
                  );
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



//JSON BY HARPREET
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
// import Autocomplete from 'react-autocomplete';
// import './App.scss';
import medicines from '/home/kav/Downloads/drug.json';

// const tr = { fontSize: '20px' };
class Drugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     value:'',
    };
    // this.getItem = this.getItem.bind(this);
  }
  componentDidMount() {
    console.log('COMPONENT DID MOUNT FUNCTION');
    console.log('medicines list', medicines);
  }
  // getItem(item) {
  //   axios.get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:${item.product_ndc}`)
  //     .then((res) => {
  //       console.log('2nd Item:', res);
  //       this.setState({
  //         drug_list2: res.data.results,
  //       });
  //     })
  //   return item.product_ndc;
  // }

  render() {
    // const { drug_list, drug_list2 } = this.state;
    return (
      <div>
        harpreet
      </div>
    );
  }
}
export default Drugs;


//7 december
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
import Autocomplete from 'react-autocomplete';
import './App.scss';
import medicines from '/home/kav/Downloads/Medicines.json';

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
    this.changeItem = this.changeItem.bind(this);
    this.shouldItem = this.shouldItem.bind(this);
  }
  componentDidMount() {
    console.log('medicines list', medicines.results);
     this.setState({
          drug_list: medicines.results,
        });
  }
  getItem(item) {
    axios.get(`https://api.fda.gov/drug/ndc.json?search=generic_name:${item.generic_name}`)
      .then((res) => {
        // console.log('2nd Item:', res);
        this.setState({
          drug_list2: res.data.results,
        });
      })
    return item.generic_name;
  }
  changeItem(event, value) {
    this.setState({ value }, () => console.log('Value 2nd change', value));
  }
  shouldItem(item, value) {
    // console.log('should item render = array object', item);
    // console.log('should value render = ndc', value);
    return item.generic_name.toLowerCase().indexOf(value.toLowerCase()) > -1;
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
            shouldItemRender={(item, value) => this.shouldItem(item, value)}
            getItemValue={(item) => this.getItem(item)}
            onChange={(event, value) => this.changeItem(event, value)}
            onSelect={ value => this.setState({ value }) }
            renderItem={(item, isHighlighted) => (
              <div  className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                {item.product_ndc}{item.generic_name}
              </div>
            )}
          />
        </div>
        <div className="rightDiv">
          <center><h2>Drugs Details:</h2></center>
          <table border="1" id="tab">
            <thead>
              <tr className="rows">
                <th style={tr}>generic_name</th>
                <th style={tr}>product_ndc</th>
                <th style={tr}>product_type</th>
                <th style={tr}>product_id</th>
                <th style={tr}>labeler_name</th>
                <th style={tr}>brand_name_base</th>
              </tr>
            </thead>
            <tbody>
              {
                drug_list2.map((each) => {
                  return (
                    <tr className="headRow">
                      <td>{each.generic_name}</td>
                      <td>{each.product_ndc}</td>
                      <td>{each.product_type}</td>
                      <td>{each.product_id}</td>
                      <td>{each.labeler_name}</td>
                      <td>{each.brand_name_base}</td>
                    </tr>
                  );
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


//Table only
<table border="1" id="tab">
            <thead>
              <tr className="rows">
                <th style={tr}>Generic_Name</th>
                <th style={tr}>Product_ndc</th>
                <th style={tr}>product_type</th>
                <th style={tr}>product_id</th>
                <th style={tr}>labeler_name</th>
                <th style={tr}>brand_name_base</th>
              </tr>
            </thead>
            <tbody>
              {
                drug_list2.map((each, index) => {
                  return (
                    <tr key={each.labeler_name} className="headRow">
                      <td>{each.generic_name}</td>
                      <td>{each.product_ndc}</td>
                      <td>{each.product_type}</td>
                      <td>{each.product_id}</td>
                      <td>{each.labeler_name}</td>
                      <td>{each.brand_name_base}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>


//Final friday
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
import Autocomplete from 'react-autocomplete';
import JSONPretty from 'react-json-pretty';
import './App.scss';
import medicines from '/home/kav/Downloads/Mediciness.json';

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
    // this.renderTableHeader = this.renderTableHeader.bind(this);
  }
  componentDidMount() {
    console.log('medicines list', medicines.results);
     this.setState({
          drug_list: medicines.results,
        });
  }
  getItem(item) {
    this.setState({ value: item }, () => {
      axios.get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:${item}`)
        .then((res) => {
          // console.log(res, 'res 2nd');
          this.setState({
            drug_list2: res.data.results,
          });
        })
      return item.product_ndc;
    });
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
            shouldItemRender={(item, value) => item.product_ndc.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={(item) => item.product_ndc}
            onChange={(event, value) => this.setState({ value })}
            onSelect={ value => this.getItem(value)}
            renderItem={(item, isHighlighted) => (
              <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                {item.product_ndc} {item.generic_name}
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
                  return Object.entries(each).map(([key,value])=> {
                    console.log('key', key);
                    console.log('value', value);
                    return (
                      <tr>
                        <td>{key}</td>
                        <td>
                          {
                            typeOf(object)
                            value.toString()
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



//table
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
                  return Object.entries(each).map(([key,value])=> {
                    return (
                      <tr>
                        <td>{key}</td>
                        <td>
                          {
                            typeof value === 'object' ?
                              <div>
                                <JSONPretty
                                  id="json-pretty"
                                  data={
                                    key ? drug_list2.map((each) => {
                                      console.log('Each', each)
                                      return 'nidhi'
                                    }) : ''
                                }>
                                </JSONPretty>
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


//latest
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
                                <JSONPretty
                                  id="json-pretty"
                                  data={
                                    key1 ? drug_list2.map((eachh) => {
                                      return Object.entries(eachh).map(([key,value1])=> {
                                        return key1 === key ?
                                          Object.entries(value1).map(([key2,value2])=> {
                                            console.log('value2', value2)
                                            return Object.entries(value2).map(([key3,value3])=> {
                                              console.log('value3', value3)
                                              return value3
                                            })
                                          }) :
                                          '2nd'
                                      })
                                    }) : '1st'
                                }>
                                </JSONPretty>
                              </div> :
                              value.toString()
                          }
                        </td>
                    </tr>
                  );
                  });
                })
              }
            </tbody>
          </table>



          <JSONPretty id="json-pretty" data={drug_list2}></JSONPretty>
          <div>{JSON.stringify(drug_list2, null, 2)}</div>

//
https://api.fda.gov/drug/label.json
base endpoint
?
?
search=
search=
drug_interactions:caffeine
field:term
&
&
limit=5








//COMPLTE TO SHOW
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
import Autocomplete from 'react-autocomplete';
import JSONPretty from 'react-json-pretty';
import './App.scss';
import medicines from '/home/kav/Downloads/Mediciness.json';

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
      axios.get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:${item}`)
        .then((res) => {
          this.setState({
            drug_list2: res.data.results,
          });
        })
      return item.product_ndc;
    });
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
            shouldItemRender={(item, value) => item.product_ndc.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={(item) => item.product_ndc}
            onChange={(event, value) => this.setState({ value })}
            onSelect={ value => this.getItem(value)}
            renderItem={(item, isHighlighted) => (
              <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                {item.product_ndc} {item.generic_name}
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
                                      console.log('value1', value1)
                                      return key1 === key ?
                                        Object.entries(value1).map(([key2,value2])=> {
                                          console.log('value2', value2)
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


// ........api by harpreet

      const search = package_ndc || generic_name;
      axios.get(`https://api.fda.gov/drug/label.json?search=openfda.${search}:${item}`)



//SUNDAY..8-december-2019..Drugs.js
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
import Autocomplete from 'react-autocomplete';
import JSONPretty from 'react-json-pretty';
import './App.scss';
import medicines from '/home/kav/Downloads/Mediciness.json';

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
      axios.get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:${item}`)
        .then((res) => {
          this.setState({
            drug_list2: res.data.results,
          });
        })
    });
  }
  shouldItem(state,value) {
    return state.generic_name.toLowerCase().indexOf(value.toLowerCase()) > -1 || state.product_ndc.toLowerCase().indexOf(value.toLowerCase()) > -1
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
            getItemValue={(item) => item.generic_name || item.product_ndc}
            onChange={(event, value) => this.setState({ value })}
            onSelect={ value => this.getItem(value)}
            renderItem={(item, isHighlighted) => (
              <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                {item.product_ndc} {item.generic_name}
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
                                      console.log('value1', value1)
                                      return key1 === key ?
                                        Object.entries(value1).map(([key2,value2])=> {
                                          console.log('value2', value2)
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



// 8 december 2019..DrugsCopy.js
import React, {component} from 'react';
import axios from 'axios';
import Autocomplete from  'react-autocomplete';
import medicine from '/home/kav/Downloads/Mediciness.json';
import './App.scss';

class DrugCopy extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      drug_list: [],
      value: '',
    }
  }
  componentDidMount() {
    this.setState({ drug_list: medicine.results }, () => console.log('response', this.state.drug_list))
  }
  getItem(item) {
    this.setState({ value: item}, () => console.log(this.state.value));
    axios.get(`https://api.fda.gov/drug/ndc.json?search=generic_name:ACTIVATED CHARCOAL`)
      .then((res) => {
        console.log('RES', res);
      })
  }
  changeItem(event, value)  {
    this.setState({ value });
  }
  shouldItem(state,value) {
    return state.generic_name.toLowerCase().indexOf(value.toLowerCase()) > -1 || state.product_ndc.toLowerCase().indexOf(value.toLowerCase()) > -1
  }
  render () {
    const { value, drug_list } = this.state;
    return (
      <div className = "card col-sm-6" style = {{ marginTop: 40, marginLeft: 50 }}>
        <div className="card-header">
          Country Name :
        </div>
        <div className="card-body">
            <Autocomplete
              inputProps={{ id: 'auto', placeholder: '  please type here' }}
              getItemValue={(item) => item.generic_name || item.product_ndc}
              items={drug_list}
              renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                  {item.generic_name} {item.product_ndc}
                </div>
              }
              value={value}
              onChange={(event, value) => this.changeItem(event, value)}
              onSelect={(value) => this.getItem(value)}
              shouldItemRender={(state,value) => this.shouldItem(state,value)}
            />
            <Autocomplete
              value={this.state.value}
              inputProps={{ id: 'autocomplete', placeholder: '  please type here' }}
              items={drug_list}
              shouldItemRender={(state,value) => this.shouldItem(state,value)}
              getItemValue={(item) => item.generic_name || item.product_ndc}
              onChange={(event, value) => this.setState({ value })}
              onSelect={ value => this.getItem(value)}
              renderItem={(item, isHighlighted) => (
                <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                  {item.product_ndc} {item.generic_name}
                </div>
              )}
            />
        </div>
      </div>
    );
  }
}
export default DrugCopy;




//
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


11:36... backup


import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-autocomplete';
import JSONPretty from 'react-json-pretty';
import './App.scss';
import medicines from '/home/kav/Downloads/Mediciness.json';
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
      axios.get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:${item}`)
        .then((res) => {
          this.setState({
            drug_list2: res.data.results,
          });
        })
    });
  }
  shouldItem(state,value) {
    return state.generic_name.toLowerCase().indexOf(value.toLowerCase()) > -1 || state.product_ndc.toLowerCase().indexOf(value.toLowerCase()) > -1
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
            getItemValue={(item) => item.product_ndc || item.generic_name}
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
                                      console.log('value1', value1)
                                      return key1 === key ?
                                        Object.entries(value1).map(([key2,value2])=> {
                                          console.log('value2', value2)
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


//Final copy with 50000 records
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



// Drug copy
import React, {component} from 'react';
import axios from 'axios';
import Autocomplete from  'react-autocomplete';
import medicine from '/home/kav/Downloads/drugFinal.json';
import './App.scss';

class DrugCopy extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      drug_list: [],
      value: '',
    }
  }
  componentDidMount() {
    this.setState({ drug_list: medicine.results }, () => console.log('response', this.state.drug_list));
  }
  getItem(item) {
    console.log('get1 item', item);
    return item.generic_name;
  }
  changeItem(event)  {
    this.setState({ value: event.target.value });
  }
  renderItem(item, highlighted) {
    console.log('render item', item);
    return item.generic_name;
  }
  selectItem(val) {
    console.log('select', val);
    this.setState({ value: val });
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
    // toString().toLowerCase().indexOf(value.toString().toLowerCase()) > -1
    if (state && state.generic_name) {
      return state.generic_name;
    }
  }
  render () {
    const { value, drug_list } = this.state;
    return (
      <div className = "card col-sm-6" style = {{ marginTop: 40, marginLeft: 50 }}>
        <div className="card-header">
          Country Name :
        </div>
        <div className="card-body">
          <Autocomplete
            value={this.state.value}
            inputProps={{ id: 'autocomplete', placeholder: '  please type here' }}
            items={drug_list.map((each) => each.openfda)}
            shouldItemRender={(state,value) => this.shouldItem(state,value)}
            getItemValue={(item) =>  item.generic_name}
            onChange={(event, value) => this.setState({ value })}
            onSelect={ value => this.getItem(value)}
            renderItem={(item, isHighlighted) => (
              <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                {item.generic_name}
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}
export default DrugCopy;


// Original drugCopy.js
import React, {component} from 'react';
import axios from 'axios';
import Autocomplete from  'react-autocomplete';
import medicine from '/home/kav/Downloads/Mediciness.json';
import './App.scss';

class DrugCopy extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      drug_list: [],
      value: '',
    }
  }
  componentDidMount() {
    this.setState({ drug_list: medicine.results }, () => console.log('response', this.state.drug_list))
  }
  getItem(item) {
    this.setState({ value: item}, () => console.log(this.state.value));
  }
  changeItem(event, value)  {
    this.setState({ value });
  }
  shouldItem(state,value) {
    console.log('lowercase', state.generic_name.toLowerCase());
    return state.generic_name.toLowerCase().indexOf(value.toLowerCase()) > -1 || state.product_ndc.toLowerCase().indexOf(value.toLowerCase()) > -1
  }
  render () {
    const { value, drug_list } = this.state;
    return (
      <div className = "card col-sm-6" style = {{ marginTop: 40, marginLeft: 50 }}>
        <div className="card-header">
          Country Name :
        </div>
        <div className="card-body">
            <Autocomplete
              inputProps={{ id: 'auto', placeholder: '  please type here' }}
              getItemValue={(item) => item.generic_name || item.product_ndc}
              items={drug_list}
              renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                  {item.generic_name} {item.product_ndc}
                </div>
              }
              value={value}
              onChange={(event, value) => this.changeItem(event, value)}
              onSelect={(value) => this.getItem(value)}
              shouldItemRender={(state,value) => this.shouldItem(state,value)}
            />
        </div>
      </div>
    );
  }
}
export default DrugCopy;









//12:42 DrugCopy
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';  
import Autocomplete from 'react-autocomplete';
// import medicines from '/home/kav/Downloads/drugFinal.json';
import medicines from '/home/kav/Downloads/medicines.json';

class DrugCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      value:'',
    };
    this.changeValue = this.changeValue.bind(this);
    this.selectValue = this.selectValue.bind(this);
    this.getItem = this.getItem.bind(this);
  }
  componentDidMount() {
    console.log('medicines list', medicines.results);
   // this.setState({
   //      drug_list: medicines.results.map((each) => each.openfda),
   //    }, () => console.log('drugList', this.state.drug_list));
   this.setState({
    drug_list: medicines.results
   })
  }
  changeValue(e, item) {
    this.setState({
      value: e.target.value,
    }, () => console.log('OnChange', this.state.value));
  }
  selectValue(val) {
    console.log('select', val)
    this.setState({
      value: val,
    }, () => console.log('select', this.state.value));
  }
  getItem(item) {
    console.log('item.generic_name', item[0]);
    this.setState({ value: item }, () => console.log('getItem value', this.state.value))
  }
  shouldItem(state,value) {
    if(state && state.generic_name) {
      if(state.generic_name.toLowerCase() && state.generic_name.toLowerCase().indexOf(value.toLowerCase()) > -1)
      console.log('should-item', state.generic_name)
      return state.generic_name.toLowerCase().indexOf(value.toLowerCase()) > -1 
    }
  }
  render() {
    const { drug_list } = this.state;
    return (
      <div>
        <Autocomplete
          getItemValue={(item) => {
            console.log('1st getItemValue', item.generic_name)
            return item && item.generic_name ? item.generic_name : ''
          }}
          items={drug_list}
          renderItem={(item, isHighlighted) => {
            return (
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.generic_name}
              </div>
            )}
          }
          value={this.state.value}
          onChange={this.changeValue}
          onSelect={(value) => this.getItem(value)}
          shouldItemrender={(item,value) => this.shouldItem(item,value)}
        />
      </div>
    );
  }
}
export default DrugCopy;



11-december-2019
// Druggs.js
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



12-decmeber-2019 DrugNewCopy ..final


import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-autocomplete';
import JSONPretty from 'react-json-pretty';
import './App.scss';
import medicines from '/home/kav/Downloads/drugFinal.json';

class DrugNewCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      value:'',
    };
    this.getty = this.getty.bind(this);
  }
  componentDidMount() {
    console.log('medicines list', medicines.results);
    this.setState({
      drug_list: medicines.results.map((each) => each.openfda),
    });
  }
  changeItem(event,value) {
    this.setState({ value: event.target.value });
  }
  getty(item) {
    if (item && item.generic_name[0]) {
      console.log('3rd getItem value', item.generic_name[0]);
      return item.generic_name[0]; 
    }
  }
  selectItem(val) {
    console.log('val', val);
    this.setState({ value: val });
  }
  shouldItem(state,value) {
    if (state && state.generic_name) {
      if(state.generic_name[0] && state.generic_name[0].toLowerCase().indexOf(value.toLowerCase() > -1)) {
        return state.generic_name[0].toLowerCase().indexOf(value.toLowerCase() > -1);
      }
    }
  }
  render() {
    const { drug_list } = this.state;
    return (
      <div className="final">
        <div className="leftDiv">
          <h2 className="heading">Search Drug:</h2>
          <Autocomplete
            value={this.state.value}
            inputProps={{ id: 'autocomplete', placeholder: '  please type here' }}
            items={drug_list}
            getItemValue={(item) =>  this.getty(item)}
            onChange={(event, value) => this.changeItem(event,value)}
            onSelect={ value => this.selectItem(value)}
            shouldItemRender={(state,value) => this.shouldItem(state,value)}
            renderItem={(item, isHighlighted) => {
              console.log('1st Render item')
              return (
                <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                  {item.generic_name}
                </div>
              )
            }}
          />
        </div>
      </div>
    );
  }
}
export default DrugNewCopy;


// Edited DrugNewCopy..which is same just like drugss



import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-autocomplete';
import JSONPretty from 'react-json-pretty';
import './App.scss';
import medicines from '/home/kav/Downloads/drugFinal.json';

class DrugNewCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      value:'',
    };
    this.getItem = this.getItem.bind(this);
  }
  componentDidMount() {
    console.log('medicines list', medicines.results);
    this.setState({
      drug_list: medicines.results.map((each) => each.openfda),
    });
  }
  // changeItem(event,value) {
  //   this.setState({ value });
  // }
  getItem(item) {
    this.setState({ value: item });
    // if (item && item.generic_name[0]) {
    //   console.log('3rd getItem value', item.generic_name[0]);
    //   return item.generic_name[0]; 
    // }
  }
  // selectItem(val) {
  //   console.log('val', val);
  //   this.setState({ value: val });
  // }
  shouldItem(state,value) {
    if (state && state.generic_name) {
      if(state.generic_name[0] && state.generic_name[0].toLowerCase().indexOf(value.toLowerCase() > -1)) {
        return state.generic_name[0].toLowerCase().indexOf(value.toLowerCase() > -1);
      }
    }
  }
  /*
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
  */
  render() {
    const { drug_list } = this.state;
    return (
      <div className="final">
        <div className="leftDiv">
          <h2 className="heading">Search Drug:</h2>
          <Autocomplete
            value={this.state.value}
            inputProps={{ id: 'autocomplete', placeholder: '  please type here' }}
            items={drug_list}
            getItemValue={(item) =>  item.generic_name[0]}
            onChange={(event, value) => this.setState({ value })}
            onSelect={ value => this.getItem(value)}
            shouldItemRender={(state,value) => this.shouldItem(state,value)}
            renderItem={(item, isHighlighted) => {
              console.log('1st Render item')
              return (
                <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                  {item.generic_name}
                </div>
              )
            }}
          />
        </div>
      </div>
    );
  }
}
export default DrugNewCopy;


//DrugNewCopy with product_ndc || generic_name

import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-autocomplete';
import JSONPretty from 'react-json-pretty';
import './App.scss';
import medicines from '/home/kav/Downloads/drugFinal.json';

class DrugNewCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      value:'',
    };
    this.getty = this.getty.bind(this);
  }
  componentDidMount() {
    console.log('medicines list', medicines.results);
    this.setState({
      drug_list: medicines.results.map((each) => {
        if (each && each.openfda) {
          return each.openfda
        }
      }),
    }, () => console.log('ndc also an generic_name', this.state.drug_list));
  }
  changeItem(event,value) {
    this.setState({ value: event.target.value });
  }
  getty(item) {
    if (item && (item.generic_name[0] || item.product_ndc[0])) {
      console.log('3rd getItem value', item.product_ndc[0]);
      return item.generic_name[0] || item.product_ndc[0]; 
    }
  }
  selectItem(val) {
    console.log('val', val);
    this.setState({ value: val });
  }
  shouldItem(state,value) {
    if (state && (state.generic_name || state.product_ndc)) {
      if((state.generic_name[0] ||  state.product_ndc[0]) && (state.generic_name[0].toLowerCase().indexOf(value.toLowerCase() > -1))) {
        return state.generic_name[0].toLowerCase().indexOf(value.toLowerCase() > -1) || state.product_ndc[0].toLowerCase().indexOf(value.toLowerCase() > -1);
      }
    }
  }
  render() {
    const { drug_list } = this.state;
    return (
      <div className="final">
        <div className="leftDiv">
          <h2 className="heading">Search Drug:</h2>
          <Autocomplete
            value={this.state.value}
            inputProps={{ id: 'autocomplete', placeholder: '  please type here' }}
            items={drug_list}
            getItemValue={(item) =>  this.getty(item)}
            onChange={(event, value) => this.changeItem(event,value)}
            onSelect={ value => this.selectItem(value)}
            renderItem={(item, isHighlighted) => {
              console.log('1st Render item')
              return (
                <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} style={{ fontSize: '20px' }}>
                  {item.generic_name} {item.product_ndc}
                </div>
              )
            }}
          />
        </div>
      </div>
    );
  }
}
export default DrugNewCopy;




//with errors...not picks this.state data in search field
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const token = null;
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      drug_list2: [],
    }
    this.changeItem = this.changeItem.bind(this)
  }
  componentDidMount() {
    this.search("");
  }
  changeItem(e) {
    const { value } = e.target;
    this.setState({
      drug_list2: value
    });
    this.search(value);
  }
  search(item) {
    console.log('item', item);
    axios.get(`https://api.fda.gov/drug/label.json?search=generic_name:${item}`)
      .then((res) => {
        this.setState({ drug_list2: res.data.results }, () => console.log('Response', this.state.drug_list2.map((each) => each.openfda.generic_name)))
      })
  }

  render() {
    const { drug_list2 } = this.state;
    console.log('render11', this.state.drug_list2)
    if (this.state && this.state.drug_list2) {
      console.log('render', this.state.drug_list2.map((each) => each.openfda))
    }
    return (
      <div>
        <form>
          <input
            type="text"
            className="search-box"
            placeholder="Search for..."
          />
        </form>
        <ul>
          <li>list</li>
        </ul>
      </div>
    );
  }
}
export default Forms;





//Form wrong
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      query: '',
      queryBrand: '',
    };
  }
  changeName(e) {
    const {value } = e.target;
    this.setState({
      query: value
    });
  }
  changeBrand(ev) {
    const { value } = ev.target;
    this.setState({
      queryBrand: value
    });
  }
  handleSubmit(event) {
    this.changeName();
    console.log('form is submit');
    console.log('event.prevent', event.preventDefault());
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="final">
          <div className="leftDiv">
            <h2 className="heading">Search Drug:</h2>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <input
                type="text"
                id="autocomplete"
                placeholder="Search for generic_name..."
                onChange={(e) => this.changeName(e)}
              />
              <input type="submit" value="Submit_Name" />
              <input
                type="text"
                id="autocompleteBrand"
                placeholder="Search for brand_name..."
                onChange={(ev) => this.changeBrand(ev)}
              />
              <input type="submit" value="Submit_brnad" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Forms; 

//Code without any errors
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './App.scss';

const tr = { fontSize: '20px' };
class DrugSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drug_list: [],
      query: '',
      queryBrand: '',
    };
  }
  componentDidMount() {
    this.search();
  }
  search(item) {
    console.log('search');
    axios.get(`https://api.fda.gov/drug/label.json?search=generic_name:${item}`)
      .then((response) => {
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  searchBrand(item) {
    axios.get(`https://api.fda.gov/drug/label.json?search=brand_name:${item}`)
      .then((response) => {
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  changeName(e) {
    const {value } = e.target;
    this.setState({
      query: value
    });
    this.search(value);
  }
  changeBrand(ev) {
    const { value } = ev.target;
    this.setState({
      queryBrand: value
    });
    this.searchBrand(value);
  }
  handleSubmit(event) {
    if (event) {
      console.log('event in handleSubmmit', this.changeName())
      event.preventDefault();
    }
    // if (this.changeName(event) || this.changeBrand(event)) {
    //   return true
    // }
  }
  render() {
    let drug_list;
    if (this.state && this.state.drug_list) {
      drug_list = this.state.drug_list;
      console.log('Drugs list', this.state.drug_list);
    }
    return (
      <div>
        <div className="final">
          <div className="leftDiv">
            <h2 className="heading">Search Drug:</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="autocomplete"
                placeholder="Search for generic_name..."
                onChange={(e) => this.changeName(e)}
              />
              <input type="submit" value="Submit" />
              <input
                type="text"
                id="autocompleteBrand"
                placeholder="Search for brand_name..."
                onChange={(ev) => this.changeBrand(ev)}
              />
            </form>
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
                  drug_list.map((each,indexx) => {
                    console.log('List', each)
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
                                              return typeof value2 === 'object' ?
                                                Object.entries(value2).map(([key3,value3]) => {
                                                  return <div key={eachh.id}>{key2} :: {value3.toString()}</div>
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
      </div>
    );
  }
}
export default DrugSearch;



//Show table on click on submit button
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import TableContent from './TableContent';
import './App.scss';

class Forms extends React.Component {
  constructor(){
    super();
    this.state={
        showComponent : false,
        drug_list: [],
    };
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
            <form>
                <label>userName :</label>
                <input type="text" />
                <br/>
                <label>Password :</label>
                <input type="text" />
                <button onClick={this.buttonClick.bind(this)}> Submit </button>
              </form>
              {this.state.showComponent && <TableContent />}
        </div>  
    )
  }
}
export default Forms;

//Table content 2nd part of above
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './App.scss';

class TableContent extends React.Component {
    render() {
        return (
            <select name="sometext" multiple="multiple">
                <option>Table1</option>
                <option>Table2</option>
                <option>Table3</option>
                <option>Table4</option>
                <option>Table5</option>
            </select>

        )
    }
}
export default TableContent;


//Radio buttons in react js
import React, { component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import TableContent from './TableContent';
import './App.scss';

const tr = { fontSize: '20px' };
class DrugSearch extends React.Component {
  constructor(){
    super();
    this.state={
      showComponent : false,
      drug_list: [],
      query: '',
      queryBrand: '',
      size: '',
    };
  }
  changeName() {
    alert('now changeName is started');
  }
  handleChange(e) {
    this.setState({
      size: e.target.value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    this.changeName();
    alert(`${this.state.size}`);
  }
  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>Select a pizza size:</p>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="small"
                  checked={this.state.size === "small"}
                  onChange={(e) => this.handleChange(e)}
                />
                Small
              </label>
            </li>
            
            <li>
              <label>
                <input
                  type="radio"
                  value="medium"
                  checked={this.state.size === "medium"}
                  onChange={(e) => this.handleChange(e)}
                />
                Medium
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="large"
                  checked={this.state.size === "large"}
                  onChange={(e) => this.handleChange(e)}
                />
                Large
              </label>
            </li>
          </ul>
          <button type="submit">Make your choice</button>
        </form>
      </div>  
    )
  }
}
export default DrugSearch;

//Exact code
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
      showComponent : false,
      drug_list: [],
      query: '',
      queryBrand: '',
      size: '',
    };
  }
  componentDidMount() {
    console.log('DID MOUNT');
    this.search();
  }
  search(item) {
    console.log('SEARCH NAME', item);
    let generic_name
    let brand_name
    const searches = generic_name || brand_name;
    axios.get(`https://api.fda.gov/drug/label.json?search=${searches}:${item}`)
      .then((response) => {
        this.setState({
          drug_list: response.data.results,
        });
      });
  }
  changeName(e) {
    const {value } = e.target;
    this.setState({
      query: value,
      queryBrand: value
    });
    this.search(value);
  }
 
  handleChange(e) {
    const { value } = e.target;
    this.setState({
      size: value,
    }, () => {
      console.log('CHANGE_NAME', this.state.size);
      this.search(value)
    });
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
            <h2 className="heading">Search Drug:</h2>
            <form>
              <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="generic_name"
                      checked={this.state.size === "generic_name"}
                      onChange={(e) => this.handleChange(e)}
                    />
                    generic_name
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      type="radio"
                      value="brand_name"
                      checked={this.state.size === "brand_name"}
                      onChange={(e) => this.handleChange(e)}
                    />
                    brand_name
                  </label>
                </li>
              </ul>
              <input
                type="text"
                id="autocomplete"
                placeholder="Search for generic_name..."
                value={this.state.query}
                onChange={(e) => this.changeName(e)}
              /><br />
              <button className="submitBtn" onClick={this.buttonClick.bind(this)}> Submit </button>
            </form>
          </div>
          {this.state.showComponent && <TableContent data={this.state} data2={this.props} />}
        </div>  
    )
  }
}
export default DrugDetails;
