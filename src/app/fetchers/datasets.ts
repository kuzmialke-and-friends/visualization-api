import got from 'got';

export const fetchDatasets = async (
  id: string,
  endpoint = process.env.DATA_BACKEND,
) => {
  try {
    const response = await got(`${endpoint}/${id}.json`);
    return response;
  } catch (error) {
    return null;
  }
};
