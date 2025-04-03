'use client';

import React, {useRef, useEffect} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; 
gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 플러그인 등록

import Image from "next/image";
import youngMe01 from "@/public/images/youngMe01.jpg"
import youngMe02 from "@/public/images/youngMe02.jpg"
import youngMe03 from "@/public/images/youngMe03.jpg"
import youngMe04 from "@/public/images/youngMe04.jpg"


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
      ".intro .overlay_black.black1", 
      { width: "0%" }, 
      { width: "16.66%", duration: 1 },
      "a"
    )
    .fromTo(
      ".intro .overlay_black.black2", 
      { width: "0%" }, 
      { width: "16.66%", duration: 2 },
      "a"
    )
    .fromTo(
      ".intro .overlay_black.black3", 
      { width: "0%" }, 
      { width: "16.66%", duration: 3 },
      "a"
    )
    .fromTo(
      ".intro .overlay_black.black4", 
      { width: "0%" }, 
      { width: "16.66%", duration: 4 },
      "a"
    )
    .fromTo(
      ".intro .overlay_black.black5", 
      { width: "0%" }, 
      { width: "16.66%", duration: 5 },
      "a"
    )
    .fromTo(
      ".intro .overlay_black.black6", 
      { width: "0%" }, 
      { width: "16.66%", duration: 6 },
      "a"
    )
    .fromTo(
      ".intro h1", 
      { color: "#fff" }, 
      { color: "#498e4f", duration: 3 }, 
      "a"
    )
    .to({}, { duration: 2 }); 

  }, []);


  useEffect(() => {
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "+=1000%",
        scrub: 1,
        pin: true,
      }
    });
  
    // Step 1: width, height 확장
    aboutTl
      .addLabel('b')
      .to({},{duration: 2000})
      .fromTo(
        ".about .img-card",
        { scale: 0 },  
        { scale : 1, duration: 3500, ease: "power2.out" } 
        , "b"
      )
      .fromTo(
        ".doodle",  // 추가한 부분
        { opacity: 0 },
        { opacity: 0.9, duration: 3000, stagger: 1, ease: "power2.out" }, 
        "b"
      )
      .to({}, { duration: 2000 }) // 3초 딜레이
  
      // Step 2: 각각 translate + rotate 적용
      .fromTo(
        ".about .img-card:nth-child(4)",
        { x: "-50%", y: "-50%", rotate: 0 },
        { x: "-200%", y: "-50%", rotate: -20, scale: 1, duration: 2000, ease: "power2.out" }
      )
      .fromTo(
        ".about .img-card:nth-child(3)",
        { x: "-50%", y: "-50%", rotate: 0 },
        { x: "-100%", y: "-50%", rotate: 8, scale: 1, duration: 2000, ease: "power2.out" }
      )
      .fromTo(
        ".about .img-card:nth-child(2)",
        { x: "-50%", y: "-50%", rotate: 0 },
        { x: "20%", y: "-50%", rotate: -12, scale: 1, duration: 2000, ease: "power2.out" }
      )
      .fromTo(
        ".about .img-card:nth-child(1)",
        { x: "-50%", y: "-50%", rotate: 0 },
        { x: "100%", y: "-50%", rotate: 20, scale: 1, duration: 2000, ease: "power2.out" }
      )
      .to({}, { duration: 2000 }) // 3초 딜레이
      .fromTo(
        ".about .text-overlap",
        { backgroundColor: "rgba(0,0,0, 0)", backdropFilter: "blur(0px)" },
        { backgroundColor: "rgba(0,0,0, 0.7)", backdropFilter: "blur(80px)", duration: 6000, ease: "power2.out" }
      );
  
  }, []);
  



  return (
    <div id="wrapper">

        <section className="intro">
            <h1>SANGJUN PORTFOLIO</h1>
            <div className="video_box">
              <video src="/videos/intro02.mp4" autoPlay loop muted playsInline width="600" />
            </div>
            <div className="svg_box">
                <img src="/images/scroll.svg" alt="스크롤해주세요" />
            </div>
            <div className="overlay_box">
                <div className="overlay_black black1"></div>
                <div className="overlay_black black2"></div>
                <div className="overlay_black black3"></div>
                <div className="overlay_black black4"></div>
                <div className="overlay_black black5"></div>
                <div className="overlay_black black6"></div>
            </div>
            <VerticalLines/>
        </section>

        <section className="about">
            <div className="img-box">
                <div className="img-card">
                    <div className="img-item">
                      <Image src={youngMe04} alt="youngMe04"/>
                    </div>
                </div>
                <div className="img-card">
                    <div className="img-item">
                      <Image src={youngMe03} alt="youngMe03"/>
                    </div>
                </div>
                <div className="img-card">
                    <div className="img-item">
                      <Image src={youngMe02} alt="youngMe02"/>
                    </div>
                </div>
                <div className="img-card">
                    <div className="img-item">
                      <Image src={youngMe01} alt="youngMe04"/>
                    </div>
                </div>
            </div>
            <div className="bg-doodle">
              <img src="/images/doodle_bg_01.svg" className="doodle" alt="낙서배경1" />
              <img src="/images/doodle_bg_02.svg" className="doodle" alt="낙서배경2" />
              <img src="/images/doodle_bg_03.svg" className="doodle" alt="낙서배경3" />
              <img src="/images/doodle_bg_04.svg" className="doodle" alt="낙서배경4" />
              <img src="/images/doodle_bg_05.svg" className="doodle" alt="낙서배경5" />
              <img src="/images/doodle_bg_06.svg" className="doodle" alt="낙서배경6" />
              <img src="/images/doodle_bg_07.svg" className="doodle" alt="낙서배경7" />
              <img src="/images/doodle_bg_08.svg" className="doodle" alt="낙서배경8" />
              <img src="/images/doodle_bg_09.svg" className="doodle" alt="낙서배경9" />
              <img src="/images/doodle_bg_10.svg" className="doodle" alt="낙서배경10" />
            </div>
            <div className="text-overlap">
                <div className="text-box">

                </div>
            </div>
            <VerticalLines/>
        </section>
    </div>
  );
}
