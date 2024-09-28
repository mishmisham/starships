export const getFetch = async (url, params={}) => {
    const response = await fetch(url, {
        method: 'GET',
        ...params
    });

    const result = await response.json();

    return result;
}