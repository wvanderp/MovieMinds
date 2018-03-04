import {handleActions} from 'redux-actions';
import {assoc, pipe} from 'ramda';

const defaultState = {

  data: {},
  content: {},
  oldData: {}

};


export default handleActions(
  {
    REQUEST_GET_INDEX_DATA_: state => assoc('isWorking', true, state),
    FAILURE_GET_INDEX_DATA: state => assoc('isWorking', false, state),
    SUCCESS_GET_INDEX_DATA: (state, action) => {
      pipe(
        assoc('isWorking', false, state),
        assoc('data', action.payload)
      )(state)
    }

  },
  defaultState
);
