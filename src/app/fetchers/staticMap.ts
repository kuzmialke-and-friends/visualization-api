import { StaticMap } from 'app/types';
import { request, requestOptions } from './fetch';

export const fetchStaticMap = async (
  id: string,
  endpoint = process.env.DATA_BACKEND,
) => {
  try {
    return await request<StaticMap>(
      `${endpoint}/${id}StaticMap.json`,
      requestOptions,
    );
  } catch (error) {
    return null;
  }
};
