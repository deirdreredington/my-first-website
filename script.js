// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// Project filtering
const filters = document.querySelectorAll(".project-filters span");
const projects = document.querySelectorAll(".project");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    const category = filter.textContent.toLowerCase();

    filters.forEach(item => item.classList.remove("active"));
    filter.classList.add("active");

    projects.forEach(project => {
      const projectText = project.textContent.toLowerCase();

      if (
        category === "all" ||
        projectText.includes(category)
      ) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});


// Fade projects in as you scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

document
  .querySelectorAll(".project, .about, .experience, .contact")
  .forEach(section => {
    observer.observe(section);
  });


// Change header slightly when scrolling
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
