const hamburger = document.querySelector('#hamburgerIcon');
const portfolio = document.querySelector("#portfolio");
const hiddenLinks = document.querySelector('.hidden-links');
console.log("hello");
// hiddenLinks.style.right="-100%";
hamburger.addEventListener('click',()=>{
  console.log("hi");

  hiddenLinks.classList.toggle("open");
  portfolio.classList.toggle("openPortfolio");
  portfolio.classList.toggle("portfolioScroll");

});