/**
 * 셔틀버스
 * 콘이 무사히 셔틀을 타고 사무실로 갈 수 있는 제일 늦은 도착 시각을 출력한다. 도착 시각은 HH:MM 형식이며, 00:00에서 23:59 사이의 값이 될 수 있다
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 11. 28
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/17678?language=javascript
 *
 */
function solution(n, t, m, timetable) {
  // 분단위로
  function toMinute(time) {
    const t = time.split(":");
    return Number(t[0]) * 60 + Number(t[1]);
  }

  // hh:mm 형식
  function toFormat(time) {
    const hour = String(Math.floor(time / 60)).padStart(2, "0");
    const min = String(time % 60).padStart(2, "0");
    return `${hour}:${min}`;
  }

  let answer = toMinute("09:00");
  const lastShuttle = (n - 1) * t + answer;
  let crews = timetable
    .map(toMinute)
    .sort((a, b) => a - b)
    .filter(t => t <= lastShuttle);

  for (let i = 0; i < n; i++) {
    const crewNum = crews.filter(t => t <= answer).length;
    if (i === n - 1) {
      if (crewNum >= m) {
        answer = crews[m - 1] - 1;
      }
    } else {
      crews.splice(0, crewNum > m ? m : crewNum);
      answer += t;
    }
  }
  return toFormat(answer);
}

const examples = [
  {
    n: 1,
    t: 1,
    m: 5,
    timetable: ["08:00", "08:01", "08:02", "08:03"]
  },
  {
    n: 2,
    t: 10,
    m: 2,
    timetable: ["09:10", "09:09", "08:00"]
  },
  {
    n: 2,
    t: 1,
    m: 2,
    timetable: ["09:00", "09:00", "09:00", "09:00"]
  },
  {
    n: 1,
    t: 1,
    m: 5,
    timetable: ["00:01", "00:01", "00:01", "00:01", "00:01"]
  },
  {
    n: 1,
    t: 1,
    m: 1,
    timetable: ["23:59"]
  },
  {
    n: 10,
    t: 60,
    m: 45,
    timetable: [
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59"
    ]
  }
];

for (let example of examples) {
  // 09:00, 09:09, 08:59, 00:00, 09:00, 8:00
  console.log(solution(example.n, example.t, example.m, example.timetable));
}
