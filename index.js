import {
  Header,
  Nav,
  Main,
  Footer
} from "./components";
import * as state from "./store";
import Navigo from "Navigo";
import {
  capitalize,
  lte
} from "lodash";
const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  router.updatePageLinks();
  myEventListeners();
}
router
  .on({
    "/": () => {
      render(state.Home);
    },
    ":page": (params) => {
      console.log(capitalize(params.page));
      console.log(params.page);
      render(state[capitalize(params.page)]);
    },
  })
  .resolve();
/*router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => {
      let page = capitalize(params.data.page);
      render(state[page]);
    },
  })
  .resolve();*/
// add menu toggle to bars icon in nav bar

// Accordion Dropdown Menu for FAQ Page//
function myEventListeners() {
  const acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}
