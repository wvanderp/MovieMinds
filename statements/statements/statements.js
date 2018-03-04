import {valueType, relationType} from '../tools/values';

export const statements = [
  {
    'id': 1,
    'type': relationType.self,
    'valueType': valueType.string,
    'name': 'plays in',
    'forwardPhrase': 'plays in',
    'backwardPhrase': 'plays in',
    'discription': 'person plays in movie'
  },
  {
    'id': 2,
    'type': relationType.external,
    'valueType': valueType.url,
    'name': 'plays in',
    forwardPhrase: 'IMDB page of',
    backwardPhrase: '',
    discription: 'the imdb page of the movie',
  },
  {
    'id': 5,
    'type': relationType.oneToOne,
    'valueType': valueType.internalId,
    name: 'plays in',
    forwardPhrase: 'plays in',
    backwardPhrase: 'plays in',
    discription: 'person plays in movie'
  }
];
