//Dynamic Navigation

const navHTML = `<nav>

                <ul>
                <li><a href="/index.html">Home </a></li>
                <li><a href="/HTML/about.html">About</a></li>
                <li><a href="/HTML/projects.html">Projects</a></li>
                <li><a href="/HTML/contact.html">Contact</a></li>

            </ul>

            <button id="theme-toggle"><img id="theme-icon" src="/Images/Light Mode Symbol.png" alt="Toggle Theme"></button>

        </nav> 

        `;

document.querySelector("header").innerHTML = navHTML;

//Dark Mode Toggle

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeIcon.src = "/Images/dark mode symbol.png";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    themeIcon.src = "/Images/dark mode symbol.png";
  } else {
    localStorage.setItem("darkMode", "disabled");
    themeIcon.src = "/Images/Light Mode Symbol.png";
  }
});

//Contact Form

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    window.location.href = `mailto:2892225@students.wits.ac.za?subject=Enquiry from ${name}&body=${message}`;
  });
}

//Nav Indicator

const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
