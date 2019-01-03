/**
 * 뉴스 클러스터링
 * 입력으로 들어온 두 문자열의 자카드 유사도를 출력한다.
 * 유사도 값은 0에서 1 사이의 실수이므로, 이를 다루기 쉽도록 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력한다.
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 03
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/17677?language=javascript
 *
 */

function solution(str1, str2) {
  function getMultipleSet(str) {
    // 다중집합 구함
    const multipleSet = [];
    for (let i = 0; i < str.length - 1; i++) {
      let s = str.substr(i, 2).match(/[a-zA-Z]{2}/);
      if (s) {
        multipleSet.push(s.input.toLowerCase());
      }
    }
    return multipleSet;
  }

  const CORRECTION_NUM = 65536;
  const set1 = getMultipleSet(str1);
  const set2 = getMultipleSet(str2);

  if (!set1.length && !set2.length) {
    return 1 * CORRECTION_NUM;
  }

  const set = new Set([...set1, ...set2]);
  let unionNum = 0;
  let interSectionNum = 0;

  for (let value of set) {
    const match1 = set1.filter(v => v === value).length;
    const match2 = set2.filter(v => v === value).length;

    interSectionNum += Math.min(match1, match2);
    unionNum += Math.max(match1, match2);
  }

  let answer = Math.floor((interSectionNum / unionNum) * CORRECTION_NUM);
  return answer;
}

const examples = [
  {
    str1: "FRANCE",
    str2: "french"
  },
  {
    str1: "handshake",
    str2: "shake hands"
  },
  {
    str1: "aa1+aa2",
    str2: "AAAA12"
  },
  {
    str1: "E=M*C^2",
    str2: "e=m*c^2"
  }
];

for (let example of examples) {
  console.log(solution(example.str1, example.str2));
}
