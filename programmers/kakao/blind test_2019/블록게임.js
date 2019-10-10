/**
 * 블록게임
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.10
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42894
 */

function solution(board) {
  let answer = 0;
  const N = board.length;

  while (true) {
    let isDel = false;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        /* 3x2 , 2X3 체크*/
        const result =
          checkDelete(i, j, board, 3, 2) || checkDelete(i, j, board, 2, 3);

        if (result) {
          deleteBlock(i, j, board, result.w, result.h);
          isDel = true;
          answer++;
          break;
        }
      }
      if (isDel) break;
    }

    /* 지울 수 있는 블록 더 없음 */
    if (!isDel) return answer;
  }
}

/* 3x2 , 2X3 */
function checkDelete(y, x, board, w, h) {
  // 보드 범위 벗어남
  if (x + w > board.length || y + h > board.length) return false;

  let emptyCnt = 0,
    blockNum = 0,
    blockCnt = 0;
  for (let i = y; i < y + h; i++) {
    for (let j = x; j < x + w; j++) {
      if (!board[i][j] && !isEmpty(i, j, board)) return false;

      if (!board[i][j]) emptyCnt++;
      if (!blockNum && board[i][j]) blockNum = board[i][j];
      if (board[i][j] && board[i][j] === blockNum) blockCnt++;
    }
  }

  if (emptyCnt !== 2 || blockCnt !== 4 || blockNum === 0) return false;
  return { w, h };
}

// 위에 비었는지
function isEmpty(y, x, board) {
  while (y-- > 0) {
    if (board[y][x]) return false;
  }
  return true;
}

function deleteBlock(y, x, board, w, h) {
  for (let i = y; i < y + h; i++) {
    for (let j = x; j < x + w; j++) {
      board[i][j] = 0;
    }
  }
}

const examples = [
  {
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
      [0, 0, 0, 0, 0, 4, 4, 0, 0, 0],
      [0, 0, 0, 0, 3, 0, 4, 0, 0, 0],
      [0, 0, 0, 2, 3, 0, 0, 0, 5, 5],
      [1, 2, 2, 2, 3, 3, 0, 0, 0, 5],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 5],
    ],
  },
];

// 2
for (let example of examples) {
  console.log(solution(example.board));
}
