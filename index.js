let buttons = document.querySelectorAll(".number");
let mainSection = document.querySelector(".box")
let thankYouSection = document.querySelector(".thank-you")
let submitButton = document.querySelector(".submit")
let rating = document.querySelector(".rating-num")
let score = 0;

for (button in buttons) {
  buttons[button].onclick = function(e) {
    score = e.target.outerText;
    rating.innerHTML = score;
    buttons.forEach(function(btn){
      btn.classList.remove('number-light-grey');
    })
    this.classList.add('number-light-grey')
  }
}

submitButton.addEventListener('click', () => {
  mainSection.classList.add('card-visible');
  thankYouSection.classList.remove('card-visible');
})
