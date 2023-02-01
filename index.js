
if (window.localStorage.getItem('href') !== '') {
  console.log('tut');
  history.pushState(null, null, window.localStorage.getItem('href'));
  const main = document.createElement('main');
  main.innerHTML = `<h1>${window.localStorage.getItem('href')}</h1>`;
  document.body.append(main);
  window.localStorage.setItem('href', '');
  
} else {
  alert('мы на главной')
}

console.log('index');