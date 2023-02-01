
if (window.localStorage.getItem('href') !== '') {
  console.log('tut');
  history.pushState(null, null, window.localStorage.getItem('href'));
  window.localStorage.setItem('href', '');
  document.body.innerHTML = window.localStorage.getItem('href');
} else {
  alert('мы на главной')
}

console.log('index');