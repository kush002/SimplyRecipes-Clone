
const getElement = (selector)=>{
  const element = document.querySelector(selector);
  if(element) return element;
  throw Error(
    `Please check your class names, there no ${selector} class present`
  )
}

const button = getElement('.nav-btn');
const toggleList = getElement('.nav-links');
button.addEventListener('click', ()=>{
toggleList.classList.toggle('show-links');
})

const date = getElement('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear
