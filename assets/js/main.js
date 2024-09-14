var typed = new Typed("#role", {
  strings: ["passionate", "committed","dedicated"],
  typeSpeed: 50,
  loop: true,
  showCursor: false,
  fadeOut: false,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
});

var typedCursor = new Typed("#cursor", {
  strings: [""],
  loop: true,
});

const colors = ['#8d8ff2', '#c47bdc', '#0099fd', '#00b0bd', '#7ca62f',"#00af68","#f0676b"]; // Array of colors
let currentIndex = 0;

function changeHighlightColor() {
  document.documentElement.style.setProperty('--high-lighted-color', colors[currentIndex]);
  currentIndex = (currentIndex + 1) % colors.length;
}
setInterval(changeHighlightColor, 5000);

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme__toggle");
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  
  if (savedTheme === "dark") {
    toggle.checked = true;
  }

  initParticles();  // Initialize particles immediately after setting the theme

  toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    initParticles(); // Reinitialize particles when theme changes
  });
});

new WOW().init();

function getCSSVariableValue(variableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

function initParticles() {
  var primaryColor = getCSSVariableValue("--primary-color");
  particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": primaryColor
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": primaryColor
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": primaryColor,
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  });
}



const projects = [
  {
    title: "Smurfs Token",
    description: "Freelance game website",
    tech: "HTML, CSS, JS, SCSS, Jquery, Bootstrap",
    demoLink: "https://hazem-ahmed1.github.io/SmurfToken/", 
    sourceLink: "https://github.com/Hazem-Ahmed1/SmurfToken",
    image: "assets/images/Projects/SmurfToken.png"
  },
  {
    title: "Tick Tock Treasure",
    description: "3D Game Hack Splash with Rigging Character",
    tech: "Unity, 3D Models, Rigging",
    demoLink: "https://hazem-ahmed-a.itch.io/tick-tock-treasure",
    sourceLink: "https://github.com/Hazem-Ahmed1/3D-Game-Grahpics",
    image: "assets/images/Projects/TickTockTreasure.png"
  },
  {
    title: "Zombie Time",
    description: "2D Top Down Game",
    tech: "Unity, C#",
    demoLink: "https://hazem-ahmed-a.itch.io/zombie-time",
    sourceLink: "https://github.com/Hazem-Ahmed1/Zombie-Time-Game-2D-Top-Down",
    image: "assets/images/Projects/Zombie Time.png"
  },
  {
    title: "Travelism",
    description: "Front-End School Project",
    tech: "HTML, CSS, JS, Bootstrap",
    demoLink: "https://hazem-ahmed1.github.io/Travelism/",
    sourceLink: "https://github.com/Hazem-Ahmed1/Travelism",
    image: "assets/images/Projects/Travelism.png"
  },
  {
    title: "To-Do-List",
    description: "JS native To Do List",
    tech: "HTML, CSS, JS, Bootstrap",
    demoLink: "https://hazem-ahmed1.github.io/to-do-list-2/",
    sourceLink: "https://github.com/Hazem-Ahmed1/to-do-list-2",
    image: "assets/images/Projects/To-Do-List.png"
  }
];

const projectContainer = document.getElementById('projectContainer');

projects.forEach(project => {
  const projectCard = `
    <div class="col-lg-4 col-10 mb-5 Project-Container">
      <div class="Project-Card">
        <div class="Project-Image">
          <img src="${project.image}" class="img-fluid" alt="${project.title}">
        </div>
        <div class="Project-Text pt-3 pb-3">
          <h5 class="Project-Title high-lighted-color mb-4">${project.title}</h5>
          <h6 class="Project-Desc">${project.description}</h6>
          <p class="Project-Tech mb-lg-4">${project.tech}</p>
          <div class="Project-Links pb-4">
            <a class="Project-Link demo" href="${project.demoLink}"><i class="fa-solid fa-link"></i> Visit</a>
            <a class="Project-Link source" href="${project.sourceLink}"><i class="fa-brands fa-github"></i> Source Code</a>
          </div>
        </div>
      </div>
    </div>
  `;
  projectContainer.innerHTML += projectCard;
});


console.log(projects[2].title);
