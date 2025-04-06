"use client";

import React from "react";
import TextHover from "./TextHover";
import Link from "next/link";
import "../styles/header.css"

import { scroller } from "react-scroll";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function Header() {


    const handleScroll = (target: string) => {
        // `goals`는 문서 끝으로 스크롤
        if (target === "goals") {
            scroller.scrollTo(target, {
                duration: 1200, // 밀리초 단위
                delay: 0,
                smooth: "easeInOutSine",
                offset: 0, // 필요 시 조정
            });
            return;
        }

        scroller.scrollTo(target, {
            duration: 2500,
            delay: 0,
            smooth: "easeInOutSine",
            offset: -50, // fixed header 높이만큼 올려줌
        });
    };
      
    return (
        <header>
            <h1 className="logo">
                <Link href="#">
                    <TextHover text="LEESANGJUN"/>
                </Link>
            </h1>
            <nav className="gnb">
                <ul>
                    <li>
                        <button onClick={() => handleScroll("about")}>
                            <TextHover text="About"/>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleScroll("works")}>
                            <TextHover text="Works"/>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleScroll("goals")}>
                            <TextHover text="Goals"/>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
