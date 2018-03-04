import {get} from '../lib/toolApi';
const baseUrl = 'http://localhost:8000/api/';


export const getData = () => (dispatch) => {
  return dispatch(get(
    `${baseUrl}movies/M8L8L3N4I6M`,
    {
      types: [
        'REQUEST_GET_INDEX_DATA_',
        'FAILURE_GET_INDEX_DATA',
        'SUCCESS_GET_INDEX_DATA'
      ]
    }
  ));
};
