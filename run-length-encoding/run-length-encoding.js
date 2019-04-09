export const encode = (data) => {
  isEmpty(data);
  let rle = [];
  for (let i = 0; i < data.length; i++) {
    let count = 1;
    while(i < data.length && data.charAt(i) === data.charAt(i + 1)){
      count++;
      i++;
    }
    count !== 1 ? rle.push(count) : false;
    rle.push(data.charAt(i));  
  }
  return rle.join('');
}

export const decode = (data) => {
  const numAndLet = /(\d+)(\w|\s)/g;
  return data.replace(numAndLet,
    (match, repeats, char) => new Array(+repeats + 1).join(char));
} 

function isEmpty(data) {
  if (data === '') return '';
} 