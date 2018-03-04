import React from 'react';
import P from 'prop-types'


export default class DateTime extends React.Component {

  handleChange() {

  }

  render() {
    return (
      <div>
        <p>DateTime{this.props.input.k}</p>
        <input type="text" value={this.props.input.value} onChange={this.handleChange} />
      </div>
    )
  }
}

DateTime.propTypes = {
  input: P.object.isRequired

};
