class Footer extends HTMLElement {

  constructor() {
      super();
      console.log('constructor');
      this.attachShadow({
          mode: 'open'
      });
      this.shadowRoot.innerHTML = `
      <style>
        :visited,
        :link {
          color: inherit;
          text-decoration: none;
        }
        footer {
          background: #eee;
          padding: 1rem 0 4rem;
          position: relative;
        }
        footer .logo {
          margin: 2rem auto;
          width: fit-content;
          font-weight: bold;
          font-size: 2rem;
        }
        footer .links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        footer .links li {
          list-style: none;
          margin: 0 1rem;
        }
        footer .copy_right {
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          margin: 0 0 0.5rem;
          font-size: 0.8rem;
        }
      </style>
      <footer>
        <div class="logo">富士化成工業所</div>
        <nav class="links">
          <a href="/pages/products.html">
            <li>製品紹介</li>
          </a>
          <a href="/pages/info.html">
            <li>会社情報</li>
          </a>
          <a href="/pages/recruit.html">
            <li>採用情報</li>
          </a>
        </nav>
        <p class="copy_right">&copy 2020 富士化成工業所.</p>
      </footer>
      `;
  }

}
customElements.define('footer-elem', Footer);