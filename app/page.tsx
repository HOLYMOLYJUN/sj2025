"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import type { StaticImageData } from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 플러그인 등록

import { Element } from "react-scroll";
import emailjs from "emailjs-com";

import Image from "next/image";
import youngMe01 from "@/public/images/youngMe01.jpg";
import youngMe02 from "@/public/images/youngMe02.jpg";
import youngMe03 from "@/public/images/youngMe03.jpg";
import youngMe04 from "@/public/images/youngMe04.jpg";

import Doodle01 from "@/public/images/doodle_bg_01.svg";
import Doodle02 from "@/public/images/doodle_bg_02.svg";
import Doodle03 from "@/public/images/doodle_bg_03.svg";
import Doodle04 from "@/public/images/doodle_bg_04.svg";
import Doodle05 from "@/public/images/doodle_bg_05.svg";
import Doodle06 from "@/public/images/doodle_bg_06.svg";
import Doodle07 from "@/public/images/doodle_bg_07.svg";
import Doodle08 from "@/public/images/doodle_bg_08.svg";
import Doodle09 from "@/public/images/doodle_bg_09.svg";
import Doodle10 from "@/public/images/doodle_bg_10.svg";

import Work01 from "@/public/images/works_naeil.jpg";
import Work02 from "@/public/images/works_jungdo.jpg";
import Work03 from "@/public/images/works_tinit.jpg";
import Work04 from "@/public/images/works_renewable.jpg";

import Project01 from "@/public/images/mockup_qude.jpg";
import Project02 from "@/public/images/mockup_busan.jpg";
import Project03 from "@/public/images/mockup_naver2.jpg";

import { ArrowRight, ArrowUpRight } from "iconoir-react";

const worksData = [Work01, Work02, Work03, Work04];

import "./styles/common.css";
import "./styles/main.css";

import VerticalLines from "./components/VerticalLines";
import SkillsItem from "./components/SkillsItem";
import SkillsList from "./components/SkillsList";

type WorkItem = {
  id: number;
  title: string;
  description: string;
  url: string;
  image: StaticImageData;
  skills: string[];
  contribution: string;
};

const worksItems: WorkItem[] = [
  {
    id: 0,
    title: "내일스퀘어 | NaeilSquare",
    description:
      "기획부터 배포까지 모든 과정에 직접 참여 / 웹앱디자인, 프론트엔드 100% 기여한 프로젝트입니다.",
    url: "https://sanjuuni32.notion.site/1c1bee030377818281aff3c389494b0f",
    image: Work01,
    skills: ["#Next.js", "#TypeScript", "#CSS", "#Axios", "#Fullcalendar"],
    contribution: "UI·UX Design : 100% / FrontEnd : 100%",
  },
  {
    id: 1,
    title: "법무법인 정도 웹사이트 리뉴얼 프로젝트",
    description:
      "기존 웹사이트의 디자인과 기능을 새롭게 개선하여, 사용자 경험(UX)과 브랜드 이미지를 향상시킨 프로젝트입니다.",
    url: "https://sanjuuni32.notion.site/1c1bee030377815cac01d42359d4f693",
    image: Work02,
    skills: ["#React", "#JavaScript", "#CSS", "#반응형"],
    contribution: "UI·UX Design : 100% / FrontEnd : 100%",
  },
  {
    id: 2,
    title: "Tinnitus Care 이명치료용 Software 개발",
    description:
      "외부 클라이언트의 요청으로 태블릿에 탑재되어 납품될 이명 치료용 소프트웨어 개발 업무를 진행했습니다.",
    url: "https://sanjuuni32.notion.site/Tinnitus-Care-Software-1c1bee03037780e382f1d30703b407ad",
    image: Work03,
    skills: ["#React", "#JavaScript", "#CSS", "#Chart.js"],
    contribution: "UI·UX Design : 100% / FrontEnd : 100%",
  },
  {
    id: 3,
    title: "탄소 부과세 대응을 위한 클라우드 기반 스마트 컨트랙트 플랫폼 개발",
    description:
      "중소벤처기업부(한전KDN 투자)에서 진행한 프로젝트로, 신재생에너지(REC) 거래 플랫폼 UI·UX 개발 업무를 진행하였습니다",
    url: "https://sanjuuni32.notion.site/1c1bee03037780f79eb6d0a8878d7e8f",
    image: Work04,
    skills: ["#React", "#JavaScript", "#TailwindCSS", "#Chart.js"],
    contribution: "UI·UX Design : 50% / FrontEnd : 50%",
  },
];

