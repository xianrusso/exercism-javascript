'use strict';

export const hey = (message) => {
  message = message.trim();
  if (message.toUpperCase() === message && message.slice(-1) === '?' && /[A-Za-z]/.test(message) === true) {
    return "Calm down, I know what I'm doing!";
  } else if (message.toUpperCase() === message && /[A-Za-z]/.test(message) === true) {
    return "Whoa, chill out!";
  } else if (message.slice(-1) === '?') {
    return "Sure.";
  } else if (message === '') {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};
