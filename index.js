const url = window.localStorage.getItem('href');

document.getElementsByTagName('ul')[0].children[0].addEventListener('click', () => {
  history.pushState(null, null, '/node-test/');
});
document.getElementsByTagName('ul')[0].children[0].addEventListener('click', () => {
  history.pushState(null, null, '/node-test/shop');
});
document.getElementsByTagName('ul')[0].children[0].addEventListener('click', () => {
  history.pushState(null, null, '/node-test/single-game');
});
document.getElementsByTagName('ul')[0].children[0].addEventListener('click', () => {
  history.pushState(null, null, '/node-test/multi-game');
});

if (url !== '') {
  console.log('tut');
  history.pushState(null, null, url);
  const main = document.createElement('main');
  const h1 = document.createElement('h1');
  h1.textContent = url;
  main.append(h1);
  document.body.append(main);
  window.localStorage.setItem('href', '');
  
} else {
  alert('мы на главной');
}

switch (url) {
  case '/node-test/shop':
    alert('вызываем shop');
    break;

    case '/node-test/single-game':
      alert('вызываем single-game');
      break;

    case '/node-test/multi-game':
      alert('вызываем multi-game');
      break;

    case '':
      alert('вызываем main page');
      break;

  default:
    alert('вызываем 404 page');
    break;
}

console.log('index');