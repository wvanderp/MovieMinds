import React from 'react';
import P from 'prop-types'


export default class Number extends React.Component {

  handleChange() {

  }

  render() {
    return (
      <div>
        <p>Number{this.props.input.k}</p>
        <input type="text" value={this.props.input.value} onChange={this.handleChange} />
      </div>
    )
  }
}

Number.propTypes = {
  input: P.object.isRequired

};

