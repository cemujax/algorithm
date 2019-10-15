/**
 * JadenCase 문자열 만들기
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.15
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12951
 *
 */

function solution(s) {
  const answer = s
    .split(' ')
    .map(v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase());
  return answer.join(' ');
}

console.log(solution('3people unFollowed me')); // 3people Unfollowed Me
console.log(solution('for the last week')); // For The Last Week
