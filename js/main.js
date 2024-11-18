const btnNavEl = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const date = new Date().getFullYear();
const year = document.querySelector(".year");
year.textContent = date;

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  })
);

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) document.body.classList.add("sticky");
    if (entry.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);
// Safari Problem
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
// *********************************
