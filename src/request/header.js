import omit from 'lodash/omit';

import { assign } from './index';

export const header = (header, value) => (request = {}) => {
  const { headers = {} } = request;
  let update;

  if (value) {
    update = {
      headers: {
        ...headers,
        [header]: value,
      },
    };
  } else if (headers[header]) {
    update = {
      headers: omit(headers, header),
    };
  }

  return assign(update)(request);
};
