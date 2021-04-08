export const parseResponse = (body: string) => {
  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
};
