function solution(k, m, score) {
  var answer = 0;

  score.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < parseInt(score.length / m); i++) {
    let temp = score.slice(i * m, i * m + m);
    answer += temp[m - 1] * m;
  }

  return answer;
}
