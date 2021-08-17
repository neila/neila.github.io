import React from 'react';
import Particles from "react-tsparticles";


export default class extends React.Component {

    constructor(props) {
        super(props);
    
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }
    
    particlesInit(main) {

        console.log(main);
        let noiseZ;
        let size;
        let columns;
        let rows;
        let w;
        let h;
        let field;
        let noiseZIncrement;

        function getAngle(x, y) {
            return noise.simplex3(x / Math.PI, y / Math.PI, noiseZ) * Math.PI * 2;
          }
          
          function getLength(x, y) {
            return noise.simplex3(x / 100, y / 100, noiseZ);
          }
          
          function setup(container) {
            size = 50;
            noiseZ = 0;
            noiseZIncrement = 0.005;
            reset(container);
            window.addEventListener("resize", reset);
          }
          
          function initField() {
            field = new Array(columns);
            for (let x = 0; x < columns; x++) {
              field[x] = new Array(columns);
              for (let y = 0; y < rows; y++) {
                field[x][y] = [0, 0];
              }
            }
          }
          
          function calculateField() {
            for (let x = 0; x < columns; x++) {
              for (let y = 0; y < rows; y++) {
                let angle = getAngle(x, y);
                let length = getLength(x, y);
                field[x][y][0] = angle;
                field[x][y][1] = length;
              }
            }
          }
          
          function reset(container) {
            const pxRatio = window.devicePixelRatio;
            w = container.canvas.size.width;
            h = container.canvas.size.width;
            noise.seed(Math.random());
            columns = Math.floor(w / size) + 1;
            rows = Math.floor(h / size) + 1;
            initField();
          }
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }
    
    particlesLoaded(container) {
        console.log(container);
    }
    
    render() {
        return (
            <Particles
                width='100vw' 
                height="100vh"
                id="tsparticles"
                init={this.particlesInit}
                loaded={this.particlesLoaded}
                options={

                    {
                        fps_limit: 60,
                        emitters: [
                            {
                                life: {
                                    count: 1,
                                    duration: 10
                                },
                                position: {
                                    x: 50,
                                    y: 50
                                },
                                rate: {
                                    delay: 0.1,
                                    quantity: 10
                                },
                                size: {
                                    width: 3,
                                    height: 3
                                },
                                particles: {
                                    color: {
                                        value: "#00f"
                                    }
                                }
                            },
                            {
                                direction: "bottom-right",
                                life: {
                                    count: 1,
                                    duration: 10
                                },
                                position: {
                                    x: 20,
                                    y: 20
                                },
                                rate: {
                                    delay: 0.1,
                                    quantity: 10
                                },
                                size: {
                                    width: 3,
                                    height: 3
                                },
                                particles: {
                                    color: {
                                        value: "#f00"
                                    }
                                }
                            },
                            {
                                direction: "top-right",
                                life: {
                                    count: 1,
                                    duration: 10
                                },
                                position: {
                                    x: 20,
                                    y: 80
                                },
                                rate: {
                                    delay: 0.1,
                                    quantity: 10
                                },
                                size: {
                                    width: 3,
                                    height: 3
                                },
                                particles: {
                                    color: {
                                        value: "#f0f"
                                    }
                                }
                            },
                            {
                                direction: "bottom-left",
                                life: {
                                    count: 1,
                                    duration: 10
                                },
                                position: {
                                    x: 80,
                                    y: 20
                                },
                                rate: {
                                    delay: 0.1,
                                    quantity: 10
                                },
                                size: {
                                    width: 3,
                                    height: 3
                                },
                                particles: {
                                    color: {
                                        value: "#ff0"
                                    }
                                }
                            },
                            {
                                direction: "top-left",
                                life: {
                                    count: 1,
                                    duration: 10
                                },
                                position: {
                                    x: 80,
                                    y: 80
                                },
                                rate: {
                                    delay: 0.1,
                                    quantity: 10
                                },
                                size: {
                                    width: 3,
                                    height: 3
                                },
                                particles: {
                                    color: {
                                        value: "#0f0"
                                    }
                                }
                            }
                        ],
                        interactivity:{
                            detectsOn:'canvas',
                            events:{
                                onClick:{
                                    enable:true,
                                    mode:'push'
                                },
                                onHover:{
                                    enable:true,
                                    mode:'repulse'
                                },
                                "resize":true
                            },
                            modes:{
                                push:{
                                    quantity:40
                                },
                                repulse:{
                                    distance:80,
                                    duration:1.0
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: "#f00",
                                animation: {
                                    enable: true,
                                    speed: 10,
                                    sync: true
                                }
                            },
                            move: {
                                trail: {
                                    enable: true,
                                    fillColor: "#000000",
                                    length: 100
                                },
                                bounce: false,
                                direction: "none",
                                enable: true,
                                out_mode: "out",
                                random: false,
                                speed: 1,
                                straight: false,
                                warp: true,
                                noise: {
                                    enable: true,
                                    delay: {
                                        value: 0.001
                                    }
                                }
                            },
                            number: { 
                                density: { 
                                    enable: true, 
                                    value_area: 800 
                                }, 
                                value: 0 
                            },
                            opacity: {
                                anim: { 
                                    enable: false, 
                                    opacity_min: 0.1, 
                                    speed: 1, 
                                    sync: false 
                                },
                                random: true,
                                value: 0.5
                            },
                            shape: {
                                character: {
                                    fill: false,
                                    font: "Verdana",
                                    style: "",
                                    value: "*",
                                    weight: "400"
                                },
                                image: {
                                    height: 100,
                                    replace_color: true,
                                    src: "images/github.svg",
                                    width: 500
                                },
                                polygon: { 
                                    nb_sides: 5
                                },
                                stroke: { 
                                    color: "random",
                                    width: 0 
                                },
                                type: "circle"
                            },
                            size: {
                                value: 1
                            }
                        },
                        retina_detect: true
                    }
                    
                }
            />
        );
    }
}