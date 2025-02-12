(() => {
  const button = document.querySelector("#primary-nav BUTTON");
  const clickHandler = () => {
    const ACTIVE_CLASS = "active";
    if (button.classList.contains(ACTIVE_CLASS)) {
      button.classList.remove(ACTIVE_CLASS);
    } else {
      button.classList.add(ACTIVE_CLASS);
    }
  };

  button.addEventListener("click", clickHandler);
})();
