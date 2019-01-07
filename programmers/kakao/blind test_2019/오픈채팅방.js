/**
 * 오픈채팅방
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 07
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
 *
 */

function solution(record) {
  const answer = [];
  const map = new Map();

  record.forEach(r => {
    const [act, uid, nickName] = r.split(" ");
    switch (act) {
      case "Enter":
      case "Change":
        map.set(uid, nickName);
    }
  });

  record.forEach(r => {
    const [act, uid] = r.split(" ");
    if (act === "Enter") {
      answer.push(`${map.get(uid)}님이 들어왔습니다.`);
    } else if (act === "Leave") {
      answer.push(`${map.get(uid)}님이 나갔습니다.`);
    }
  });

  return answer;
}

const examples = [
  [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
  ]
];

for (let example of examples) {
  console.log(solution(example));
}
