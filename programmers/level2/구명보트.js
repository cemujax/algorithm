/**
 * 구명보트
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.16
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42885
 */
function solution(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0,
    right = people.length - 1;

  while (left < right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
  }
  return people.length - left;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
console.log(solution([40, 40, 50, 50, 60, 70, 80, 90], 100)); // 6
