class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header>
    <nav class = 'flex space-between header align-center header-nav'>
      <div>
        <a href="index.html">
        <h4>Matthew Pierce</h4>
      </a>
      </div>
      <div class = 'flex align-center nav-links'>
        <a href="index.html">
          <h4>Home</h4>
        </a>

        <a href="projects.html">
          <h4>Projects</h4>
        </a>

        <a href="resume.html">
          <h4>Resume</h4>
        </a>

        <a href="contact.html">
          <h4>Contact</h4>
        </a>
      </div>
    </nav>
  </header>
    `;
  }
}

customElements.define("header-component", Header);
