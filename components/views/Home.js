import homeImage from "../../lib/homeimage.jpg";
import babies from "../../lib/babies.jpg";

export default () => `

<div class="jumbotron2">
<div class="container"><h1>Styles that make kids smile!</h1>
<img src="${homeImage}" alt="kids" height ="500" width ="500">
</div>
</div>

<div class="jumbotron">
  <div class="container">
  <img src="${babies}" "alt="babies"height="500" width="500"       >
    <div class="row">
    <div class="column">
      <div class="card">..</div>
    </div>

    <div class="column">
    <!----Put another image here for jumbotron--->
      <div class="card">..</div>
    </div>
    <div class="column">
      <div class="card">..</div>
    </div>
  </div>
</div>
</div>

<div class="page-header">
  <h1>Example Page Header</h1>
</div>
`;
