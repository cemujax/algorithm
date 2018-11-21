/**
 * 서울에서 김서방 찾기
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 11. 22
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript
 *
 */

function solution(seoul) {
  const index = seoul.findIndex(p => p === "Kim");
  return "김서방은 " + index + "에 있다";
}

console.log(solution(["Jane", "Kim"])); // 김서방은 1에 있다
