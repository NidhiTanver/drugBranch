import React, { component } from 'react';
import Select from 'react-select';
// import medicines from '/home/kav/Downloads/Mediciness.json';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
  }
  
  render() {
    const { selectedOption } = this.state;
    return (
      <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users/:id" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
    );
  }
}
export default DropDown;
