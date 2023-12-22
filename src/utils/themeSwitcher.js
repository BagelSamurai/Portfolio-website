const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");

  const theme = localStorage.getItem("theme");

  if (theme) {
    document.body.classList.add(theme);
  }

  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.classList.remove("light-mode"); // Remove specific theme class
    }
  };

  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  );
};

export default darkMode;
