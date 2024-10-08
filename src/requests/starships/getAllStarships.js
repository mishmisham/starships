import { BASE_STARSHIP_API_URL } from '../apiConfig';
import { getFetch } from '@/utils/getFetch';
import { jsonToQuery } from '@/utils/jsonToQuery';

export const getAllStarships = async (params) => {
    const paramsString = typeof params !== 'string' ? jsonToQuery(params) : params;
    const url = `${BASE_STARSHIP_API_URL}?${paramsString}`;
    const list = await getFetch(url);
    return list;
}