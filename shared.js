var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal__action--negative");

var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

console.dir(backdrop);
console.dir(modalNoButton);

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className = 'open'; // this will override the exiting element class
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}
backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  closeModal();
});

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

ctaButton.addEventListener('animationstart', function(event) {
  console.log('Animations started', event);
})

ctaButton.addEventListener('animationend', function(event) {
  console.log('Animations ended', event);
})

ctaButton.addEventListener('animationiteration', function(event) {
  console.log('Animations iterated', event);
})