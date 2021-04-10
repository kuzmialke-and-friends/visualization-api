import { Subjects } from 'app/types';
import { request } from './fetch';

export const fetchSubjects = async (
  id: string,
  endpoint = process.env.DATA_BACKEND,
) => {
  try {
    return await request<Subjects>(`${endpoint}/${id}.json`);
  } catch (error) {
    return null;
  }
};
