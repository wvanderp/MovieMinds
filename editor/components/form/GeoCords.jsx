import React from 'react';
import P from 'prop-types'


export default class GeoCords extends React.Component {

  handleChange() {

  }

  render() {
    return (
      <div>
        <p>GeoCord{this.props.input.k}</p>
        <input type="text" value={this.props.input.value} onChange={this.handleChange} />
      </div>
    )
  }
}

GeoCords.propTypes = {
  input: P.object.isRequired

};
