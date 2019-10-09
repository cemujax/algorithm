/**
 * 숫자 야구
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.09
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42841?language=javascript
 */
function solution(baseball) {
  let answer = 0;

  for (let i = 123; i <= 987; i++) {
    const arr = String(i)
      .split('')
      .map(v => +v);
    const set = new Set([...arr]);

    // 서로 다른 숫자(1~9)
    if (set.size < 3 || arr.indexOf(0) >= 0) continue;
    let count = 0;

    for (let base of baseball) {
      let [num, strike, ball] = base;
      const numArr = String(num)
        .split('')
        .map(v => +v);

      let strikeCnt = 0,
        ballCnt = 0;
      for (let j = 0; j < 3; j++) {
        if (arr[j] === numArr[j]) strikeCnt++;
      }
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          if (j !== k && arr[j] === numArr[k]) ballCnt++;
        }
      }

      if (strike === strikeCnt && ball == ballCnt) {
        count++;
      }
    }
    if (count === baseball.length) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]));
