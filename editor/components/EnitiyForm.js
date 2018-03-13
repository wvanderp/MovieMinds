import React from 'react';
import {reduxForm} from 'redux-form';

class EnitiyForm extends React.Component{
  componentWillMount(){

  }

  render() {
    return <div>
      hallo
    </div>
  }
}

export default reduxForm({
  form: 'EnitiyForm'
})(EnitiyForm)
