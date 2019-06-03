export class translator {
  static translate(word) {
    const phrase = word.split(' ');
    const translation = phrase.map(word => {
      if (vowels.indexOf(word[0]) !== -1 || word.startsWith('xr') || word.startsWith('yt')) return word + 'ay';
      if (startsWithThree(word)) return word.slice(3) + word[0] + word[1] + word[2] + 'ay';
      if (startsWithTwo(word)) return word.slice(2) + word[0] + word[1] + 'ay';
      return word.slice(1) + word[0] + 'ay';
    });
    return translation.join(' ');
  }
}

const vowels = ["a", "e", "i", "o", "u"];
const startsWithThree = function(str) {
  let fst = str[0];
  let snd = str[1]
  let trd = str[2];
  let frth = str[3];

  if ((fst === 't' && snd === 'h' && trd === 'r') || (fst === 's' && snd === 'q' && trd === 'u') || (fst === 's' && snd === 'c' && trd === 'h')) return true;
  return false;
}
const startsWithTwo = function(str) {
  let fst = str[0];
  let snd = str[1];
  let trd = str[2];
  
  if ((fst === 'x' && snd === 'r') || (fst === 'c' && snd === 'h') || (fst === 't' && snd === 'h') || (fst === 's' && snd === 'q') || (fst === 'q' && snd === 'u') || (fst === 'r' && snd === 'h')) return true;
  return false;
}
