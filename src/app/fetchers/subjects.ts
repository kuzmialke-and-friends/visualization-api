import { Subjects } from 'app/types';
import { request, requestOptions, Response } from './fetch';

export type FetchedSubjects = Response<Subjects>;

export const fetchSubjects = async (
  id: string,
  endpoint = process.env.DATA_BACKEND,
): Promise<FetchedSubjects | null> => {
  try {
    return await request<Subjects>(`${endpoint}/${id}.json`, requestOptions);
  } catch (error) {
    return null;
  }
};
