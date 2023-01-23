function solution(n) {
  var answer = 1;
  let temp = [];

  for (let i = 2; i <= n; i++) {
    if (n % i == 0) temp.push(i);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] % 2 == 1) answer++;
  }

  return answer;
}
