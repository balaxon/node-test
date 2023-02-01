
if (window.localStorage.getItem('from404') === true) {
  history.pushState(window.localStorage.getItem('href'));
} else {
  alert('мы на главной')
}

console.log('index');