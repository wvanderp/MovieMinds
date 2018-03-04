import React from 'react';
import P from 'prop-types'


export default class String extends React.Component {
  handleChange() {

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>String{this.props.input.k}</p>
        <input type="text" value={this.props.input.value} onChange={this.handleChange} />
      </div>
    )
  }
}

String.propTypes = {
  input: P.object.isRequired
};
