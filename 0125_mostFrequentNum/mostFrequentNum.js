function solution(array) {
  let max = 0;
  let cnt = 1;
  let item = [];

  array.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      cnt++;
    } else if (array[i] != array[i + 1]) {
      if (cnt > max) {
        max = cnt;
        item = [];
        item.push(array[i]);
        cnt = 1;
      } else if (cnt == max) {
        item.push(array[i]);
        cnt = 1;
      } else if (cnt < max) {
        cnt = 1;
      }
    } else {
      return array[0];
    }
  }
  if (item.length >= 2) {
    return -1;
  }
  return item[0];
}
