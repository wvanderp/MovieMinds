import React from 'react';
import fieldTypes from '../../../statements/fieldTypes';

import DateForm from './Date.jsx'
import DateTimeForm from './DateTime.jsx'
import GeoCordsForm from './GeoCords.jsx'
import InternalIdForm from './InternalId.jsx'
import NumberForm from './Number.jsx'
import StringForm from './String.jsx'
import UrlForm from './Url.jsx'

export const getFields = (fieldType) => {
  // eslint-disable-next-line
  switch (fieldType) {
    case fieldTypes.date:
      return DateForm;
    case fieldTypes.dateTime:
      return DateForm;
    case fieldTypes.geoCords:
      return GeoCordsForm;
    case fieldTypes.internalId:
      return InternalIdForm;
    case fieldTypes.number:
      return NumberForm;
    case fieldTypes.string:
      return StringForm;
    case fieldTypes.url:
      return UrlForm;
    default:
      return <div>not found: {fieldType}</div>
  }
};
