const buttons = document.querySelectorAll(".wheel-btn");
const panels = document.querySelectorAll(".panel");

buttons.forEach(button => {

  button.addEventListener("pointerdown", () => {

    const target = button.dataset.panel;

    panels.forEach(panel => {
      panel.classList.add("hidden");
    });

    document
      .getElementById(target)
      .classList.remove("hidden");

  });

});
