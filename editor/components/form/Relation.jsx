import React from 'react';
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import P from 'prop-types'
import _ from 'lodash'

import {getFields} from './Field.jsx'

class Relation extends React.Component {
  render() {

  }
}

Relation.propTypes = {
  content: P.object.isRequired
};

export default connect((state, props) => {
  return {
    // initialValues: props.content,
    content: props.content
  }
})(reduxForm({
  form: 'editForm',
  enableReinitialize: true
})(Relation))
