/**
 * 매칭점수
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.11
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42893?language=javascript
 */

function solution(word, pages) {
  word = word.toLowerCase();
  let pageScores = [];

  for (let [index, page] of pages.entries()) {
    const head = page.split('<head>')[1].split('</head>')[0];
    const url = (head.match(/<meta property="og:url" content="([^"]+)"/) ||
      [])[1];

    const body = page.split('<body>')[1].split('</body>')[0];
    const bodyWord = body.split(/[^A-Za-z]/);
    const basicSc = bodyWord.filter(w => w.toLowerCase() === word).length;
    const links = (body.match(/<a href="[^"]*"/gi) || []).map(
      tag => tag.match(/href="([^"]*)"/i)[1],
    );

    pageScores.push({
      index,
      url,
      links,
      outer_link_cnt: links.length,
      basicSc,
    });
  }

  /* 링크 점수 계산 */
  pageScores = pageScores.map((pageScore, idx1) => {
    const { url } = pageScore;
    let linkSc = pageScores.reduce((acc, page, idx2) => {
      if (idx1 !== idx2 && page.links.includes(url)) {
        return acc + page.basicSc / page.outer_link_cnt;
      }
      return acc;
    }, 0);
    pageScore.matchSc = pageScore.basicSc + linkSc;
    return pageScore;
  });

  // 매칭점수가 가장 높은 웹페이지의 index를 구하라. 만약 그런 웹페이지가 여러 개라면 그중 번호가 가장 작은 것을 구하라.
  pageScores.sort((a, b) =>
    a.matchSc === b.matchSc ? a.index - b.index : b.matchSc - a.matchSc,
  );

  return pageScores[0].index;
}

const examples = [
  {
    word: 'blind',
    pages: [
      '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://a.com"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href="https://b.com"> Link to b </a>\n</body>\n</html>',
      '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://b.com"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href="https://a.com"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href="https://c.com"> Link to c </a>\n</body>\n</html>',
      '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://c.com"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href="https://a.com"> Link to a </a>\n</body>\n</html>',
    ],
  },
  {
    word: 'Muzi',
    pages: [
      '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://careers.kakao.com/interview/list"/>\n</head>  \n<body>\n<a href="https://programmers.co.kr/learn/courses/4673"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>',
      '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://www.kakaocorp.com"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href="https://hashcode.co.kr/tos"></a>\n\n\t^\n</body>\n</html>',
    ],
  },
];

for (let example of examples) {
  console.log(solution(example.word, example.pages));
}
