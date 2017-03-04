function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  //const N = parseInt(n, 10);
  const list = document.querySelectorAll('.ranked-list');

  for (var i = 0; i < list.length; i++) {
    let children = list[i].children;

    for (var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  var current = document.getElementById('grand-node');
  var next = current.children[0];

  while (next) {
    current = next;
    next = current.children[0]
  }
  return current;
}