// Develop 파트 스킬 데이터 배열 추가
const developSkills = [
  { item: "react", label: "React" },
  { item: "next.js", label: "Next.js" },
  { item: "javascript", label: "JavaScript" },
  { item: "typescript", label: "TypeScript" },
  { item: "html5", label: "HTML5" },
  { item: "css3", label: "CSS3" },
  { item: "tailwindcss", label: "Tailwind CSS" },
  { item: "jquery", label: "jQuery" },
  { item: "gsap", label: "GSAP" },
  { item: "chartjs", label: "Chart.js" },
  { item: "axios", label: "Axios" },
  { item: "github", label: "Github" },
];

const designSkills = [
  { item: "figma", label: "Figma" },
  { item: "adobephotoshop", label: "Adobe Photoshop" },
  { item: "adobeillustrator", label: "Adobe Illustrator" },
];

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"; // 브라우저의 scroll 위치 복원 비활성화
    window.scrollTo(0, 0); // 강제로 맨 위로
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });

      introTl
        .addLabel("a")
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
        .to({}, { duration: 2 }); // 마지막 딜레이
    });

    return () => mm.revert(); // clean-up
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "center center",
          end: "+=1000%",
          scrub: 1,
          pin: true,
        },
      });

      aboutTl
        .addLabel("b")
        .to({}, { duration: 2 }) // 딜레이
        .fromTo(
          ".about .img-card",
          { scale: 0 },
          { scale: 1, duration: 3.5, ease: "power2.out" },
          "b"
        )
        .fromTo(
          ".bg-doodle svg",
          { opacity: 0 },
          { opacity: 0.9, duration: 3, stagger: 1, ease: "power2.out" },
          "b"
        )
        .to({}, { duration: 2 }) // 딜레이

        // 이미지 카드 개별 이동 + 회전
        .fromTo(
          ".about .img-card:nth-child(4)",
          { x: "-50%", rotate: 0 },
          { x: "-200%", rotate: -20, scale: 1, duration: 2, ease: "power2.out" }
        )
        .fromTo(
          ".about .img-card:nth-child(3)",
          { x: "-50%", rotate: 0 },
          { x: "-100%", rotate: 8, scale: 1, duration: 2, ease: "power2.out" }
        )
        .fromTo(
          ".about .img-card:nth-child(2)",
          { x: "-50%", rotate: 0 },
          { x: "20%", rotate: -12, scale: 1, duration: 2, ease: "power2.out" }
        )
        .fromTo(
          ".about .img-card:nth-child(1)",
          { x: "-50%", rotate: 0 },
          { x: "100%", rotate: 20, scale: 1, duration: 2, ease: "power2.out" }
        )
        .to({}, { duration: 2 }) // 딜레이

        // 텍스트 오버랩 효과
        .fromTo(
          ".about .text-overlap",
          { backgroundColor: "rgba(0,0,0,0)", backdropFilter: "blur(0px)" },
          {
            backgroundColor: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(80px)",
            duration: 6,
            ease: "power2.out",
          }
        )
        .fromTo(
          ".about .text-box",
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 6, ease: "power2.out" },
          "-=3" // 겹치기 시작
        );
    });

    return () => mm.revert(); // cleanup
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      const skillTrigger = ScrollTrigger.create({
        trigger: ".skills",
        start: "top-=20 top",
        end: "bottom top+=5",
        onEnter: () => {
          document.body.classList.add("white");
        },
        onEnterBack: () => {
          document.body.classList.add("white");
        },
        onLeave: () => {
          document.body.classList.remove("white");
        },
        onLeaveBack: () => {
          document.body.classList.remove("white");
        },
      });

      gsap.fromTo(
        ".skills .skills_box",
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 40,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills .skills_box",
            start: "10% 60%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // cleanup
      return () => {
        skillTrigger.kill();
      };
    });

    return () => mm.revert(); // 전체 cleanup
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const items = gsap.utils.toArray(".works_item");
      const totalItems = items.length;

      const tween = gsap.to(items, {
        xPercent: -300 * (totalItems - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".works",
          start: "top top",
          end: "+=1000%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert(); // 전체 cleanup
  }, []);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const titleBoxRef = useRef<HTMLDivElement>(null);
  const projectsListRef = useRef<HTMLUListElement>(null);

  const updateTopOffset = useCallback(() => {
    if (!titleBoxRef.current || !projectsListRef.current) return;

    if (window.innerWidth <= 768) {
      projectsListRef.current.style.top = "0px";
    } else {
      const titleBoxHeight = titleBoxRef.current.clientHeight;
      projectsListRef.current.style.top = `-${titleBoxHeight}px`;
    }
  }, []);

  useEffect(() => {
    updateTopOffset();

    window.addEventListener("resize", updateTopOffset);

    return () => {
      window.removeEventListener("resize", updateTopOffset);
    };
  }, [updateTopOffset]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const items = gsap.utils.toArray(".projects_item") as HTMLElement[];

      const triggers: ScrollTrigger[] = [];

      items.forEach((item) => {
        const image = item.querySelector("img");

        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: "40% 60%",
              end: "100% 30%",
              scrub: true,
            },
          })
          .to(item, { opacity: 1 })
          .to(item, { opacity: 0.2 });

        triggers.push(tl.scrollTrigger!);

        if (image) {
          const imgTween = gsap.to(image, {
            yPercent: -5,
            scrollTrigger: {
              trigger: item,
              start: "30% 50%",
              end: "100% 40%",
              scrub: true,
            },
          });
          triggers.push(imgTween.scrollTrigger!);
        }
      });

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    });

    return () => mm.revert();
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const message = inputRef.current?.value;
    if (!message) return;

    const templateParams = {
      message,
    };

    emailjs
      .send(
        "service_tcprdp3",
        "template_vx2gg9d",
        templateParams,
        "JrdaMB5ck-KHg_01s"
      )
      .then(() => {
        setSent(true);
        if (inputRef.current) inputRef.current.value = "";
      })
      .catch((error) => {
        console.error("이메일 전송 실패:", error);
      });
  };

  return (
    <>
      <div id="wrapper">
        <Element name="intro">
          <section className="intro">
            <h1>SANGJUN PORTFOLIO</h1>
            <div className="video_box">
              <video
                src="/videos/intro01.mp4"
                autoPlay
                loop
                muted
                playsInline
                width="600"
              />
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
            <VerticalLines />
          </section>
        </Element>
        <Element name="about">
          <section className="about" id="about">
            <div className="img-box">
              <div className="img-inner-box">
                <div className="img-card">
                  <div className="img-item">
                    <Image src={youngMe04} alt="youngMe04" />
                  </div>
                </div>
                <div className="img-card">
                  <div className="img-item">
                    <Image src={youngMe03} alt="youngMe03" />
                  </div>
                </div>
                <div className="img-card">
                  <div className="img-item">
                    <Image src={youngMe02} alt="youngMe02" />
                  </div>
                </div>
                <div className="img-card">
                  <div className="img-item">
                    <Image src={youngMe01} alt="youngMe04" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-doodle">
              <Doodle01 />
              <Doodle02 />
              <Doodle03 />
              <Doodle04 />
              <Doodle05 />
              <Doodle06 />
              <Doodle07 />
              <Doodle08 />
              <Doodle09 />
              <Doodle10 />
            </div>
            <div className="text-overlap">
              <div className="text-box">
                <div className="title-txt">
                  <h2>Curiosity, Persistence, and Growth</h2>
                </div>
                <div className="content-txt">
                  <div className="section-title">
                    <h3>About Me</h3>
                  </div>
                  <div className="section-content">
                    <p>
                      어려서부터 기계가 고장 나면 직접 분해해 내부를 살펴보고,
                      문제점을 파악한 후 해결하는 것을 좋아했습니다. 이러한 습관
                      덕분에 오류를 마주하면 주저하지 않고 개발자 도구를
                      하나하나 뜯어보며 원인을 분석하고 해결해 왔습니다.
                      <br />
                      <br />
                      문제를 해결하는 과정에서 단순히 오류를 수정하는 것에
                      그치지 않고, 왜 이런 문제가 발생했는지 원리를 탐구하는 데
                      집중합니다. 새로운 기술을 배우는 것도 마찬가지입니다.
                      단순한 기능 구현이 아니라, 기술의 본질을 이해하고 활용하는
                      것이 중요하다고 생각합니다.
                      <br />
                      <br />
                      이러한 탐구심과 집요함을 바탕으로, 더 나은 UI/UX 환경을
                      만들고 사용자에게 최적의 경험을 제공하는 UI/UX 엔지니어로
                      성장해 나가겠습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <VerticalLines />
          </section>
        </Element>
        <Element name="skills">
          <section className="skills" id="skills">
            <div className="skills_box">
              <div className="skills-title">
                <h2>My Skills</h2>
              </div>
              <div className="content-txt">
                <div className="section-title">
                  <h3>Develop</h3>
                </div>
                <SkillsList skills={developSkills} />
              </div>
              <div className="content-txt">
                <div className="section-title">
                  <h3>Design</h3>
                </div>
                <SkillsList skills={designSkills} />
              </div>
            </div>
            <VerticalLines />
          </section>
        </Element>
        <Element name="works">
          <section className="works" id="works">
            <div className="works_bg">
              {worksData.map((imgSrc, index) => (
                <Image
                  key={index}
                  src={imgSrc}
                  alt={`배경 ${index + 1}`}
                  fill
                  className={`bg_image ${hoverIndex === index ? "active" : ""}`}
                />
              ))}
              <div className="bg"></div>
            </div>
            <div className="works_content">
              <div className="title_box">
                <h2>Works</h2>
                <p>
                  외부 클라이언트와 자사 플랫폼의 UI/UX 디자인 및 UI 개발을
                  담당하였으며, Next.js와 React를 활용한 퍼블리싱과 CSS Module
                  기반 스타일링을 적용하여 다양한 기기와 브라우저에 최적화된 웹
                  애플리케이션을 구축하였습니다.
                </p>
              </div>
              <ul className="works_list">
                {worksItems.map((item, index) => (
                  <li
                    key={item.id}
                    className="works_item"
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="works_img">
                        <Image src={item.image} alt={item.title} />
                      </div>
                      <div className="works_text">
                        <div className="top">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                        <div className="bottom">
                          <div className="used-skills">
                            {item.skills.map((skill, i) => (
                              <span key={i}>{skill}</span>
                            ))}
                          </div>
                          <div className="contribution">
                            <div>{item.contribution}</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <VerticalLines />
          </section>
        </Element>
        <section className="projects" id="projects">
          <div className="projects_content">
            <div className="title_box" ref={titleBoxRef}>
              <h2>Projects</h2>
              <p>
                GSAP을 비롯한 애니메이션 라이브러리를 활용하여 사용자 경험을
                고려한 인터랙티브 웹 구현에 집중하였으며, Swiper 및 jQuery 등
                다양한 UI 스크립트를 실습하며 기능적인 완성도를 높였습니다. 클론
                코딩 과정을 통해 시멘틱 마크업의 구조적 중요성과 일관성 있는
                클래스 네이밍 기법을 체득하였고, 접근성을 위한 IR 기법과 이미지
                최적화를 위한 IS 기법의 적용을 통해 퍼포먼스 향상에도
                주력하였습니다.
              </p>
            </div>
            <ul className="projects_list" ref={projectsListRef}>
              <li className="projects_item">
                <a
                  href="https://holymolyjun.github.io/qude"
                  target="_blank"
                  className="project_link"
                >
                  <div>
                    <Image src={Project01} alt="QUDE" />
                  </div>
                </a>
                <div className="des">
                  <p>Qude : GSAP 반응형 클론코딩</p>
                  <a
                    href="https://sanjuuni32.notion.site/Qude-GSAP-1cfbee03037781d19d91f19ce178505c"
                    target="_blank"
                    className="code-review"
                  >
                    Code Review{" "}
                    <span>
                      <ArrowUpRight />
                    </span>
                  </a>
                </div>
              </li>
              <li className="projects_item">
                <a
                  href="https://holymolyjun.github.io/busancityhall"
                  target="_blank"
                  className="project_link"
                >
                  <div>
                    <Image src={Project02} alt="busan" />
                  </div>
                </a>
                <div className="des">
                  <p>부산광역시 : Swiper활용 클론코딩</p>
                  <a
                    href="https://sanjuuni32.notion.site/Swiper-1c1bee030377815d90fedad199eabbfc"
                    target="_blank"
                    className="code-review"
                  >
                    Code Review{" "}
                    <span>
                      <ArrowUpRight />
                    </span>
                  </a>
                </div>
              </li>
              <li className="projects_item">
                <a
                  href="https://holymolyjun.github.io/naver"
                  target="_blank"
                  className="project_link"
                >
                  <div>
                    <Image src={Project03} alt="naver" />
                  </div>
                </a>
                <div className="des">
                  <p>Naver : React 클론코딩</p>
                  <a
                    href="https://sanjuuni32.notion.site/Naver-React-1cfbee03037781e9a7eac4e5fbf761e6"
                    target="_blank"
                    className="code-review"
                  >
                    Code Review{" "}
                    <span>
                      <ArrowUpRight />
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <VerticalLines />
        </section>
        <Element name="goals">
          <footer>
            <div className="footer-content" id="goals">
              <div className="footer-top">
                <div className="goals">
                  <h3>My goals</h3>
                  <p>
                    OpenAI와 같은 기술의 발전 덕분에, 이제는 배우고자 하는
                    마음만 있다면 불가능한 일은 없다고 믿습니다.
                    <br />
                    아직 제가 알지 못하는 기술이나 역량이 있더라도, 스스로의
                    한계를 정하지 않고 끝까지 파고들며 끊임없이 배우고 성장해
                    나가겠습니다.
                  </p>
                </div>
                <div className="social">
                  <h3>Social</h3>
                  <div>
                    <a href="https://velog.io/@vlck1111/posts" target="_blank">
                      Blog
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/holymolyjun" target="_blank">
                      Github
                    </a>
                  </div>
                  <div>
                    <a href="https://bit.ly/sj-dev-resume" target="_blank">
                      Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <form onSubmit={sendEmail}>
                  <div className="feedback">
                    <input
                      type="text"
                      placeholder="Leave me a line of feedback if you can"
                      ref={inputRef}
                    />
                    <button type="submit">
                      <span>
                        <ArrowRight />
                      </span>
                    </button>
                  </div>
                  {sent && (
                    <p style={{ color: "green", padding: "10px" }}>
                      감사합니다! 피드백이 전송되었습니다.
                    </p>
                  )}
                </form>
              </div>
              <div className="copyright">
                <p>&copy; 2025 Lee-SangJun All Rights Reserved</p>
              </div>
            </div>
            <VerticalLines />
          </footer>
        </Element>
      </div>
    </>
  );
}
