import React, {Component} from 'react';
import SelectUSState from 'react-select-us-states';

class SelectState extends Component {

  constructor(props) {
    super(props);

    this.setNewValue = this.setNewValue.bind(this);
  }

  setNewValue(newValue) {
    console.log('this is the State code:' + newValue);
  }

  render() {
    return (
      <div ClassName="states">
      <p>
        State: </p>
        <SelectUSState id="myId" className="myClassName d-flex align-items-center" onChange={this.setNewValue}/>
      </div>
    );
  }
}

export default SelectState
