"use client";

import React, {useState} from "react";
import TextHover from "./TextHover";
import Link from "next/link";
import "../styles/header.css"

import { scroller } from "react-scroll";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import { Menu, Xmark } from "iconoir-react";

export default function Header() {


    const handleScroll = (target: string) => {

        const isMobile = window.matchMedia("(max-width: 1024px)").matches;
        const scrollDuration = isMobile ? 1000 : (target !== "goals" ? 2500 : 1200);

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
            duration: scrollDuration,
            delay: 0,
            smooth: "easeInOutSine",
            offset: -50, // fixed header 높이만큼 올려줌
        });
    };

    
    const [menuOpen, setMenuOpen] = useState(false); // 상태 추가
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev); // 토글 함수
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
            <div className="m_gnb_wrap">
                <div className="m_gnb_btn">
                    <button onClick={toggleMenu}>
                      {menuOpen ? (
                        <div>
                          Close <span><Xmark /></span>
                        </div>
                      ) : (
                        <div>
                          Menu <span><Menu /></span>
                        </div>
                      )}
                    </button>
                </div>
                <nav className="gnb_m">
                    <ul className={menuOpen ? "open" : "close"}>
                        <li>
                            <button onClick={() => handleScroll("about")}   >
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleScroll("works")}   >
                                Works
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleScroll("projects")}   >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleScroll("goals")}   >
                                Goals
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
