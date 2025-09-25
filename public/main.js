const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

const observerOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -10px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, 500); 
    }
  });
}, observerOptions);


const sections = document.querySelectorAll(".section");
sections.forEach((section, index) => {
  if (index === 0) {
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
  } else {
    observer.observe(section);
  }
});

const sections1 = document.querySelectorAll(".section1");
sections1.forEach((section1, index) => {
  if (index === 0) {
    section1.style.opacity = "1";
    section1.style.transform = "translateY(0)";
  } else {
    observer.observe(section1);
  }
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.02)";
    header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.02)";
    header.style.boxShadow = "none";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});


  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      element.style.borderRight = "none";
    }
  }
  type();














document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("welcome-text");
  const text = "Welcome Back 🌱";
  let i = 0;

  textElement.classList.add("typing-active");

  function typeWriter() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); 
    } else {
      textElement.classList.remove("typing-active");
      textElement.classList.add("heartbeat");
    }
  }

  typeWriter();
});



document.addEventListener("DOMContentLoaded", () => {
  const registerElement = document.getElementById("register-text");
  if (registerElement) {
    const text = "Join Us 🌱";
    let i = 0;
    registerElement.classList.add("typing-active");

    function typeWriter() {
      if (i < text.length) {
        registerElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        registerElement.classList.remove("typing-active");
        registerElement.classList.add("heartbeat");
      }
    }
    registerElement.textContent = ""; 
    typeWriter();
  }
});






// Leaderboard page


document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("filterInput");
  const list = document.getElementById("leaderboardList");
  input.addEventListener("keyup", () => {
    const term = input.value.toLowerCase();
    [...list.children].forEach(li => {
      const name = li.querySelector(".name").textContent.toLowerCase();
      li.style.display = name.includes(term) ? "flex" : "none";
    });
  });
});



