
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import customImage1 from "../images/java.webp";
import customImage2 from "../images/react.png";
import customImage3 from "../images/css.png";
import customImage4 from "../images/html.webp";

export default function Partical() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="ParticalClass">
      

       <Particles  
      id="tsparticles"
      init={particlesInit}

      options={{
        "autoPlay": true,
        "background": {
            "color": {
                "value": "#000", 
                // "value": "#fff",
              },
          "image": "",
          "position": "",
          "repeat": "",
          "size": "",
          "opacity": 1
        },
        "backgroundMask": {
          "composite": "destination-out",
          "cover": {
            "color": {
              "value": "#fff"
            },
            "opacity": 1
          },
          "enable": false
        },
        "clear": true,
        "defaultThemes": {},
        "delay": 0,
        "fullScreen": {
          "enable": true,
          "zIndex": -100
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 120,
        "interactivity": {
          "detectsOn": "window",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "push"
            },
            "onDiv": {
              "selectors": [],
              "enable": false,
              "mode": [],
              "type": "circle"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": {
              "delay": 0.5,
              "enable": true
            }
          },
          "modes": {
            "trail": {
              "delay": 1,
              "pauseOnStop": false,
              "quantity": 1
            },
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "easing": "ease-out-quad",
              "factor": 1,
              "maxSpeed": 50,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 400,
              "duration": 2,
              "mix": false,
              "opacity": 0.8,
              "size": 40,
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "mix": false,
                "selectors": []
              }
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 100,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "push": {
              "default": true,
              "groups": [],
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
                "selectors": []
              }
            },
            "slow": {
              "factor": 3,
              "radius": 200
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#ffffff"
                  },
                  "stop": {
                    "value": "#000000"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#000000"
                },
                "length": 2000
              }
            }
          }
        },
        "manualParticles": [],
        "particles": {
          "bounce": {
            "horizontal": {
              "value": 1
            },
            "vertical": {
              "value": 1
            }
          },
          "collisions": {
            "absorb": {
              "speed": 2
            },
            "bounce": {
              "horizontal": {
                "value": 1
              },
              "vertical": {
                "value": 1
              }
            },
            "enable": false,
            "maxSpeed": 50,
            "mode": "bounce",
            "overlap": {
              "enable": true,
              "retries": 0
            }
          },
          "color": {
            "value": "#ffffff",
            "animation": {
              "h": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              },
              "s": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              },
              "l": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              }
            }
          },
          "effect": {
            "close": true,
            "fill": true,
            "options": {},
            "type": []
          },
          "groups": {},
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 200,
              "enable": false,
              "rotate": {
                "x": 3000,
                "y": 3000
              }
            },
            "center": {
              "x": 50,
              "y": 50,
              "mode": "percent",
              "radius": 0
            },
            "decay": 0,
            "distance": {},
            "direction": "none",
            "drift": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 50
            },
            "path": {
              "clamp": true,
              "delay": {
                "value": 0
              },
              "enable": false,
              "options": {}
            },
            "outModes": {
              "default": "out",
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": false,
            "size": false,
            "speed": 2,
            "spin": {
              "acceleration": 0,
              "enable": false
            },
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fill": {}
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": true,
              "width": 1920,
              "height": 1080
            },
            "limit": {
              "mode": "delete",
              "value": 0
            },
            "value": 80
          },
          "opacity": {
            "value": 1,
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 2,
              "decay": 0,
              "delay": 0,
              "sync": false,
              "mode": "auto",
              "startValue": "random",
              "destroy": "none"
            }
          },
          "reduceDuplicates": false,
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "close": true,
            "fill": true,
            "options": {
              "image": [
                { src: customImage1, height: 15, width: 15 },
                { src: customImage2, height: 15, width: 15 },
                { src: customImage3, height: 15, width: 15 },
                { src: customImage4, height: 15, width: 15 },
                // Add more images if needed
              ],
            },
            "type": "image"
          },
          "size": {
            "value": 10,
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 5,
              "decay": 0,
              "delay": 0,
              "sync": false,
              "mode": "auto",
              "startValue": "random",
              "destroy": "none"
            }
          },
          "stroke": {
            "width": 0
          },
          "zIndex": {
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
          },
          "destroy": {
            "bounds": {},
            "mode": "none",
            "split": {
              "count": 1,
              "factor": {
                "value": 3
              },
              "rate": {
                "value": {
                  "min": 4,
                  "max": 9
                }
              },
              "sizeOffset": true,
              "particles": {}
            }
          },
          "roll": {
            "darken": {
              "enable": false,
              "value": 0
            },
            "enable": false,
            "enlighten": {
              "enable": false,
              "value": 0
            },
            "mode": "vertical",
            "speed": 25
          },
          "tilt": {
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "decay": 0,
              "sync": false
            },
            "direction": "clockwise",
            "enable": false
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          },
          "wobble": {
            "distance": 5,
            "enable": false,
            "speed": {
              "angle": 50,
              "move": 10
            }
          },
          "life": {
            "count": 0,
            "delay": {
              "value": 0,
              "sync": false
            },
            "duration": {
              "value": 0,
              "sync": false
            }
          },
          "rotate": {
            "value": {
              "min": 0,
              "max": 360
            },
            "animation": {
              "enable": true,
              "speed": 5,
              "decay": 0,
              "sync": false
            },
            "direction": "random",
            "path": false
          },
          "orbit": {
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
              "value": 45
            },
            "width": 1
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#fff"
            },
            "consent": false,
            "distance": 100,
            "enable": false,
            "frequency": 1,
            "opacity": 1,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#000"
              },
              "enable": false
            },
            "triangles": {
              "enable": false,
              "frequency": 1
            },
            "width": 1,
            "warp": false
          },
          "repulse": {
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "smooth": false,
        "style": {},
        "themes": [],
        "zLayers": 100,
        "name": "Images",
        "preload": [
          {
            "src": "https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png",
            "gif": false,
            "height": 32,
            "name": "apple",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/avocado.png",
            "gif": false,
            "height": 32,
            "name": "avocado",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/banana.png",
            "gif": false,
            "height": 32,
            "name": "banana",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/berries.png",
            "gif": false,
            "height": 32,
            "name": "berries",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/cherry.png",
            "gif": false,
            "height": 32,
            "name": "cherry",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/grapes.png",
            "gif": false,
            "height": 32,
            "name": "grapes",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/lemon.png",
            "gif": false,
            "height": 32,
            "name": "lemon",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/orange.png",
            "gif": false,
            "height": 32,
            "name": "orange",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/peach.png",
            "gif": false,
            "height": 32,
            "name": "peach",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/pear.png",
            "gif": false,
            "height": 32,
            "name": "pear",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/pepper.png",
            "gif": false,
            "height": 32,
            "name": "pepper",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/plum.png",
            "gif": false,
            "height": 32,
            "name": "plum",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/star.png",
            "gif": false,
            "height": 32,
            "name": "star",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/strawberry.png",
            "gif": false,
            "height": 32,
            "name": "strawberry",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/watermelon.png",
            "gif": false,
            "height": 32,
            "name": "watermelon",
            "width": 32
          },
          {
            "src": "https://particles.js.org/images/fruits/watermelon_slice.png",
            "gif": false,
            "height": 32,
            "name": "watermelon_slice",
            "width": 32
          }
        ],
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": true
          }
        }
      }}
    />
    </div>
  );
}
  