/**
 * 후보키
 *
 * 릴레이션을 나타내는 문자열 배열 relation이 매개변수로 주어질 때,
 * 이 릴레이션에서 후보 키의 개수를 return 하도록 solution 함수를 완성하라.
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 02. 14
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42890?language=javascript
 *
 */

function solution(relation) {
  const tuples = relation[0].length,
    rows = relation.length;
  const cKey = [];

  for (let i = 1; i <= 1 << tuples; i++) {
    const set = new Set();

    for (let j = 0; j < rows; j++) {
      let key = "";

      for (let k = 0; k < tuples; k++) {
        if (i & (1 << k)) {
          key += relation[j][k];
        }
      }
      set.add(key);
    }

    // 유일성 및 최소성 체크
    if (rows === set.size && isMinimal(cKey, i)) {
      cKey.push(i);
    }
  }
  return cKey.length;
}

// 최소성 체크
function isMinimal(cKey, index) {
  for (let i = 0; i < cKey.length; i++) {
    if ((cKey[i] & index) == cKey[i]) return false;
  }
  return true;
}

const relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"]
];

console.log(solution(relation));
