class ProductsList extends HTMLElement {
  
  constructor() {
    super();
    this.products = [
      {
        name: "どこでもドア",
        eng_name: "Everywhere Door",
        discription: "ドアのノブに意志読み取りセンサーが組み込まれているため、場所の指定は「いつもの空き地」と言えば野比家の近所の空き地になったり、「どこでもいいから遠く」と言えば適当な場所になるなど、曖昧な指定が可能。また、のび太がしずかの家へ行こうとすれば、のび太の気持ちが読み取られて行き先が風呂場になったりもする。",
        image: "../images/door.jpg"
      },
      {
        name: "透明マント",
        eng_name: "Invisible Cloak",
        discription: "このマントを身に纏った者の姿は完全に透明となり、他人が姿を確認する事ができなくなる。",
        image: "../images/cloak.jpg"
      },
      {
        name: "悪魔の実",
        eng_name: "Devil Fruits",
        discription: "悪魔の実は「海の悪魔の化身」と言われる果実で、食べた者は特殊な能力が身に付く。実を一口でもかじると、その時点で食べた者に能力が発現し、残りの実はただの果実となる。味は非常に不味い。",
        image: "../images/fruits.jpg"
      }
    ];

    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.innerHTML = `
    <ul>
      ${this.products.map((product)=> { 
        return html`
        <li>
          <h3>${product.name}</h3>
          <p class="eng_name">${product.eng_name}</p>
          <div class="image" style="background-image: url('${product.image}');"></div>
        </li>
        `}
      )}
    </ul>
    <a href="./pages/products.html">
      <div class="button">もっとみる</div>
    </a>
    <style>
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      li {
        list-style: none;
        width: 280px;
        margin: 1rem 0;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
        border-radius: 5px;
        overflow: hidden;
      }
      .image {
        width: 100%;
        height: 150px;
        background-position: center;
        background-size: cover;
      }
      h3 {
        text-align: center;
        margin: 1rem 0 0 0;
      }
      .eng_name {
        text-align: center;
        margin: 0 0 1rem 0;
        font-size: 0.6rem;
      }
      .discription {
        padding: 0 1rem;
        font-size: 0.8rem;
        text-align: justify;
      }    
    </style>
    `;
  }
}
customElements.define('products-elem', ProductsList);