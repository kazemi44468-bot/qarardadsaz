(() => {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (!button || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  };

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !button.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      button.focus();
    }
  });
})();
