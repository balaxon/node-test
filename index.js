
if (window.localStorage.getItem('from404') === 'true') {
  console.log('tut');
  window.localStorage.setItem('from404', 'false');
  history.pushState(window.localStorage.getItem('href'));
} else {
  alert('мы на главной')
}

console.log('index');