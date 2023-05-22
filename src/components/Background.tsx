import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { ISourceOptions } from "tsparticles-engine";

const Background = () => {
  // options documentation: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
  const options = useMemo(() => {
    return {
      autoPlay: true,
      background: {},
      backgroundMask: {},
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      fullScreen: true,
      interactivity: {
        detectsOn: "canvas",
        events: {
          resize: true,
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
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
      ManualParticles: [],
      motion: { disable: true },
      // particles: {
      //   color: {
      //     value: '#f00',
      //   },
      //   move: {
      //     enable: true,
      //     speed: { min: 1, max: 3 },
      //   },
      //   size: {
      //     value: { min: 1, max: 3 },
      //   },
      // },
      particles: {
        bounce: {},
        color: {
          value: "#f00",
          animation: {
            enable: true,
            sync: true,
          },
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
          direction: "none",
          trail: { enable: true, fillColor: null, length: 100 },
          straight: false,
          random: false,
          bounce: false,
          out_mode: "out",
          warp: true,
          noise: { enable: true, delay: { value: 0.01 } },
        },
        number: {
          density: { enable: true, value_area: 800 },
          value: 0,
        },
        opacity: {
          anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
          random: true,
          value: 0.5,
        },
        shape: {
          character: {
            fill: false,
            font: "Verdana",
            style: "",
            value: "*",
            weight: "400",
          },
          polygon: { nb_sides: 5 },
          stroke: { color: "random", width: 0 },
          type: "circle",
        },
        size: { value: 1 },
      },
      pauseOnBlur: false,
      pauseOnOutsideViewport: false,
      responsive: [],
      themes: [],
      zlayers: 100,
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    // await loadFireflyPreset(engine)
    await loadFull(engine);
  }, []);
  return (
    <>
      <Particles init={particlesInit} options={options as ISourceOptions} />
    </>
  );
  // <Particles
  //   width="100%"
  //   height="100vh"
  //   id="tsparticles"
  //   options={{
  //     fps_limit: 60,
  //     emitters: [
  //       {
  //         life: {
  //           count: 1,
  //           duration: 10,
  //         },
  //         position: {
  //           x: 50,
  //           y: 50,
  //         },
  //         rate: {
  //           delay: 0.1,
  //           quantity: 10,
  //         },
  //         size: {
  //           width: 3,
  //           height: 3,
  //         },
  //         particles: {
  //           color: {
  //             value: '#00f',
  //           },
  //         },
  //       },
  //       {
  //         direction: 'bottom-right',
  //         life: {
  //           count: 1,
  //           duration: 10,
  //         },
  //         position: {
  //           x: 20,
  //           y: 20,
  //         },
  //         rate: {
  //           delay: 0.1,
  //           quantity: 10,
  //         },
  //         size: {
  //           width: 3,
  //           height: 3,
  //         },
  //         particles: {
  //           color: {
  //             value: '#f00',
  //           },
  //         },
  //       },
  //       {
  //         direction: 'top-right',
  //         life: {
  //           count: 1,
  //           duration: 10,
  //         },
  //         position: {
  //           x: 20,
  //           y: 80,
  //         },
  //         rate: {
  //           delay: 0.1,
  //           quantity: 10,
  //         },
  //         size: {
  //           width: 3,
  //           height: 3,
  //         },
  //         particles: {
  //           color: {
  //             value: '#f0f',
  //           },
  //         },
  //       },
  //       {
  //         direction: 'bottom-left',
  //         life: {
  //           count: 1,
  //           duration: 10,
  //         },
  //         position: {
  //           x: 80,
  //           y: 20,
  //         },
  //         rate: {
  //           delay: 0.1,
  //           quantity: 10,
  //         },
  //         size: {
  //           width: 3,
  //           height: 3,
  //         },
  //         particles: {
  //           color: {
  //             value: '#ff0',
  //           },
  //         },
  //       },
  //       {
  //         direction: 'top-left',
  //         life: {
  //           count: 1,
  //           duration: 10,
  //         },
  //         position: {
  //           x: 80,
  //           y: 80,
  //         },
  //         rate: {
  //           delay: 0.1,
  //           quantity: 10,
  //         },
  //         size: {
  //           width: 3,
  //           height: 3,
  //         },
  //         particles: {
  //           color: {
  //             value: '#0f0',
  //           },
  //         },
  //       },
  //     ],
  //     interactivity: {
  //       detectsOn: 'canvas',
  //       events: {
  //         onClick: {
  //           enable: true,
  //           mode: 'push',
  //         },
  //         onHover: {
  //           enable: true,
  //           mode: 'repulse',
  //         },
  //         resize: true,
  //       },
  //       modes: {
  //         push: {
  //           quantity: 40,
  //         },
  //         repulse: {
  //           distance: 80,
  //           duration: 1.0,
  //         },
  //       },
  //     },
  //     particles: {
  //       color: {
  //         value: '#f00',
  //         animation: {
  //           enable: true,
  //           speed: 10,
  //           sync: true,
  //         },
  //       },
  //       move: {
  //         trail: {
  //           enable: true,
  //           fillColor: '#000000',
  //           length: 100,
  //         },
  //         bounce: false,
  //         direction: 'none',
  //         enable: true,
  //         out_mode: 'out',
  //         random: false,
  //         speed: 1,
  //         straight: false,
  //         warp: true,
  //         noise: {
  //           enable: true,
  //           delay: {
  //             value: 0.01,
  //           },
  //         },
  //       },
  //       number: {
  //         density: {
  //           enable: true,
  //           value_area: 800,
  //         },
  //         value: 0,
  //       },
  //       opacity: {
  //         anim: {
  //           enable: false,
  //           opacity_min: 0.1,
  //           speed: 1,
  //           sync: false,
  //         },
  //         random: true,
  //         value: 0.5,
  //       },
  //       shape: {
  //         character: {
  //           fill: false,
  //           font: 'Verdana',
  //           style: '',
  //           value: '*',
  //           weight: '400',
  //         },
  //         polygon: {
  //           nb_sides: 5,
  //         },
  //         stroke: {
  //           color: 'random',
  //           width: 0,
  //         },
  //         type: 'circle',
  //       },
  //       size: {
  //         value: 1,
  //       },
  //     },
  //     retina_detect: true,
  //   }}
  // />
};

export default Background;
