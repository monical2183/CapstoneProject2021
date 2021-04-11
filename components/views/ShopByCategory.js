import indiandress from "../../lib/indiandress.jpg";
import girlsbibs from "../../lib/girlsbibs.jpg";
import striplegging from "../../lib/striplegging.jpg";
import whiteshorts from "../../lib/whiteshorts.jpg";
import boyshortsets from "../../lib/boyshortsets.jpg";
import flowershortsets from "../../lib/flowershortsets.jpg";
import sweatervaseset from "../../lib/sweatervaseset.jpg";
import boysjogger from "../../lib/boysjogger.jpg";

export default () => `

  <section class=section>
  <h1> Shop For Girls</h1>
  <section>
 <div class= card href="https://www.klazzyKidzFashion.com/c/shop-all-categories/-/N-5xsxf" >
  <img src="${indiandress}" alt="dress" style="width:25%">
  <h1>Skirt with top and headband</h1>
  <p class="price">$19.99</p>
  <p>Indian Style Spring 2 Two Piece Casual Dress Matching Skirt And Top Set with matching headband </p>
  <p><button id="add">Add to Cart</button></p>
  <p id="demo"></p>
  </section>

  <img src="${girlsbibs}" alt="Denim Girls Bibs" style="width:25%">
  <h1>Denim Bibs</h1>
  <p class="price">$15.00</p>
  <p> Girls Fashion Washed Denim Rompers Long Jeans Overalls with Strip Shirt..</p>
  <p><button>Add to Cart</button></p>

  <img src="${striplegging}" alt="Stripped Leggings Set" style="width:25%">
  <h1>Strip Leggings Set</h1>
  <p class="price">$15.00</p>
  <p>Girls Striped Leggings Set with shirt to match</p>
  <p><button>Add to Cart</button></p>


  <img src="${whiteshorts}" alt="short set" style="width:25%">
  <h1> Girls White Short Set </h1>
  <p class="price">$15.00</p>
  <p>Solid White Top & White Shorts Sets</p>
  <p><button>Add to Cart</button></p>
  </div>

<h1>Shop For Boys</h1>

 <div class="card"href="https://www.klazzyKidzFashion.com/c/shop-all-categories/-/N-5xsxf" >
   <img src="${boyshortsets}" alt="shortset" style="width:25%">
   <h1>Little Boys 2pc Tank top & Shorts Set</h1>
   <p class="price">$15.00</p>
   <p> Awesome two-piece set for your little boy to expand his wardrobe an mix and match for a cool look!</p>
   <p><button>Add to Cart</button></p>

   <img src="${flowershortsets}" alt="flowerset" style="width:25%">
   <h1>Tropical Boys Sets</h1>
   <p class="price">$15.00</p>
   <p>Keep the tropical looking going! </p>
   <p><button id="add">Add to Cart</button></p>

   <img src="${sweatervaseset}" alt="vaseset" style="width:25%">
   <h1>Two piece sweater sets </h1>
   <p class="price">$15.00</p>
   <p> Enjoy casual comfort everyday look!</p>
   <p><button>Add to Cart</button></p>

   <img src="${boysjogger}" alt="boysjoggers" style="width:25%">
   <h1>Boys Jogger Sets</h1>
   <p class="price">$19.99</p>
   <p>Double his style and comfort with a cool jogger set!</p>
   <p><button>Add to Cart</button></p>

   </section>

</div>
`;
