'use client';

import React, {useRef, useEffect} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; 
gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 플러그인 등록

import "../public/styles/common.css"
import "/public/styles/main.css"

import VerticalLines from "./components/VerticalLines";

export default function Home() {

  useEffect(() => {
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro", 
        start: "top top", 
        end: "bottom top", 
        scrub: 1, 
        pin: true,
      }
    });
    introTl.addLabel('a')
    .fromTo(
      ".intro .overlay_black", 
      { width: "0%" }, 
      { width: "16.66%", duration: 3 },
      "a"
    )
    .fromTo(
      ".intro h1", 
      { color: "#fff" }, 
      { color: "#498e4f", duration: 3 }, 
      "a"
    )
    .to({}, { duration: 2 }); 

    /* const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about',
        start: 'top 50%',
        end: "bottom 50%",
        scrub: 1,
        pin: true,
        markers: true,
      }
    }); */



  }, []);


  return (
    <div id="wrapper">
        <section className="intro">
            <h1>SANGJUN PORTFOLIO</h1>
            <div className="video_box">
              <video src="/videos/intro01.mp4" autoPlay loop muted playsInline width="600" />
            </div>
            <div className="svg_box">
                <img src="/images/scroll.svg" alt="스크롤해주세요" />
            </div>
            <div className="overlay_box">
                <div className="overlay_black"></div>
                <div className="overlay_black"></div>
                <div className="overlay_black"></div>
                <div className="overlay_black"></div>
                <div className="overlay_black"></div>
                <div className="overlay_black"></div>
            </div>
            <VerticalLines/>
        </section>
        <section className="about">
            <div className="img-box">
                <div>

                </div>
            </div>
            <VerticalLines/>
        </section>
    </div>
  );
}
