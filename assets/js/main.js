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
