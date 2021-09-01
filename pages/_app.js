import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';

function MyApp({ Component, pageProps }) {
    
    // const containerRef = useRef(null)
    
    return (
            <Component {...pageProps}/>
    )
}

export default MyApp

{/*<LocomotiveScrollProvider
    options = {
        {
            smooth: true,
            // ... all available Locomotive Scroll instance options 
        }
    }
    watch = {
        [
            //...all the dependencies you want to watch to update the scroll
        ]
    }
    containerRef={containerRef}>

<main data-scroll-container ref={containerRef}>

</main>
        
</LocomotiveScrollProvider>*/}