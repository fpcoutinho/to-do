const toggleNav = (nav) => {
  nav.classList.contains("hidden")
    ? nav.classList.remove("hidden")
    : nav.classList.add("hidden");
};

export { toggleNav };
