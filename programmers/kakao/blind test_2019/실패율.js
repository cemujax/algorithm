/**
 * 실패율
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 11
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript
 *
 */

function solution(N, stages) {
  let userCount = stages.length;
  const failRate = [];

  // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
  let notClear = new Array(N + 1).fill(0);
  for (let val of stages) {
    notClear[val - 1]++;
  }

  for (let i = 1; i <= N; i++) {
    if (!userCount) {
      failRate.push({ stage: i, failRate: 0 });
    } else {
      failRate.push({ stage: i, failRate: notClear[i - 1] / userCount });
    }
    userCount -= notClear[i - 1];
  }

  /* 
    sort
    실패율이 높은 스테이지부터 내림차순
    실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
  */
  failRate.sort((a, b) => {
    if (a.failRate === b.failRate) {
      return a.stage - b.stage;
    }
    return b.failRate - a.failRate;
  });

  const answer = failRate.map(a => a.stage);
  return answer;
}

const examples = [
  { N: 5, stages: [2, 1, 2, 6, 2, 4, 3, 3] },
  { N: 4, stages: [4, 4, 4, 4, 4] }
];

for (let example of examples) {
  console.log(solution(example.N, example.stages));
}
