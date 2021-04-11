import got, { OptionsOfJSONResponseBody } from 'got/dist/source';

export const requestOptions: OptionsOfJSONResponseBody = {
  responseType: 'json',
  timeout: undefined,
};

export const request = got.extend({
  parseJson: (body) => {
    if (typeof body === 'string') {
      try {
        return JSON.parse(body);
      } catch {
        return null;
      }
    }

    return body;
  },
});
