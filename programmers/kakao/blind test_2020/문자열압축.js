/**
 * 문자열압축
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.12
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript
 */
function solution(s) {
  let length = s.length;
  let answer = length;

  const compressStr = (str, ch, size) => {
    let res = '';
    let count = 1;

    for (let i = size; i < str.length; i += size) {
      let ch2 = str.slice(i, i + size);
      if (ch === ch2) {
        count += 1;
      } else {
        count = count > 1 ? String(count) : '';
        res += count + ch;
        ch = ch2;
        count = 1;
      }
    }
    if (ch) {
      count = count > 1 ? String(count) : '';
      res += count + ch;
    }
    return res;
  };

  /* 자를 문자열 길이 */
  for (let i = 1; i <= Math.floor(length / 2); i++) {
    let ch = s.slice(0, i);
    let compressed = compressStr(s, ch, i);
    answer = Math.min(answer, compressed.length);
  }
  return answer;
}

// 7 9 8 14 17
const examples = [
  'aabbaccc',
  'ababcdcdababcdcd',
  'abcabcdede',
  'abcabcabcabcdededededede',
  'xababcdcdababcdcd',
];

for (let example of examples) {
  console.log(solution(example));
}
