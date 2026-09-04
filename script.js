// سال فعلی
document.getElementById("year").textContent = new Date().getFullYear();


// ==============================
// Theme
// ==============================

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("netino-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  document.body.classList.remove("dark");
  themeToggle.textContent = "🌙";
}

function updateThemeColor() {
  const themeColor = document.querySelector('meta[name="theme-color"]');

  if (!themeColor) return;

  if (document.body.classList.contains("dark")) {
    themeColor.setAttribute("content", "#061426");
  } else {
    themeColor.setAttribute("content", "#f8f7ff");
  }
}

updateThemeColor();

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  themeToggle.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem(
    "netino-theme",
    isDark ? "dark" : "light"
  );

  updateThemeColor();
});


// ==============================
// Scroll Reveal
// ==============================

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);
    }

  });

}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});


// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", e => {

    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});
