console.info('chrome-ext template-react-ts content script');

// Add a border to the page's body
const body = document.querySelector('video');
console.log(body)
if (body) {
  body.style.border = '5px solid red';
}

export {}
