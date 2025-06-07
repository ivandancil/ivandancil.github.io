import "./scrollup.css"

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        // --- Start of fix ---
    if (scrollUp) { // Check if scrollUp is not null
      if (this.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    }
    // --- End of fix ---
  });

  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  )
}

export default ScrollUp