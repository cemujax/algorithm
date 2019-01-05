/**
 * 추석트래픽
 * solution 함수에서는 로그 데이터 lines 배열에 대해 초당 최대 처리량을 리턴한다.
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 05
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/17676?language=javascript
 *
 */

function solution(lines) {
  const logData = lines
    .map(log => {
      const data = log.match(/[0-9]+/g);
      let endTime = 0,
        processTime = 0;

      for (let i = 3; i < data.length; i++) {
        let value = +data[i];

        switch (i) {
          case 3:
            value *= 60;
          case 4:
            value *= 60;
          case 5:
            value *= 1000;
          case 6:
            endTime += value;
            break;
          case 7:
            value *= 1000;
          case 8:
            processTime += value;
            break;
        }
      }

      return {
        startTime: endTime - processTime + 1,
        endTime: endTime
      };
    })
    .sort((x, y) => x.startTime - y.startTime);

  let window = [];
  const count = [];

  logData.forEach(t => {
    window = window.filter(w => w > t.startTime - 1000);
    window.push(t.endTime);
    count.push(window.length);
  });

  return Math.max(...count);
}

const examples = [
  ["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"],
  ["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"],
  [
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s"
  ]
];

for (let example of examples) {
  console.log(solution(example));
}
