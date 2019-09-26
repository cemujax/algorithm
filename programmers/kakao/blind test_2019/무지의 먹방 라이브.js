/**
 * 무지의 먹방 라이브
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 09. 27
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42891?language=javascript
 *
 */
function solution(food_times, k) {
  let remainSize = food_times.length; // 남은 음식 갯수
  const totalTime = food_times.reduce((acc, t) => acc + t, 0);

  /* 섭취해야할 음식 없음 */
  if (totalTime <= k) return -1;

  const foods = food_times.map((time, index) => {
    return { number: index + 1, time };
  });
  foods.sort((a, b) => a.time - b.time);

  let pre = 0;
  let index = 0;
  for (let food of foods) {
    const { time } = food;
    const diff = time - pre;

    const spend = diff * remainSize;
    if (spend < k) {
      k -= spend;
      pre = time;
    } else {
      const remain_foods = foods
        .slice(index, foods.length)
        .sort((a, b) => a.number - b.number); // 원래 순서로

      return remain_foods[k % remainSize].number;
    }

    remainSize -= 1;
    index += 1;
  }
}

const examples = [
  {
    food_times: [3, 1, 2],
    k: 5,
  },
  {
    food_times: [3, 5, 1, 6, 5, 3],
    k: 20,
  },
];

// 1, 4
for (let example of examples) {
  console.log(solution(example.food_times, example.k));
}
