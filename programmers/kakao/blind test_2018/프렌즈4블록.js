/**
 * 프렌즈4블록
 * 입력으로 주어진 판 정보를 가지고 몇 개의 블록이 지워질지 출력하라.
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 04
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/17679?language=javascript
 *
 */

function solution(m, n, board) {
  board = board.map(v => v.split(""));
  let deleteNum = 0;

  while (true) {
    // 지워질 블록 위치 찾기
    let foundPos = [];
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i][j - 1] &&
          board[i][j] === board[i - 1][j - 1] &&
          board[i][j] === board[i - 1][j]
        ) {
          foundPos.push([i, j]);
        }
      }
    }

    // 지워질 블록 없음. 게임 종료
    if (!foundPos.length) {
      board.map((v, i) => (deleteNum += v.filter(x => !x).length));
      return deleteNum;
    }

    // 블록 지우기
    foundPos.forEach(pos => {
      board[pos[0]][pos[1]] = 0;
      board[pos[0]][pos[1] - 1] = 0;
      board[pos[0] - 1][pos[1] - 1] = 0;
      board[pos[0] - 1][pos[1]] = 0;
    });

    // 블록 지운 후 빈 공간 채우기!!
    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some(v => !v)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
}

const examples = [
  {
    m: 4,
    n: 5,
    board: ["CCBDE", "AAADE", "AAABF", "CCBBF"]
  },
  {
    m: 6,
    n: 6,
    board: ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]
  }
];

for (let example of examples) {
  console.log(solution(example.m, example.n, example.board));
}
