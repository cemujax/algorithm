/**
 * 방문길이
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.31
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/49994
 */
function solution(dirs) {
  const moves = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  const MAP_SIZE = 5;
  const routes = {};
  let answer = 0;
  let pos = [0, 0];

  for (let dir of dirs) {
    let nx = pos[0] + moves[dir][0];
    let ny = pos[1] + moves[dir][1];
    if (nx > MAP_SIZE || nx < -MAP_SIZE || ny > MAP_SIZE || ny < -MAP_SIZE) {
      continue;
    }

    let from = `${pos[0]},${pos[1]}`;
    let to = `${nx},${ny}`;

    if (!routes[from]) routes[from] = {};
    if (!routes[to]) routes[to] = {};

    pos = [nx, ny]; // 이동한 좌표

    if (routes[from][to] || routes[to][from]) {
      continue;
    }

    routes[from][to] = true;
    routes[to][from] = true;
    answer++;
  }

  return answer;
}

console.log(solution('ULURRDLLU')); //	7
console.log(solution('LULLLLLLU')); //	7
