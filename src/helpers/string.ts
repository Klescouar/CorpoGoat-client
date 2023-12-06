export const removeBeforeWord = (str: string, word: string): string => {
  const index = str.indexOf(word);
  if (index === -1) return str;
  return str.substring(index + word.length);
};
