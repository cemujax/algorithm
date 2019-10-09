/**
 * 길 찾기 게임
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.09
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42892
 */
function solution(nodeinfo) {
  let rootNode;
  let preorders = [],
    postorders = [];

  function Node(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.left = null;
    this.right = null;
  }
  function insertNode(id, x, y) {
    if (!rootNode) {
      rootNode = new Node(id, x, y);
    } else {
      _insertNode(rootNode, id, x, y);
    }
  }
  function _insertNode(node, id, x, y) {
    // left, right 방향
    const side = x < node.x ? 'left' : 'right';

    if (!node[side]) {
      node[side] = new Node(id, x, y);
    } else {
      _insertNode(node[side], id, x, y);
    }
  }
  /* 전위순회 */
  function preorder(node) {
    preorders.push(node.id);
    if (node.left) {
      preorder(node.left);
    }
    if (node.right) {
      preorder(node.right);
    }
  }
  /* 후위순회 */
  function postorder(node) {
    if (node.left) {
      postorder(node.left);
    }
    if (node.right) {
      postorder(node.right);
    }
    postorders.push(node.id);
  }

  const nodes = nodeinfo
    .map(([x, y], index) => {
      return { id: index + 1, x, y };
    })
    .sort((a, b) => b.y - a.y); // y 내림차순

  /* insert nodes */
  for (let { id, x, y } of nodes) {
    insertNode(id, x, y);
  }

  /* 트리 순회 */
  preorder(rootNode);
  postorder(rootNode);

  return [preorders, postorders];
}

const examples = [
  {
    nodeinfo: [
      [5, 3],
      [11, 5],
      [13, 3],
      [3, 5],
      [6, 1],
      [1, 3],
      [8, 6],
      [7, 2],
      [2, 2],
    ],
  },
];

// [[7,4,6,9,1,8,5,2,3],[9,6,5,8,1,4,3,2,7]]
for (let example of examples) {
  console.log(solution(example.nodeinfo));
}
