module.exports = (headers) =>
  new Headers(Object.entries(headers).map(([key, value]) => [key, value]));
