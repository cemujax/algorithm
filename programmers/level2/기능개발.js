/**
 * 기능개발
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.16
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42586
 */
function solution(progresses, speeds) {
  const answer = [];
  let jobs = progresses.map((progresse, index) =>
    Math.ceil((100 - progresse) / speeds[index]),
  );

  while (jobs.length > 0) {
    let proc = jobs[0],
      count = 0;
    for (let i = 0; i < jobs.length; i++) {
      if (proc < jobs[i]) break;
      count++;
    }
    jobs = jobs.slice(count);
    answer.push(count);
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2,1]
