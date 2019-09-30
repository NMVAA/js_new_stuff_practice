import '@babel/polyfill';

export const wordsCount = (str) => str.trim().replace(/  +/g, ' ').split(' ').length;

export function* getWords(str) {
  for (let i = 0; i < wordsCount(str); i++) {
    yield str.trim().replace(/  +/g, ' ').split(' ')[i];
  }
}
