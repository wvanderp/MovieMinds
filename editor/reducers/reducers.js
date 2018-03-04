import {combineReducers} from 'redux'

import indexReducer from './indexReducer'
import submitReducer from './submitReducer';
import {reducer as formReducer} from 'redux-form'
import { createModelReducer, createFormReducer } from 'redux-simple-form';

export default combineReducers({
  submit: submitReducer,
  index: indexReducer,
  formReducer: formReducer
})
