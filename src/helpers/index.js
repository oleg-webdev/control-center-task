/* eslint-disable import/prefer-default-export */
/*
 * @TODO: maybe add some other helpers,
 * thats why I disabled such eslint rule
 */

// TODO: for more uniq value maybe - new Date().getTime()
export const makeId = (len) => {
  let text = '';
  const hashLength = len || 5;
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < hashLength; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
