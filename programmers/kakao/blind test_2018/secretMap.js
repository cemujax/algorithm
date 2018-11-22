/**
 * 비밀지도
 * 원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 11. 22
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
 *
 */

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    let binary = (arr1[i] | arr2[i]).toString(2);

    // 0 채움
    binary =
      binary.length < n ? "0".repeat(n - binary.length) + binary : binary;

    answer.push(binary.replace(/1/g, "#").replace(/0/g, " "));
  }

  return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
// ["#####","# # #", "### #", "# ##", "#####"]

solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
// ["######", "### #", "## ##", " #### ", " #####", "### # "]
