//Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//Make mobile navigation work
const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

//Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");

    //Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Close mobile navigation
    if (link.classList.contains("header-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
