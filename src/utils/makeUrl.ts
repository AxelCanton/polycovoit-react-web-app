interface IParams {
    [key: string]: string | number | string[] | number[]
}


export const makeUrl = (url: string, params: IParams) => {
    if (params) {
        const keys = Object.keys(params);
        const queryParams = keys.map(key => {
            const value = params[key];
            if (Array.isArray(value)) {
                const arrayValue = value;
                return arrayValue.length === 0
                ? null
                : (arrayValue as (string | number)[]).map((valueElement: string | number) => `${key}[]=${encodeURIComponent(valueElement)}`).join('&');
            } else {
                return `${key}=${encodeURIComponent(value)}`;
            }
        })
        .filter(value => value !== null)
        .join('&');
        return `${url}?${queryParams}`;
    }
    return url;
};