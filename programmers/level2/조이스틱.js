/**
 * 조이스틱
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.13
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript
 *
 */
function solution(name) {
  const length = name.length;
  let str = Array(length).fill('A');
  let answer = 0;

  let idx = 0;
  while (str.join('') !== name) {
    /* 문자 조작 */
    if (str[idx] !== name[idx]) {
      let pos = name.charCodeAt(idx) - str[idx].charCodeAt(0);
      pos = pos < 13 ? pos : 26 - pos;
      str[idx] = name[idx];
      answer += pos;
    }
    if (str.join('') === name) break;

    /* 커서 이동 */
    const [nextIdx, count] = isWillChange(idx, 1, str, name);
    answer += count;
    idx = nextIdx;
  }

  return answer;
}

function isWillChange(index, order, initial, name) {
  const length = name.length - 1;
  const next =
    index + order > length ? index + order - length + 1 : index + order;
  const prev = index - order < 0 ? index - order + length + 1 : index - order;
  /* 오른쪽 */
  if (initial[next] !== name[next]) {
    return [next, order];
  }
  /* 왼쪽 */
  if (initial[prev] !== name[prev]) {
    return [prev, order];
  }
  return isWillChange(index, order + 1, initial, name);
}

console.log(solution('JEROEN')); // 56
console.log(solution('JAN')); // 23
