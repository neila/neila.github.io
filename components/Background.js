import React from 'react'
import Particles from 'react-tsparticles'

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.particlesInit = this.particlesInit.bind(this)
        this.particlesLoaded = this.particlesLoaded.bind(this)
    }

    particlesInit(main) {
        console.log(main)
        // initialize the tsParticles instance (main) here, adding custom shapes or presets
    }

    particlesLoaded(main) {
        console.log(main)
    }

    render() {
        return (
            <Particles
                width="100%"
                height="100vh"
                id="tsparticles"
                init={this.particlesInit}
                loaded={this.particlesLoaded}
                options={{
                    fps_limit: 60,
                    emitters: [
                        {
                            life: {
                                count: 1,
                                duration: 10,
                            },
                            position: {
                                x: 50,
                                y: 50,
                            },
                            rate: {
                                delay: 0.1,
                                quantity: 10,
                            },
                            size: {
                                width: 3,
                                height: 3,
                            },
                            particles: {
                                color: {
                                    value: '#00f',
                                },
                            },
                        },
                        {
                            direction: 'bottom-right',
                            life: {
                                count: 1,
                                duration: 10,
                            },
                            position: {
                                x: 20,
                                y: 20,
                            },
                            rate: {
                                delay: 0.1,
                                quantity: 10,
                            },
                            size: {
                                width: 3,
                                height: 3,
                            },
                            particles: {
                                color: {
                                    value: '#f00',
                                },
                            },
                        },
                        {
                            direction: 'top-right',
                            life: {
                                count: 1,
                                duration: 10,
                            },
                            position: {
                                x: 20,
                                y: 80,
                            },
                            rate: {
                                delay: 0.1,
                                quantity: 10,
                            },
                            size: {
                                width: 3,
                                height: 3,
                            },
                            particles: {
                                color: {
                                    value: '#f0f',
                                },
                            },
                        },
                        {
                            direction: 'bottom-left',
                            life: {
                                count: 1,
                                duration: 10,
                            },
                            position: {
                                x: 80,
                                y: 20,
                            },
                            rate: {
                                delay: 0.1,
                                quantity: 10,
                            },
                            size: {
                                width: 3,
                                height: 3,
                            },
                            particles: {
                                color: {
                                    value: '#ff0',
                                },
                            },
                        },
                        {
                            direction: 'top-left',
                            life: {
                                count: 1,
                                duration: 10,
                            },
                            position: {
                                x: 80,
                                y: 80,
                            },
                            rate: {
                                delay: 0.1,
                                quantity: 10,
                            },
                            size: {
                                width: 3,
                                height: 3,
                            },
                            particles: {
                                color: {
                                    value: '#0f0',
                                },
                            },
                        },
                    ],
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 40,
                            },
                            repulse: {
                                distance: 80,
                                duration: 1.0,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#f00',
                            animation: {
                                enable: true,
                                speed: 10,
                                sync: true,
                            },
                        },
                        move: {
                            trail: {
                                enable: true,
                                fillColor: '#000000',
                                length: 100,
                            },
                            bounce: false,
                            direction: 'none',
                            enable: true,
                            out_mode: 'out',
                            random: false,
                            speed: 1,
                            straight: false,
                            warp: true,
                            noise: {
                                enable: true,
                                delay: {
                                    value: 0.01,
                                },
                            },
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 0,
                        },
                        opacity: {
                            anim: {
                                enable: false,
                                opacity_min: 0.1,
                                speed: 1,
                                sync: false,
                            },
                            random: true,
                            value: 0.5,
                        },
                        shape: {
                            character: {
                                fill: false,
                                font: 'Verdana',
                                style: '',
                                value: '*',
                                weight: '400',
                            },
                            image: {
                                height: 100,
                                replace_color: true,
                                src: 'images/github.svg',
                                width: 500,
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                            stroke: {
                                color: 'random',
                                width: 0,
                            },
                            type: 'circle',
                        },
                        size: {
                            value: 1,
                        },
                    },
                    retina_detect: true,
                }}
            />
        )
    }
}
