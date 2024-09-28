import { BASE_STARSHIP_API_URL } from '../apiConfig';
import { getFetch } from '../../utils/getFetch';
 
export const getStarshipDetails = async (id) => {
    const url = `${BASE_STARSHIP_API_URL}${id}`;
    const starship = await getFetch(url);
    return starship;
}