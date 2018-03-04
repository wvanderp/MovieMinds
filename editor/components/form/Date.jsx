import React from 'react';
import P from 'prop-types'


export default class Date extends React.Component {
  handleChange() {

  }

  render() {
    return (
      <div>
        <p>Date{this.props.input.k}</p>
        <input type="text" value={this.props.input.value} onChange={this.handleChange} />
      </div>
    )
  }
}

Date.propTypes = {
  input: P.object.isRequired

};
