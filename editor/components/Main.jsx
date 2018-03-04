import React from 'react';

import {connect} from 'react-redux';
import P from 'prop-types';

import Relation from './form/Relation.jsx'
import Submit from './Submit.jsx'



class Main extends React.Component {
  componentWillMount() {
    
  }

  render() {
    if ((this.props.data === undefined || this.props.oldData === undefined)) {
      return <p>still loading</p>
    }
    return (
      <div>
        <div>
          <button className="btn btn-info" onClick={this.showEdit}>edit</button>
          <button className="btn btn-success" onClick={this.showSubmit}>submit</button>
        </div>
        <div id="edit">
          <Relation />
        </div>
        <div id="submit" className="hidden">
          <Submit content={this.props.data.content} oldContent={this.props.oldData.content} />
        </div>
      </div>
    )
  }
}


Main.propTypes = {
  data: P.object.isRequired,
  oldData: P.object.isRequired
};

export default connect((state) => {
  return state.index
})(Main);
