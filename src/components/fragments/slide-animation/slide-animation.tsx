import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import styles from "./slide-animation.module.css";

interface SlideProps {
  index: number;
  text: string;
  activeSlideIndex: number;
}

export const SlideAnimation = ({
  index,
  text,
  activeSlideIndex,
}: SlideProps) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const textWrapRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    // killTimelineRef(timelineRef);

    if (activeSlideIndex + 1 !== index + 1) {
      return;
    }

    timelineRef.current = gsap.timeline({
      paused: true,
    });

    if (textWrapRef.current) {
      textWrapRef.current.childNodes.forEach((char) => {
        if (!char.nodeValue) {
          return;
        }

        const trimmed = char.nodeValue.trim();

        let wordIndex = 0;
        const words = [];

        for (let i = 0; i < trimmed.length; i++) {
          const el = document.createElement("h4");
          el.style.opacity = "0.5";
          el.className = styles.text;

          if (i === 0) {
            const word = document.createElement("span");
            word.style.display = "inline-flex";
            words[wordIndex] = word;
          }

          // if space - start new word
          if (trimmed[i] === " ") {
            wordIndex++;
            const wordEl = document.createElement("span");
            wordEl.style.display = "inline-flex";
            words[wordIndex] = wordEl;

            el.innerHTML = "\u00A0";
          } else {
            el.innerText = trimmed[i];
          }
          words[wordIndex].appendChild(el);
        }

        if (textWrapRef.current?.parentNode) {
          words.forEach((word) => {
            // Append node
            textWrapRef.current?.parentNode?.appendChild(word);

            // Colour
            if (word && timelineRef.current) {
              const q = gsap.utils.selector(word);
              timelineRef.current.to(q("h4"), { opacity: 1, duration: 0.1 });
            }
          });

          textWrapRef.current.parentNode.removeChild(textWrapRef.current);
        }
      });
    }
    gsap.to(timelineRef.current, {
      time: timelineRef.current.duration(),
      duration: timelineRef.current.duration(),
      ease: "power3.inOut",
      delay: 1,
    });

    // PLAY timeline
    timelineRef.current.play();
  }, [activeSlideIndex]);
  return (
    <div className={styles["text-wrap"]}>
      <h4 ref={textWrapRef}>{text}</h4>
    </div>
  );
};
