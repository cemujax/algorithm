/**
 * 괄호변환
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.19
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/60058
 */
function solution(p) {
  if (p.length === 0) return '';

  let [u, v] = divideUV(p);

  if (!checkProperBracket(u)) {
    return '(' + solution(v) + ')' + getNewU(u);
  } else {
    return u + solution(v);
  }
}

const getNewU = u => {
  return u
    .slice(1, u.length - 1)
    .split('')
    .map(ch => {
      if (ch === '(') {
        return ')';
      } else {
        return '(';
      }
    })
    .join('');
};

/* 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. */
const divideUV = str => {
  let count = 0;
  let u = '',
    v = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      u = str.slice(0, i + 1);
      v = str.slice(i + 1);
      break;
    }
  }
  return [u, v];
};

/* 올바른 괄호 문자열 체크 */
const checkProperBracket = str => {
  let count = 0;
  if (str[0] === ')' || str[str.length - 1] === '(') return false;
  for (let s of str) {
    if (s === '(') {
      count++;
    } else {
      count--;
    }
    if (count < 0) return false;
  }
  return true;
};

const examples = [
  ')(', // "()"
  '()))((()', // "()(())()"
  '(()())()', // "(()())()"
];

for (let example of examples) {
  console.log(solution(example));
}
