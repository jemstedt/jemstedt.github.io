const app = document.getElementById('app');

// Define your pages here
const pages = {
  home: `
    <nav>
      <div class="page-container">
        <a href="#" onclick="navigate('home')">Andreas Jemstedt, PhD</a>
        <ul>
          <li><a href="#" onclick="navigate('portfolio')">Portfolio</a></li>
          <li><a href="#" onclick="navigate('contact')">Contact</a></li>
          <li><a href="#" onclick="navigate('hireme')">Hire Me!</a></li>
        </ul>
      </div>
    </nav>
    <div class="page-container">
      <h1>Welcome to my Home Page</h1>
      <p>Lorem ipsum...</p>
    </div>
  `,
  portfolio: `
    <nav>
      <div class="page-container">
        <a href="#" onclick="navigate('home')">Andreas Jemstedt, PhD</a>
        <ul>
          <li><a href="#" onclick="navigate('portfolio')" class="active">Portfolio</a></li>
          <li><a href="#" onclick="navigate('contact')">Contact</a></li>
          <li><a href="#" onclick="navigate('hireme')">Hire Me!</a></li>
        </ul>
      </div>
    </nav>
    <div class="page-container">
      <h1>My Portfolio</h1>
      <p>Lorem ipsum...</p>
    </div>
  `,
  contact: `
    <nav>
      <div class="page-container">
        <a href="#" onclick="navigate('home')">Andreas Jemstedt, PhD</a>
        <ul>
          <li><a href="#" onclick="navigate('portfolio')">Portfolio</a></li>
          <li><a href="#" onclick="navigate('contact')" class="active">Contact</a></li>
          <li><a href="#" onclick="navigate('hireme')">Hire Me!</a></li>
        </ul>
      </div>
    </nav>
    <div class="page-container">
      <h1>Contact Information</h1>
      <p>Email: jemstedt@su.se</p>
    </div>
  `,
  hireme: `
    <nav>
      <div class="page-container">
        <a href="#" onclick="navigate('home')">Andreas Jemstedt, PhD</a>
        <ul>
          <li><a href="#" onclick="navigate('portfolio')">Portfolio</a></li>
          <li><a href="#" onclick="navigate('contact')">Contact</a></li>
          <li><a href="#" onclick="navigate('hireme')" class="active">Hire Me!</a></li>
        </ul>
      </div>
    </nav>
    <div class="page-container">
      <h1>Hire Me!</h1>
      <p>If you're interested in hiring me, please contact me at jemstedt@su.se.</p>
    </div>
  `
}

function navigate(page) {
  // Prevent full page refresh
  event.preventDefault();

  // Render the page
  app.innerHTML = pages[page];
}

// Render the home page by default
app.innerHTML = pages.home;
