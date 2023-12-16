const darkMode = () => {
  const themeToggleBtn = document.querySelector("#theme-toggle");
  const body = document.body;

  themeToggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light-mode");
    } else {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    }
  });

  // Check for the theme in localStorage on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  }
};

export default darkMode;
