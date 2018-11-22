/**
 * 다트 게임
 * 3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다. 예) 37
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 11. 22
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript
 *
 */

function solution(dartResult) {
  const pattern = /[0-9]{1,2}[S|D|T][\*|#]{0,1}/g;
  const games = dartResult.match(pattern);
  const scores = [];

  for (let i = 0; i < games.length; i++) {
    const [number, bonus, opt] = games[i].match(
      /([0-9]{1,2})|([S|T|D])|([\*|#])/g
    );

    let num = Number(number);

    // 보너스 계산
    let powVal = bonus === "S" ? 1 : bonus === "D" ? 2 : 3;
    num = Math.pow(num, powVal);

    // 옵션 계산
    if (opt && opt === "#") {
      num *= -1;
    } else if (opt && opt === "*") {
      num *= 2; // 해당 점수 2배
      if (i > 0) {
        scores[i - 1] *= 2; // 바로 전 점수 2배
      }
    }
    scores.push(num);
  }

  return scores.reduce((a, b) => a + b, 0);
}

solution("1S2D*3T"); // 37
solution("1D2S#10S"); // 9
solution("1D2S0T"); // 3
solution("1S*2T*3S"); // 23
solution("1D#2S*3S"); // 5
solution("1T2D3D#"); // -4
solution("1D2S3T*"); // 59
