import { StaticMap } from 'app/types';
import { request } from './fetch';

export const fetchStaticMap = async (
  id: string,
  endpoint = process.env.DATA_BACKEND,
) => {
  try {
    return await request<StaticMap>(`${endpoint}/${id}StaticMap.json`);
  } catch (error) {
    return null;
  }
};
