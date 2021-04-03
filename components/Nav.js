export default (links) => `
<nav>
  <i class="fas fa-bars"></i>
  <ul class="hidden--mobile nav-links">
     ${links
       .map((link) => `<a href="/${link.title}" data-Navigo>${link.text}</a>`)
       .join("")}
 </ul>
 </nav>
`;
