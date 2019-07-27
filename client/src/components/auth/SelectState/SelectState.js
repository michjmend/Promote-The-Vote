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
      <p>
        State: <SelectUSState id="myId" className="myClassName d-flex align-items-center" onChange={this.setNewValue}/>
      </p>
    );
  }
}

export default SelectState
