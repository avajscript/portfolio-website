class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
    .header {
      padding: 16px 32px;
    }
    
    .nav {
      align-items: center;
    }
    header{
      margin-bottom: 80px;
    }
    .nav-links {
      h4 {
        margin-left: 32px;
        transition: color .25s ease;
        &:hover{
          color: var(--dark-grey);
        }
      }
     
    }
    </style>

    <header>
    <nav class = 'flex space-between header align-center'>
      <div>
        <a href="">
        <h4>Matt Designs</h4>
      </a>
      </div>
      <div class = 'flex align-center nav-links'>
        <a href="">
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
