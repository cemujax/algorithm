/**
 * 위장
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.22
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42578
 */
function solution(clothes) {
  const map = new Map();
  for (let [name, kind] of clothes) {
    if (!map.has(kind)) {
      map.set(kind, 1);
    } else {
      map.set(kind, map.get(kind) + 1);
    }
  }

  let answer = [...map.values()].reduce((acc, v) => acc * (v + 1), 1);
  return answer - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]),
);
console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ]),
);
