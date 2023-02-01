
if (window.localStorage.getItem('href') !== '') {
  console.log('tut');
  history.pushState(null, null, window.localStorage.getItem('href'));
  window.localStorage.setItem('href', '');
} else {
  alert('мы на главной')
}

console.log('index');