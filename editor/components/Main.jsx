import React from 'react';
import {connect} from 'react-redux';

import EnitiyForm from './EnitiyForm'
class Main extends React.Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <div>
        <EnitiyForm />
      </div>
    )
  }
}


Main.propTypes = {
};

export default connect((state) => {
  return state.index
})(Main);
