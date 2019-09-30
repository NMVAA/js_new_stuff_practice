import { wordsCount, getWords } from './lesson1_dl/lesson1';

console.log(wordsCount('  Всем  привет! Ура ура! '));

for (const word of getWords('  Всем  привет! Ура ура! ')) {
  console.log(word);
}
