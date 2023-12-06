import { removeBeforeWord } from '../string';

describe('removeBeforeWord function', () => {
  test('returns the correct string when the word is found in the string', () => {
    const str = 'Hello World';
    const word = 'Hello';
    const result = removeBeforeWord(str, word);
    expect(result).toBe(' World');
  });

  test('returns the original string when the word is not found', () => {
    const str = 'Hello World';
    const word = 'Earth';
    const result = removeBeforeWord(str, word);
    expect(result).toBe('Hello World');
  });

  test('returns an empty string when the word is the same as the string', () => {
    const str = 'Hello';
    const word = 'Hello';
    const result = removeBeforeWord(str, word);
    expect(result).toBe('');
  });
});
