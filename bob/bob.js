'use strict';

const isQuestion = str => str.endsWith('?');
const isYelling = str => str.toUpperCase() === str;
const isWord = str => /[A-Za-z]/.test(str) === true;

export const hey = (message) => {
  message = message.trim();
  if (isYelling(message) && isQuestion(message) && isWord(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (isYelling(message) && isWord(message)) {
    return "Whoa, chill out!";
  } else if (isQuestion(message)) {
    return "Sure.";
  } else if (message === '') {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};
