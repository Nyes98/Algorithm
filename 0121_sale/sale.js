function solution(want, number, discount) {
  var answer = 0;
  let my = [];

  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number[i]; j++) {
      my.push(want[i]);
    }
  }
  console.log(my);
  my.sort();

  for (let j = 0; j < discount.length - 9; j++) {
    let cut = discount.slice(j, j + 10).sort();
    if (my.join() == cut.join()) answer++;
  }
  console.log(answer);
  return answer;
}
