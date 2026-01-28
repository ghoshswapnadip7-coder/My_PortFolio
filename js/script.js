/* MOBILE MENU */
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      r.classList.add("active");
    }
  });
});

/* DARK / LIGHT MODE */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light" : "dark");
};

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

/* GITHUB PROJECTS AUTO LOAD */
fetch("https://api.github.com/users/ghoshswapnadip7-coder/repos")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("projectGrid");
    grid.innerHTML = "";
    data.slice(0,6).forEach(repo => {
      grid.innerHTML += `
        <div class="project-card">
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description"}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        </div>`;
    });
  });
