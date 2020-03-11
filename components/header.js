class header extends HTMLElement {

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
        header {
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          width: 100%;
          background: rgba(255,255,255,0.8);
        }
        header h1 {
          margin-left: 1rem;
          font-size: 1.2rem;
          color: #000854;
        }
        header nav {
          margin-top: 0.7rem;
          margin-right: 1rem;
          display: flex;
          flex-wrap: nowrap;
        }
        header nav li {
          list-style: none;
          margin: 0 0.5rem;
          padding: 0.3rem 0;
          color: #000854;
          font-weight: bold;
        }
      </style>
      <header>
        <a href="../index.html">
          <h1>富士化成工業所</h1>
        </a>
        <nav>
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
      </header>
      `;
  }

}
customElements.define('header-elem', header);