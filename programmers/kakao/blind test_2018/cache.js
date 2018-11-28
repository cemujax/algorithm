/**
 * 캐시
 * 입력된 도시이름 배열을 순서대로 처리할 때, 총 실행시간을 출력한다.
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 11. 28
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/17680?language=javascript
 *
 */

function solution(cacheSize, cities) {
  const CACHE_HIT = 1,
    CACHE_MISS = 5;
  const length = cities.length;

  if (!cacheSize) {
    return length * CACHE_MISS;
  }

  let time = 0;
  const lru = [];

  for (let i = 0; i < length; i++) {
    const city = cities[i].toLowerCase();
    const index = lru.indexOf(city);

    // miss
    if (index < 0) {
      if (lru.length >= cacheSize) {
        lru.shift();
      }
      time += CACHE_MISS;
    }
    // hit
    else {
      lru.splice(index, 1);
      time += CACHE_HIT;
    }

    lru.push(city);
  }
  return time;
}

const examples = [
  {
    cacheSize: 3,
    cities: [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA"
    ]
  },
  {
    cacheSize: 3,
    cities: [
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul"
    ]
  },
  {
    cacheSize: 2,
    cities: [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome"
    ]
  },
  {
    cacheSize: 5,
    cities: [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome"
    ]
  },
  {
    cacheSize: 2,
    cities: ["Jeju", "Pangyo", "NewYork", "newyork"]
  },
  {
    cacheSize: 0,
    cities: ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
  }
];

for (let example of examples) {
  console.log(solution(example.cacheSize, example.cities)); // 50, 21, 60, 52, 16, 25
}
