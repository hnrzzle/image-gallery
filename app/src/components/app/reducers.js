export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';
export const ERROR = 'ERROR';

export function loading(state = false, { type }) {
  switch (type) {
    default:
      return state;
  }
}