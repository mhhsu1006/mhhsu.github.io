document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("publications-container");

  container.addEventListener("click", function (e) {
    const target = e.target;

    if (target.classList.contains("bibtex-btn")) {
      e.preventDefault();
      const bibtex = target.getAttribute("data-bibtex");
      alert(bibtex); // You can replace this with a modal or a more elegant way to display the BibTeX
    } else if (target.classList.contains("publication-btn")) {
      // Do nothing, let the default link behavior handle it
    } else {
      const card = target.closest(".publication-card");
      if (card && !target.closest(".publication-links")) {
        console.log("Clicked card:", card.getAttribute("data-id"));
        // Navigate to a placeholder URL for the paper
        // In a real application, you would use a unique identifier for each paper
        window.location.href =
          "/publications/" + encodeURIComponent(card.getAttribute("data-id"));
      }
    }
  });
});
