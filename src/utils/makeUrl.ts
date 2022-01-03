interface IParams {
    [key: string]: string | number
}


export const makeUrl = (url: string, params: IParams) => {
    if (params) {
        return `${url}?${Object.keys(params)
          .map(k => `${k}=${encodeURIComponent(params[k])}`)
          .join('&')}`;
    }
    return url;
};