// Scroll-triggered reveals; no-op when reduced motion is preferred.
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const targets = document.querySelectorAll(".reveal");

if (reduced || !("IntersectionObserver" in window)) {
  targets.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px" }
  );
  targets.forEach((el) => io.observe(el));
}
