import React from 'react';
import P from 'prop-types'


export default class InternalId extends React.Component {

  handleChange() {

  }

  render() {
    return (
      <div>
        <p>InternalId{this.props.input.k}</p>
        <input type="text" value={this.props.input.value} onChange={this.handleChange} />
      </div>
    )
  }
}

InternalId.propTypes = {
  input: P.object.isRequired

};
