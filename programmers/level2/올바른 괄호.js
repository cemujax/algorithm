/**
 * 올바른 괄호
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 12. 22
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
 *
 */

function solution(s) {
  const length = s.length;

  if (s[0] === ")" || s[length - 1] === "(") {
    return false;
  }
  const stack = [];

  for (let i = 0; i < length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else if (s[i] === ")") {
      stack.pop();
    }
  }

  return stack.length > 0 ? false : true;
}

console.log(solution("()()")); //	true
console.log(solution("(())()")); //	true
console.log(solution(")()(")); //	false
console.log(solution("(()(")); //	false
