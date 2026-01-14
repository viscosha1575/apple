import React from 'react'
import { useRef, useEffect} from 'react'
const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
       if (videoRef.current) {
        videoRef.current.playbackRate=1;
       }
    }, []);
  return (
    <section id="hero">
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
        <button>Buy</button>
        <p>From $999 or $41.62/mo. for 24 mo. or $459 before trade-in</p>
    </section>
  )
}

export default Hero