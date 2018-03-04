import React from 'react';
import P from 'prop-types'

import deep from 'deep-diff';

export default class Submit extends React.Component {
  constructor() {
    super();
  }

  submit() {

  }

  render() {
    // console.log(this.props.oldContent, this.props.content);

    const contDiff = deep.diff(this.props.oldContent, this.props.content);

    // console.log(contDiff);
    return (
      <div>
        <h1>Submit</h1>
        <div>some visualatisation</div>
        <div>{JSON.stringify(contDiff)}</div>
        <button className="btn btn-success" onClick={this.submit}>submit</button>
      </div>
    )
  }
}

Submit.propTypes = {
  oldContent: P.array.isRequired,
  content: P.array.isRequired
};

