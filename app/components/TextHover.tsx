import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface TextHoverProps {
  text: string;
}

const TextHover: React.FC<TextHoverProps> = ({ text }) => {
  const hoverInnerRef = useRef<HTMLDivElement>(null);
  const topElemRef = useRef<HTMLDivElement>(null);
  const bottomElemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hoverInnerRef.current || !topElemRef.current || !bottomElemRef.current) return;

    const topSpans = topElemRef.current.querySelectorAll("span");
    const bottomSpans = bottomElemRef.current.querySelectorAll("span");

    if (topSpans.length === 0 || bottomSpans.length === 0) return;

    // 마우스 올릴 때 실행할 애니메이션 타임라인
    const tlEnter = gsap.timeline({ paused: true });
    tlEnter
      .to(topSpans, {
        y: "-100%",
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.02,
      })
      .to(
        bottomSpans,
        {
          y: "-100%",
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.02,
        },
        0
      );

    // 마우스 뗄 때 실행할 애니메이션 타임라인
    const tlLeave = gsap.timeline({ paused: true });
    tlLeave
      .to(topSpans, {
        y: "0%",
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.02,
      })
      .to(
        bottomSpans,
        {
          y: "0%",
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.02,
        },
        0
      );

    // 마우스가 들어가면 tlEnter를 restart()해서 항상 처음부터 재생
    const handleMouseEnter = () => {
      tlEnter.restart();
    };

    // 마우스가 떠나면 tlLeave를 restart()해서 항상 처음부터 재생
    const handleMouseLeave = () => {
      tlLeave.restart();
    };

    const currentEl = hoverInnerRef.current;
    currentEl.addEventListener("mouseenter", handleMouseEnter);
    currentEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      currentEl.removeEventListener("mouseenter", handleMouseEnter);
      currentEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="text-hover_inner" ref={hoverInnerRef}>
      {/* 기본 글자 */}
      <div className="text-hover_elem bottom" ref={bottomElemRef}>
        {text.split("").map((char, index) => (
          <span key={index} style={{ display: "inline-block" }}>
            {char}
          </span>
        ))}
      </div>
      {/* Hover 시 올라오는 글자 */}
      <div className="text-hover_elem top" ref={topElemRef}>
        {text.split("").map((char, index) => (
          <span key={index} style={{ display: "inline-block" }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextHover;
