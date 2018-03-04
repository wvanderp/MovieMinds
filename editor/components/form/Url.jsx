import React from 'react';
import P from 'prop-types'

export default class Url extends React.Component {

  handleChange() {

  }

  render() {
    return (
      <div>
        <p>Url{this.props.input.k}</p>
        <input type="text" value={this.props.input.value} onChange={this.handleChange} />
      </div>
    )
  }
}

Url.propTypes = {
  input: P.object.isRequired

};
