export const jsonToQuery = (json={}) => {
    return Object.keys(json).reduce((acc, curr, i) => {
        const divider = i > 0 ? '&' : '';
        return `${acc}${divider}${curr}=${json[curr]}`;
    }, '');
}