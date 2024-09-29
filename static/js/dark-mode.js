document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Check for saved dark mode preference
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
  }

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Save dark mode preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", null);
    }

    // Update button icon
    const darkIcon = darkModeToggle.querySelector(".dark-icon");
    const lightIcon = darkModeToggle.querySelector(".light-icon");
    darkIcon.style.display = body.classList.contains("dark-mode")
      ? "none"
      : "inline-block";
    lightIcon.style.display = body.classList.contains("dark-mode")
      ? "inline-block"
      : "none";
  });
});
