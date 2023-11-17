//Router
//Put pathname in Global state as a varibale
const global = { currentPage: window.location.pathname };

//Heighlight active link on current page
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    //Check if link = page
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

//Init App
function init() {
  switch (global.currentPage) {
    //Add mutiple cases
    case '/':
    case '/index.html':
      console.log('Home');
      break;
    case '/shows.html':
      console.log('Shows');
      break;
    case '/movie-details.html':
      console.log('Movie Details');
      break;
    case '/tv-details.html':
      console.log('TV details');
      break;
    case '/search.html':
      console.log('Search');
      break;
  }
  //Add add active class function
  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
