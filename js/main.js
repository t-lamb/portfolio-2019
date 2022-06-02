function init() {

  var toggleButton = document.querySelector("#js-toggle-button")
  var toggleItem = document.querySelector("#js-toggle-item");

  toggleButton.addEventListener("click", toggleOpen);

  function toggleOpen() {
    if (toggleItem.classList.contains('is-open')) {
      this.setAttribute('aria-expanded', 'false');
      toggleButton.classList.remove('is-active');
      toggleItem.classList.remove('is-open');
    } else {
      toggleButton.classList.add('is-active');
      toggleItem.classList.add('is-open');
      this.setAttribute('aria-expanded', 'true');
    }
  }

}

window.addEventListener('load', init);
